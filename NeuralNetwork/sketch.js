let dataSet;
let trainingData = [];

let nn;

function preload() {
    dataSet = loadTable('mnist/1.csv', 'csv');
}

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < dataSet.rows.length; i++) {
        trainingData[i] = {
            targets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            inputs: []
        }
        trainingData[i].targets[parseInt(dataSet.rows[i].arr[0])] = 1;
        for (let j = 1; j < dataSet.rows[i].arr.length; j++) {
            trainingData[i].inputs[j - 1] = parseInt(dataSet.rows[i].arr[j])/255;
        }
    }

    nn = new NeuralNetwork([trainingData[0].inputs.length, 16, trainingData[0].targets.length])
    //console.log(trainingData);
    //train();
}

train_index = 0;
function train() {
    for (let i = 0; i < 20; i++) {
        let data = trainingData[train_index]//random(trainingData);
        output = nn.FeedForward(data.inputs);
        nn.BackPropogate(data.targets);
        train_index = (train_index+1)%500;
    }
}

function draw() {
    background(51);

    let output;

    //Select input randomly
    let data = random(trainingData);
    console.log(data.targets);
    
    //Draw image of selected input on canvas
    let y = 20;
    let x = 20;
    for (let k = 0; k < data.inputs.length; k++) {
        if (k % 28 == 0)
            y += 5;
        noStroke();
        fill(data.inputs[k]*255);
        rect(x + 5 * (k % 28), y, 5, 5);
    }

    output = nn.FeedForward(data.inputs);
    nn.BackPropogate(data.targets);

    //Print Guess on Canvas 
    let max = 0;
    for (let i = 1; i < output.length; i++) {
        if (output[max] < output[i])
            max = i;
    }
    push();
    fill(255);
    textSize(70);
    text(max, width / 2 + 20, 150);
    pop();

    
    train();
}


function XORExample() {
    let trainingData = [
        {
            inputs: [0, 0],
            targets: [0]
        },
        {
            inputs: [0, 1],
            targets: [1]
        },
        {
            inputs: [1, 0],
            targets: [1]
        },
        {
            inputs: [1, 1],
            targets: [0]
        }
    ]

    let nn = new NeuralNetwork([2, 4, 1]);

    for (var i = 0; i < 10000; i++) {
        let data = random(trainingData);
        nn.FeedForward(data.inputs);
        nn.BackPropogate(data.targets);
    }

    for (let data of trainingData) {
        console.log(nn.FeedForward(data.inputs)[0]);
    }
}
