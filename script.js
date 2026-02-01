let list = [];
// identical to "var"

function preload(){
  list = loadJSON ("data.json");
}

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(240,67,151);
  // fill(240,200,67);
  // strokeWeight(0,0,0);
  // circle(mouseX,mouseY,100);
  // rect(70,20,50,50);
  // fill ("0");

  //Title
  textAlign("center");
  textSize(20);
  text("Canada's Exports", 200,40);

  //Iterate through the list and place elements
  Object.values(list).map((item, index) => {
    rect(50, index * 30 + 70, item.amount, 10);
    textSize(10);
    textAlign ("left");
    text(item.name, 50, index * 30 + 65);
  });
}