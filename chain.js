class Slingshot {
    constructor(bodyA,pointB) {
        var options = {
            "bodyA":bodyA,
            "pointB":pointB,
            "stiffness": 0.04,
            "length": 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot)
    }
    display() {
        if(this.slingshot.bodyA) {
        strokeWeight(4);
        stroke("turquoise")
        line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,
            this.pointB.y)
        }
    }
    fly() {
        this.slingshot.bodyA = null;
    }
}