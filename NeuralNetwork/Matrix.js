class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.mat = [];
        for (let i = 0; i < this.rows; i++) {
            this.mat[i] = [];
            for (let j = 0; j < this.cols; j++)
                this.mat[i][j] = 0;
        }
    }

    Randomize() {
        for (let i = 0; i < this.rows; i++) {
            this.mat[i] = [];
            for (let j = 0; j < this.cols; j++)
                this.mat[i][j] = Math.random();
        }
    }

    static Add(lMat, rMat) {
        let rows = lMat.rows;
        let cols = lMat.cols;
        let sum = new Matrix(rows, cols);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++)
                sum.mat[i][j] = lMat.mat[i][j] + rMat.mat[i][j];
        }
        return sum;
    }
    
    static Subtract(lMat,rMat)
    {
        let negativeMat = Matrix.Multiply(rMat,-1);
        return Matrix.Add(lMat,negativeMat); 
    }

    static Multiply(lhs, rhs) {
        if (rhs instanceof (Matrix)) {
            let rows = lhs.rows;
            let cols1 = lhs.cols;
            let cols2 = rhs.cols;

            let product = new Matrix(rows, cols2);

            for (let i = 0; i < rows; i++)
                for (let j = 0; j < cols1; j++)
                    for (let k = 0; k < cols2; k++)
                        product.mat[i][k] += lhs.mat[i][j] * rhs.mat[j][k];

            return product;
        }
        else if (Array.isArray(rhs)) {
            let product = new Matrix(lhs.rows, lhs.cols);
            for (let i = 0; i < lhs.cols; i++) {
                for (let j = 0; j < lhs.rows; j++) {
                    product.mat[j][i] = lhs.mat[j][i] * rhs[j];
                }
            }
            return product;
        }
        else {
            let product = new Matrix(lhs.rows, lhs.cols);
            for (let i = 0; i < lhs.rows; i++)
                for (let j = 0; j < lhs.cols; j++)
                    product.mat[i][j] = lhs.mat[i][j] * rhs;

            return product;
        }
    }


    ToVector() {
        let vector = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++)
                vector.push(this.mat[i][j]);
        }
        return vector;
    }

    Transpose() {
        let transpose = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                transpose.mat[j][i] = this.mat[i][j];
        return transpose;
    }

    static FromVector(vector) {
        let matrix = new Matrix(vector.length, 1);
        for (let i = 0; i < vector.length; i++) {
            matrix.mat[i][0] = vector[i];
        }
        return matrix;
    }

    Map(callback) {
        let mapped = new Matrix(this.rows,this.cols);
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                mapped.mat[i][j] = callback(this.mat[i][j]);

        return mapped;
    }

    

}