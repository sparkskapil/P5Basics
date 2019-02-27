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
        if (this.position.y > height - this.radius || this.position.y < this.radius) {
            this.velocity.y *= -1;
        }
        this.position.add(this.velocity);
    }

    checkCollision(gameObject) {
        let dX = this.position.x - gameObject.position.x;
        let dY = this.position.y - gameObject.position.y;
        dX = Math.abs(dX);
        dY = Math.abs(dY);
        
        if (dY<=gameObject.length/2 && dX<=this.radius + gameObject.width/2)
        {
            console.log(dX+" "+dY);
            return true;
        }
        // if(dX > width/2)
        //     this.isCollided = false;
    }

    onCollide(gameObject) {

        if (this.checkCollision(gameObject)&&this.collidedWith != gameObject) {
            this.velocity.x *= -1;
            gameObject.UpdateScore();
            this.collidedWith = gameObject;
        }

    }

    isOffscreen(leftObject,rightObject)
    {
        if(this.position.x > rightObject.position.x + this.radius*2 || this.position.x < leftObject.position.x - this.radius*2)
            return true;
    }
}