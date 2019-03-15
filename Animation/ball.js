var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

var balls = [];
var amount = 1;

var currentState =  "circle";

var states = [];

states["none"] = function(){};
states["circle"] = function(){
    for (let i = 0; i < balls.length; i++)
    {
        balls[i].drawCircle();
        balls[i].move();
        if(balls[i].y > c.height - balls[i].h || balls[i].y < balls[i].w)
        {
            balls[i].vy = -balls[i].vy;
        }
    }
};

states["square"] = function(){
    for (let i = 0; i < balls.length; i++)
    {
        balls[i].color = "blue";
        balls[i].drawCircle();
        balls[i].move();
        if(balls[i].y > c.height + balls[i].h/2)
        {
            balls[i].y = 0 - balls[i].h/2;
            currentState = "circle";
        }
    }
};

function rand(low, high)
{
    return Math.random() * (high - low) + low;
}

console.log(rand(-12,8));

for (let i = 0; i < amount; i++)
{
    balls[i] = new GameObject();
    balls[i].x = Math.round(rand(0, c.width));
    balls[i].y = Math.round(rand(0, c.height)); 
    balls[i].vy = Math.round(rand(5,15));
    balls[i].vx = 0;

    balls[i].w = balls[i].vy;; //Math.round(rand(0, c.height));
    balls[i].h = balls[i].vy;


}

main();

function main()
{
    ctx.clearRect(0,0,c.width,c.height);
    
    states[currentState](); //value of drop down
    
    setTimeout(main, 1000/60);
}
/*
var balls = [];
var amount = 1;

var currentState = "circle";

var states = [];

states["none"] = function(){};
states["circle"] = function(){
    for (let i = 0 ; i < balls.length; i++)
    {
        balls[i].drawBall();
        balls[i].move();

        if(balls[i].x + balls[i].vx > canvas.width-balls[i].w/2 || balls[i].x + balls[i].vx < balls[i].w/2) 
        {
            balls[i].vx = -balls[i].vx;
        }
        if(balls[i].y + balls[i].vy > canvas.height-balls[i].w/2 || balls[i].y + balls[i].vy < balls[i].w/2) 
        {
            balls[i].vy = -balls[i].vy;
        }
        
    };

    for (let i = 0; i < amount; i++)
    {
        balls[i] = new BallObject();
    }

main();

function main()
{
    ctx.clearRect(0,0,c.width,c.height);
    
    states[currentState](); //value of drop down
    
    setTimeout(main, 1000/60);
}*/