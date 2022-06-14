var road;

function preload (){
    roadImg = loadImage("Road.png");
}

function setup (){
    createCanvas(600,200);

    road = createSprite(400,300);
    road.addImage(RoadImg);
    road.velocityY = 6;
}

function draw (){
    drawSprites();
}