class Land{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,300,100,{isStatic:true});
        World.add(world,this.body);
        this.image = loadImage("sideImg.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,100);
    }
}