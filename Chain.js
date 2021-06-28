class Chain{
    constructor(object1, object2){
        var options = {
            bodyA:object1,
            bodyB:object2,
            lenth:10,
            stiffness:1
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}