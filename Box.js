class Box{
    constructor(x,y,width,height){
        
         
        obj1 = Bodies.rectangle(x,y,width,height);
        World.add(world,obj1);
    }

    display(){
     
        rect(obj1.position.x,obj1.position.y,20,100)
    }
}