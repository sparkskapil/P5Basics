class Ball {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.radius = 20;
        this.collidedWith = null;
    }

    setVelocity(x, y) {
        this.velocity.x = x;
        this.velocity.y = y
    }

    Render() {
        fill(255);
        stroke(255)
        ellipse(this.position.x, this.position.y, this.radius);
    }

    Update() {
        if (this.position.y < this.radius) {
            this.velocity.y *= -1;
            this.collidedWith = null;
        }
        if (this.position.x > width - this.radius || this.position.x < this.radius) {
            this.velocity.x *= -1;
            this.collidedWith = null;
        }
        this.position.add(this.velocity);
    }

    checkCollision(gameObject) {
        let dX = this.position.x - gameObject.position.x;
        let dY = this.position.y - gameObject.position.y;
        dX = Math.abs(dX);
        dY = Math.abs(dY);

        if (dY <= gameObject.length / 2 && dX <= this.radius + gameObject.width / 2) {
            return true;
        }
    }

    onCollide(gameObject) {
        if (this.checkCollision(gameObject) && this.collidedWith != gameObject) {

            this.collidedWith = gameObject;

            if (gameObject instanceof Brick) {
                gameObject.onCollide();
                this.velocity.y *= -1;
                return;
            }

            let currentMagnitude = dist(0, 0, this.velocity.x, this.velocity.y);
            let newVelocity = createVector(0, 0);
            newVelocity.add(this.position);
            let pivot = gameObject.pivot.mult(-1);
            newVelocity.add(pivot);
            newVelocity.normalize();
            newVelocity.mult(currentMagnitude);
            newVelocity.x += gameObject.velocity.x;
            this.velocity = newVelocity;

            currentMagnitude = dist(0, 0, this.velocity.x, this.velocity.y);
            currentMagnitude = constrain(currentMagnitude, 2, 7);
            this.velocity.normalize()
            this.velocity.mult(currentMagnitude);
        }
    }

    isOffscreen() {
        if (this.position.y > height - this.radius)
            return true;
    }
}