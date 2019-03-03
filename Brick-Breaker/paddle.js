class Paddle {
    constructor(position, width, length) {
        this.position = position;
        this.velocity = createVector(0, 0);
        this.width = width;
        this.length = length;
        this.score = 0;
        this.color = "#f2f2f2";
        this.pivot = createVector(0, 0);
        this.pivot_dist = 50;
    }

    SetColor(color) {
        this.color = color;
    }

    SetVelocity(x, y) {
        this.velocity.x = x;
        this.velocity.y = y;
    }

    Update() {
        this.position.add(this.velocity);
        this.position.x = constrain(this.position.x, this.width / 2, width - this.width / 2);

        this.pivot = Object.assign(this.pivot, this.position);
        this.pivot.y += this.pivot_dist;
    }

    UpdateScore() {
        this.score++;
    }

    Render() {
        let x = this.position.x - this.width / 2;
        let y = this.position.y - this.length / 2;
        fill(this.color);
        noStroke();
        rect(x, y, this.width, this.length)
    }
}