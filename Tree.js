class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("Plucking_mangoes/tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();

    }
}