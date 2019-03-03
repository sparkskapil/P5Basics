class Brick {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.length = 15;
        this.width = 50;
        this.color = 255;
        this.delete = false;
    }

    Render() {
        if (this.delete)
            return;
        push();
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        rect(this.position.x, this.position.y, this.width, this.length);
        pop();
    }

    onCollide() {
        this.position = createVector(width * 2, height * 2);
        this.delete = true;
    }
}