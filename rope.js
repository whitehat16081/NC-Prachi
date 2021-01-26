class rope{
    constructor(bodyA,bodyB,Xoffset,Yoffset){
        this.Xoffset=Xoffset;
        this.Yoffset=Yoffset;

        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x: this.Xoffset, y: this.Yoffset},
            length :300
           
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    
    

    display(){

        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
stroke("white");
        line(pointA.x,pointA.y,pointB.x+this.Xoffset,pointB.y+this.Yoffset);
        }
    }
