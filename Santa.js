class Santa{
    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height,{density:1});
        World.add(world,this.body);
    }
}