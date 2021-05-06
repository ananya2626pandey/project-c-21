var canvas,box1,box2,box3,box4,ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box1=createSprite(100,580,180,30)
     box1.shapeColor="blue";

     box2=createSprite(300,580,180,30)
     box2.shapeColor="yellow";

     box3=createSprite(500,580,180,30)
     box3.shapeColor="purple";

     box4=createSprite(700,580,180,30)
     box4.shapeColor="green";


    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,50,50);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=9;
}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(box1.isTouching(ball)&& ball.bounceOff(box1)){
        ball.shapeColor="blue";
        
    }
    if(box2.isTouching(ball)&& ball.bounceOff(box2)){
        ball.shapeColor="yellow";
       
    }
    if(box4.isTouching(ball)&& ball.bounceOff(box4)){
        ball.shapeColor="green";
        music.play();
    }
    if(box3.isTouching(ball)){
        ball.shapeColor="purple";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    drawSprites();
    //add condition to check if box touching surface and make it box
}
