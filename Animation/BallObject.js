class GameObject
{
    constructor(a)
    {
        this.x = 100;
        this.y = 100;
        this.w = 100;
        this.h = 100;
        this.vx = 10;
        this.vy = 0;
        this.color = "#0095DD";
        this.angle = 0;

    }
    drawCircle()
    {
        ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angle * Math.PI/180);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0,0,this.w/2,0, 360 * Math.PI/180, false);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }

    drawRect()
    {
        ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angle * Math.PI/180);
            ctx.fillStyle = this.color;
            ctxfillRect(-this.w/2, -this.h/2, this.w, this.h);
        ctx.restore();
    }

    move()
    {
        this.x += Math.round(this.vx);
        this.y += Math.round(this.vy);
    }
}
/*class BallObject
{
    constructor(a)
   /* {
        this.x = c.width/2;
        this.y = c.height-30;
        this.w = 100;
        this.h = 100;
        this.vx = 2;
        this.vy = -2;
        this.angle = 0;
        this.color = "#0095DD"
    }

    drawBall() 
    {
        ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angle * Math.PI/180);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.w/2, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }

    move()
    {
        this.x += Matth.round(this.vx);
        this.y += Math.round(this.vy);
    }

    
    {
        this.x = 100;
        this.y = 100;
        this.w = 100;
        this.h = 100;
        this.vx = 5;
        this.vy = -5;
        this.color = "blue";
        this.angle = 0;

    }
    drawCircle()
    {
        ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angle * Math.PI/180);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0,0,this.w/2,0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fill();
        ctx.restore();
    }

move()
{   
    this.x += Math.round(this.vx);
    this.y += Math.round(this.vy);
}
*/

