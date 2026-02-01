let list = [];
// identical to "var"

function preload(){
  list = loadJSON ("data.json");
}

function setup() {
  createCanvas(400, 615);
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

  //Iterate through the list and place elements (Loop)
  Object.values(list).map((item, index) => {
    fill (item.color)
    rect(50, index * 30 + 70, item.amount/180 * 300, 10);
    
    // 180/180 = 100%
    // 37/18- = 21%

    textSize(10);
    textAlign ("left");
    fill ("black")
    text(item.name, 50, index * 30 + 65);
    textSize(20);
    textAlign("right")
    text(item.icon, 48, index * 30 + 75);
  });
}