class Level1 extends Level{
    constructor()
    {
        super();
        this.bricks = [];
        this.Radius = 100;
        this.Distance;
        let cx = width/2;
        let cy = height/2 - this.Radius;    
        for(let i=0;i<TWO_PI;i+=0.5)
        {
            let x = cx + Math.cos(i)*this.Radius;
            let y = cy + Math.sin(i)*this.Radius;
            let brick1 = new Brick(x-30,y);
            let brick2 = new Brick(x+30,y); 
            this.bricks.push(brick1);
            this.bricks.push(brick2);
        }
    }

    Render()
    {
        for(let i=0;i<this.bricks.length;i++)
        {
            this.bricks[i].Render();
        }
    }
}