var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var ground,invisibleGround;

function preload(){
  pathImg = loadImage ("path.png"); 
  boy = loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png"); 
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
  pathImg = createSprite(20,400,300,300);
//adicione uma imagem para a pista
 pathImg = loadImage("path.png");
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
if (ground.x < 0){
  ground.x = ground.width/2;
}
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(20,20,200,200);
//adicione uma animação de corrida para ele
boy = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = word.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  boy.collide(invisibleGround);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
