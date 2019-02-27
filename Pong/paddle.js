class Paddle
{
    constructor(position,width,length)
    {
        this.position = position;
        this.velocity = createVector(0, 0);
        this.width = width;
        this.length = length;
        this.score = 0;
        this.color = "#f2f2f2";
    }

    setColor(color)
    {
        this.color = color;
    }

    SetVelocity(velocity)
    {
        this.velocity.x = velocity.x;
        this.velocity.y = velocity.y;
    }

    Update()
    {
        this.position.add(this.velocity);
        this.position.y = constrain(this.position.y,this.length/2,height - this.length/2);
    }

    UpdateScore()
    {
        this.score++;
    }

    Render()
    {
        let x = this.position.x - this.width/2;
        let y = this.position.y - this.length/2;
        fill(this.color);
        noStroke();
        rect(x,y,this.width,this.length)
    }
}