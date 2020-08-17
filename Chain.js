class Chain{
constructor(bodyA, bodyB){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        length: 10,
        stiffness: 0.08,
    }

    this.body = Matter.Constraint.create(options);
    World.add(world, this.body);


}
display(){
    strokeWeight(4);
    line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.bodyB.position.x, this.body.bodyB.position.y);
}


}