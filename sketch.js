
var dog1,happyDog,databse,foodS,foodStock
function preload()
{
  dog1=loadImage("images/dogImg1.png")
  happyDog=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,5,5);
  dog.addImg(dog1);
  database=firebase.database;
  foodStock=databse.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  noStroke();
  textSize(35)
  fill("white")
  text("Milk Bottles-" + foodStock , width-300, 50)
}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}