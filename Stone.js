class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("Plucking_mangoes/stone.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}