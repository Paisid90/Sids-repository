let level =0
function setup() {
  frameRate(60);
  createCanvas(800, 800);
  timer = 0;
  x = width / 2;
  y = height / 2;
  stroke(0);
  strokeWeight(1);
  let prevX;
  let prevY;

  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  leveltimer = 0;
  Chaser1 = [-100, -100, 0, -1];

  Chaser2 = [-100, height+100, 0, -1];
  
  Chaser3 = [width+100, height+100, 0, -1];
  
  Tracer1 = [width+100, -100,0,0,-1]
  Tracer2 = [-100, height+100,0,0,-1]
  
  Racer1 = [width+200,-200,0,0,100]
  
  gameover = false;
}

function draw() {
  if(level == 0){
    r = map(timer, 100, 0, 150, 0);
  g = map(timer, 100, 0, 100, 0);
  b = map(timer, 100, 0, 100, 0);
  background(r, g, b);
    if (timer > 0) {
    timer--;
  } else if (timer < 1 && timer > -10) {
    background(70 + timer * 5, 60 + timer * 5, 50 + timer * 5);
    timer--;
  }
    text('They Are After You', 200,200);
    text('Do Not Let Them Catch You', 200,300);
    text('Dash Into The Box To Continue', 200,400);
    rect(300,600,200,100)
    leveltimer = 0
  }
  if (level == 0) {
    if(mouseX>300&&mouseX<500&&mouseY>600&&mouseY<700){
      if (timer <= 0){
      if(mouseIsPressed){
        level =1
        
        
      }}
    }
  }
  if (level == 1) {
  r = map(timer, 100, 0, 150, 50);
  g = map(timer, 100, 0, 100, 150);
  b = map(timer, 100, 0, 100, 250);
  background(r, g, b);
    if (timer > 0) {
    timer--;
  } else if (timer < 1 && timer > -10) {
    background(200 + timer * 5, 200 + timer * 5, 250 + timer * 5);
    timer--;
  }

  }
  if (level == 2) {
  r = map(timer, 100, 0, 150, 70);
  g = map(timer, 100, 0, 100, 250);
  b = map(timer, 100, 0, 100, 145);
  background(r, g, b);
    if (timer > 0) {
    timer--;
  } else if (timer < 1 && timer > -10) {
    background(200 + timer * 5, 260 + timer * 5, 240 + timer * 5);
    timer--;
  }

  }
   if (level == 3) {
  r = map(timer, 100, 0, 150, 200);
  g = map(timer, 100, 0, 100, 50);
  b = map(timer, 100, 0, 100, 50);
  background(r, g, b);
    if (timer > 0) {
    timer--;
  } else if (timer < 1 && timer > -10) {
    background(220 + timer * 5, 100 + timer * 5, 100 + timer * 5);
    timer--;
  }

  }
  if (level == 10) {
  r = map(timer, 100, 0, 150, 250);
  g = map(timer, 100, 0, 100, 200);
  b = map(timer, 100, 0, 100, 100);
  background(r, g, b);
    if (timer > 0) {
    timer--;
  } else if (timer < 1 && timer > -10) {
    background(260 + timer * 5, 240 + timer * 5, 200 + timer * 5);
    timer--;
  }

  }

  //cooldown
  
  if (mouseIsPressed) {
    if (timer <= 0) {
      timer = 100;

      //slash
      prevX = x;
      prevY = y;
      x = mouseX;
      y = mouseY;
      stroke(255, 220, 255);
      strokeWeight(10);
      line(prevX, prevY, x, y);

      stroke(0, 0, 0);
      strokeWeight(1);
    }
  }
  //object
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(1);
  ellipse(x, y, 10);
  x += map(mouseX - x, -width, width, -40, 40);
  y += map(mouseY - y, -height, height, -40, 40);
  leveltimer++;

  //enemies--
  //1-Chaser: directly comes at the player through diagonals
  //2-Tracer: approaches the player indirectly,through orbit
  //3-Racer: rapidly bounces around the screen
  
  if (level == 1) {
    if(leveltimer<100){
      textSize(50);
    text('Level 1', 340,390);
      text('Do Not Die', 300,450);
    }
    if (leveltimer == 200) {
      
      Chaser1 = newChaser(Chaser1);
    }
    if (leveltimer == 400){
      Tracer1 = newTracer(Tracer1)
    }
    
    if (leveltimer == 600) {
       Chaser2 = newChaser(Chaser2);
    }
    if(leveltimer > 100 && leveltimer <1400){
      Racer1=Racer(Racer1)
    }
    
    Chaser1 = Chaser(Chaser1);
    Chaser2 = Chaser(Chaser2);
    Tracer1 = Tracer(Tracer1);
    if(leveltimer > 1600){
      level = 2
      leveltimer = 0 
      newRacer()
    }
  }
  if (level == 2) {
     if(leveltimer<100){
      textSize(50);
    text('Level 2', 340,390);
      text('Do Not Die', 300,450);
    }
    if (leveltimer == 200){
    Chaser1 = newChaser(Chaser1);
    Tracer1 = newTracer(Tracer1)
    
      Tracer2 = newTracer(Tracer2)
    
    }
    if (leveltimer == 820){
    
    Tracer1 = newTracer(Tracer1)
    
      Tracer2 = newTracer(Tracer2)
    
    }
    Chaser1 = Chaser(Chaser1);
    
    Tracer1 = Tracer(Tracer1);
    Tracer2 = Tracer(Tracer2);
    if(leveltimer > 100 && leveltimer <1400){
      Racer1=Racer(Racer1)
    }
    if(leveltimer >1500){
      level = 3
      leveltimer = 0 
      newRacer()
    }
  }
   if (level == 3) {
     if(leveltimer<100){
      textSize(50);
    text('Level 3', 340,390);
      text('Do Not Die', 300,450);
    }
    if (leveltimer == 200){
    Chaser1 = newChaser(Chaser1);
    
    
    }
     if (leveltimer == 400){
    Chaser2 = newChaser(Chaser2);
    
    
    }
     if (leveltimer == 600){
    Chaser3 = newChaser(Chaser3);
    
    
    }
    if (leveltimer == 800){
    
    Tracer1 = newTracer(Tracer1)
    
      Tracer2 = newTracer(Tracer2)
    
    }
     if(leveltimer > 800 && leveltimer <1400){
      Racer1=Racer(Racer1)
    }
    Chaser1 = Chaser(Chaser1);
    Chaser2 = Chaser(Chaser2);
    Chaser3 = Chaser(Chaser3);
    Tracer1 = Tracer(Tracer1);
    Tracer2 = Tracer(Tracer2);
    
    if(leveltimer >1500){
      level = 10
    }
  }
  if(level ==10){
    
  text('vicotory !!1!', 400,400);
  }

  //gameover state
  if (gameover == true) {
    textSize(100);
    fill(255)
    background(255, 0, 0, 50);
    text('DEATH', 225,400);
    textSize(50);
    text('Click To Restart', 215,500);
    
    frameRate(0);
    
  }
}

function newChaser(list) {
  
  
  list[2] = random(5, 8);
  list[3] = 600;

  return list;
}

function newTracer(list) {
  
  list[4] = 600;

  return list;
}

function Chaser(array) {
  list = array;
  life = list[3];
  
  if (life > 0) {
    life = life - 1;
    //console.log(life)
    X = list[0];
    Y = list[1];
    speed = list[2];
    if (dist(x, y, X, Y) < 20) {
      gameover = true;
    }
    fill(242, 44, 41, map(life, 1000, 0, 256, 20));
    stroke(0, 0, 0, map(life, 1000, 0, 256, 20));
    ellipse(X, Y, 50);

    if (x > X) {
      X += speed;
    } else {
      X -= speed;
    }
    if (y > Y) {
      Y += speed;
    } else {
      Y -= speed;
    }
    
    list = [X, Y, speed, life];
    return list;
  }
  if(life == 0){
    list[0] = random(0,800)
    list[1] = -100
  }
  return list;
}

function Tracer(array) {
  list = array;
  life = list[4];
  
  if (life > 0) {
    life = life - 1;
    
    X = list[0];
    Y = list[1];
    xspeed = list[2];
    yspeed = list[3]
    if (dist(x, y, X, Y) < 40) {
      gameover = true;
    }
    fill(100, 256, 50, map(life, 1000, 0, 256, 20));
    stroke(0, 0, 0, map(life, 1000, 0, 256, 20));
    ellipse(X, Y, 100);

    xspeed+= map(X-x,-800,800,1,-1)
    yspeed+= map(Y-y,-800,800,1,-1)
    xspeed = constrain(xspeed,-8,8)
    yspeed = constrain(yspeed,-8,8)
    X+=xspeed
    Y+=yspeed
    //console.log(X,Y)
    list = [X, Y, xspeed,yspeed, life];
    return list;
  }
  if(life == 0){
    list[0] = random(0,800)
    list[1] = height+100
  }
  return list;

}

function Racer(array) {
  
  
  RacerX = array[0]
  RacerY = array[1]
  Xvel = array[2]
  Yvel = array[3]
  Rtimer = array[4]
  
  //console.log(RacerX,RacerY, Xvel,Yvel)
  
  fill(50,50,200)
  ellipse(RacerX,RacerY,30)
  RacerX+=Xvel
  RacerY+=Yvel
  if(leveltimer<1300){
  if (RacerX>width+100||RacerX<-100){
    if (Rtimer<0){
    Racer1 = newRacer()
    }
    else{
      Rtimer--
    }
    //console.log("a")
  }
  if (RacerY>height+100||RacerY<-100){
    if (Rtimer<0){
    Racer1 = newRacer()
    }
    else{
      Rtimer--
    }
    //console.log("a")
  }
}
  //console.log("b")
  if (dist(x, y, RacerX, RacerY) < 15) {
      gameover = true;
    }
  return[RacerX,RacerY, Xvel,Yvel,Rtimer]
  }
  

function newRacer(){
  start=random(0,4)
  //console.log(start)
  
  if(start < 1){
    RacerX = random(0,width)
    RacerY = -75
    
  }
  else if(start <2){
    RacerX = random(0,width)
    RacerY = height+75
    
  }
  else if(start <3){
    RacerY = random(0,height)
    RacerX = width+75
  }
  else{
    RacerY = random(0,height)
    RacerX = -75
    
  }
  
  Xvel = map(RacerX-x,-400,400,10,-10)
  Yvel = map(RacerY-y,-400,400,10,-10)
  
  Rtimer = random(10,100)
  return[RacerX,RacerY, Xvel,Yvel,timer]

}
function mousePressed(){
  if(gameover==true){
    level = 1
    setup()
  }
}