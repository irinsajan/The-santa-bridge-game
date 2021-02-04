class Wood{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,100,40,{isStatic:true});
        World.add(world,this.body);
        this.image = loadImage("woodImg.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,100,40);
    }
}