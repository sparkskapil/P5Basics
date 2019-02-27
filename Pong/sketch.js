let paddle1;
let paddle2;
let ball;
let game;
function setup() {
    createCanvas(800, 600);
    paddle1 = new Paddle(createVector(40, height / 2), 10, 100);
    paddle2 = new Paddle(createVector(width - 40, height / 2), 10, 100);
    paddle1.setColor("#940439");
    paddle2.setColor("#105DDA");
    ball = new Ball(width / 2, height / 2);
    game = "paused";
}

function startGame()
{
    if(game == "paused")   
    {
        ball.setVelocity(-4, 3);
        game = "started";
    }
}

function draw() {
    background("#005F43");
    displayHUD();
    if(game != "gameover")
    {
        paddle1.Update();
        paddle2.Update();
        paddle1.Render();
        paddle2.Render();

        if(ball.isOffscreen(paddle1,paddle2))
        {
            game = "gameover";
        }

        ball.onCollide(paddle1);
        ball.onCollide(paddle2);
        ball.Update();
        ball.Render();
    }
    
}

function keyPressed() {
    startGame();

    if (keyIsDown(UP_ARROW))
        paddle2.SetVelocity(createVector(0, -10));
    if (keyIsDown(DOWN_ARROW))
        paddle2.SetVelocity(createVector(0, +10));

    if (keyIsDown(87))
        paddle1.SetVelocity(createVector(0, -10));
    if (keyIsDown(83))
        paddle1.SetVelocity(createVector(0, +10));
}

function keyReleased() {
    if (!keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW))
        paddle2.SetVelocity(createVector(0, 0));
    if (!keyIsDown(87) && !keyIsDown(83))
        paddle1.SetVelocity(createVector(0, 0));
}

function displayHUD() {
    textSize(50);
    textAlign(CENTER, CENTER);
    textAlign(RIGHT);

    noStroke();
    fill(paddle1.color);
    text(paddle1.score, width*0.25, 50);

    textAlign(LEFT);
    fill(paddle2.color);
    text(paddle2.score, width*0.75, 50);
    
    fill(255);
    strokeWeight(4);
    stroke(255);
    line(width/2,0,width/2,height);
}