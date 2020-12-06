var bullet,material;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
   
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 200, 10);
  bullet.shapeColor = ("red")
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = ("white")
}

function draw() {
  background("black");  

if(isTouching(wall,bullet)){
  bullet.velocityX = 0;
  var damage = 10 * speed * speed/(thickness * thickness * thickness)
  if(damage>10){
    wall.shapeColor = "red";
    textSize(20)
    text("rejected",200,200);
    text("damage: "+damage,150,150)

  }if(damage<10){
    wall.shapeColor ="green";
    textSize(20)
    text("selected",200,200);
    text("damage: "+damage,150,150)
  }
}
 
  drawSprites();
}

function isTouching (object1,object2) {
  if (object2.x - object1.x < object1.width/2+object2.width/2 &&
    object1.x - object2.x < object1.width/2+object2.width/2 &&
    object2.y - object1.y < object1.height/2+object2.height/2 &&
    object1.y - object2.y < object1.height/2+object2.height/2 ){
   return true;
    
  } else {
    return false;
  }
}