class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 700
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x < 220)
                strokeWeight(7);
            else
               strokeWeight(3);
            stroke("pink")
            line(pointA.x , pointA.y, pointB.x , pointB.y);
            pop();
        }
    }
    
}