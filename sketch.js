var dogimg
var dog
var foodcount
var database
var button1
var button2
function preload()
{
dogimg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
dog=createSprite(400,350,30,30) 
dog.addImage(dogimg)
dog.scale=0.5
var foodref = database.ref("foodcount");
foodref.on("value",function (data){
foodcount = data.val();
}
)
button1 = createButton("Add Food")
button2 = createButton("Feed the Dog")
button1.position(400,500)
button2.position(1000,500)
}
function draw() {  
background("green")
textSize(30)
stroke("black")
fill("black")
text("food count remaining is " + foodcount, 275,150)
button2.mousePressed(()=>{
  database.ref("/").update({
    foodcount: foodcount-1
    })
})
button1.mousePressed(()=>{
  database.ref("/").update({
    foodcount: foodcount+1
    })
})
  drawSprites();
  //add styles here

}



