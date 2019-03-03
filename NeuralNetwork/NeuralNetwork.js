class NeuralNetwork {

    constructor(listNodesPerLayer) {
        this.layers = [];
        this.weights = [];
        this.learningRate = 0.1;
        this.bias = [];
        let count = 0;

        for (let nodes of listNodesPerLayer) {
            this.layers[count] = [];
            for (let i = 0; i < nodes; i++) {
                this.layers[count][i] = 0;
            }
            count++;
        }

        this.outIndex = this.layers.length - 1;

        this.initializeWeights();
    }

    initializeWeights() {
        for (let i = 0; i < this.layers.length - 1; i++) {
            this.weights.push(new Matrix(this.layers[i + 1].length, this.layers[i].length));
            this.weights[i].Randomize();
            
            let bias = new Matrix(this.layers[i + 1].length,1);
            bias.Randomize();
            this.bias.push( bias );
        }
    }

    ActivationFunction(x) {
        return 1 / (1 + Math.exp(-x));
    }

    DeactivationFunction(y)
    {
        return y*(1-y);
    }

    FeedForward(input) {
        if (!Array.isArray(input))
            return;

        //ASSIGN INPUTS TO LAYER 0
        Object.assign(this.layers[0], input);

        for (let i = 0; i < this.layers.length - 1; i++) {
            let layer = Matrix.FromVector(this.layers[i]);
            let product = Matrix.Multiply(this.weights[i], layer);
            
            //ADD BIAS
            product = Matrix.Add(product,this.bias[i]);
            
            //APPLY ACTIVATION FUNCTION TO LAYER
            product = product.Map(this.ActivationFunction);

            Object.assign(this.layers[i + 1], product.ToVector());
        }

        return this.layers[this.outIndex];
    }

    BackPropogate(target) {
        let Output = Matrix.FromVector(this.layers[this.outIndex]);
        let Target = Matrix.FromVector(target);
        let Error = Matrix.Subtract(Target,Output);

        for(let i = this.outIndex;i>0;i--)
        {
            let thisLayer = Matrix.FromVector(this.layers[i]);
            let nextLayer = Matrix.FromVector(this.layers[i-1]);
            let nextLayerT = nextLayer.Transpose();
            let gradient = thisLayer.Map(this.DeactivationFunction); 

            let nextError = Matrix.Multiply(this.weights[i-1].Transpose(),Error);
            Error = Error.ToVector();
            let LrXGradient = Matrix.Multiply(gradient,this.learningRate)
            let LrXGradientXError = Matrix.Multiply(LrXGradient,Error);
            let deltaW = Matrix.Multiply(LrXGradientXError,nextLayerT);

            this.bias[i-1]=Matrix.Add(this.bias[i-1],LrXGradientXError);

            this.weights[i-1] = Matrix.Add(this.weights[i-1],deltaW);

            Error=nextError;
        }
    }
}