let paddle;
let ball;
let brick;
let level;
function setup() {
    createCanvas(800, 600);
    paddle = new Paddle(createVector(width / 2, height - 20), 150, 15);
    ball = new Ball(paddle.position.x, paddle.position.y - 19);
    ball.setVelocity(3, -2);

    level = new Level1;
}

function draw() {
    background("#333");
    level.Render();
    paddle.Update();
    paddle.Render();
    ball.Update();
    ball.Render();
    ball.onCollide(paddle);
    for(let i=0;i<level.bricks.length;i++)
        ball.onCollide(level.bricks[i]);

    level.Render();
}

function keyPressed() {
    if (keyCode == LEFT_ARROW)
        paddle.SetVelocity(-10, 0);
    if (keyCode == RIGHT_ARROW)
        paddle.SetVelocity(+10, 0);
}

function keyReleased() {
    paddle.SetVelocity(0, 0);
}

