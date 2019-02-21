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
        this.color = "red";
        this.angle = 0;

      /*  if(a !== undefined)
        {
            for(let value in a)
            {
                if(this[value])
                {
                    this[value] = a[value];
                }
            }
        } */
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
        this.y += this.vy;
    }
}

 
//---old way
 /* function GameObject()
{
    this.x =
    this.y =
    this.w =
    this.h =
    this.vx =
    this.vy =
    this.color =

    this.drawCircle = function()
    {

    }

    this.drawRect = function()
    {

    }

    this.move = function()
    {

    }
} */