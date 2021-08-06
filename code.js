var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["062f6586-2e02-4c9e-ab90-ccd0b5be7536","b440f5bf-5348-464b-891e-252102d3916e","326fdbd8-1c8c-4c83-8778-f3515f117de3"],"propsByKey":{"062f6586-2e02-4c9e-ab90-ccd0b5be7536":{"name":"flappy bird.jpg_1","sourceUrl":null,"frameSize":{"x":143,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"XBIy3KFj.3xRVbjudD_Aj1lWAHG2TA.J","loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":101},"rootRelativePath":"assets/062f6586-2e02-4c9e-ab90-ccd0b5be7536.png"},"b440f5bf-5348-464b-891e-252102d3916e":{"name":"pillar22.jpg_1","sourceUrl":null,"frameSize":{"x":62,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"OqPaMEW2r9Rm71c__9.iZUPTD7htPAic","loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":300},"rootRelativePath":"assets/b440f5bf-5348-464b-891e-252102d3916e.png"},"326fdbd8-1c8c-4c83-8778-f3515f117de3":{"name":"landscape","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200, 200, 400, 400);
var bird = createSprite(80, 200, 20, 20);
bird.setAnimation("flappy bird.jpg_1");
var pillar = createSprite(150, 340, 20, 200);
pillar.shapeColor = "green";
var pillar2 = createSprite(150, 40, 20, 200);
pillar2.shapeColor = "green";
var pillar3 = createSprite(280, 295, 20, 300);
pillar3.shapeColor = "green";
var pillar4 = createSprite(280, 20, 20, 50);
pillar4.shapeColor = "green";
var pillar5 = createSprite(410, 320, 20, 200);
pillar5.shapeColor = "green";
var pillar6 = createSprite(410, 30, 20, 200);
pillar6.shapeColor = "green";
var gameState = "serve";
score = 0;
bird.scale = 0.25;
function draw() {
  background.setAnimation("landscape");
 if (gameState==="serve") {
 textSize(20);
  text("Press space", 130, 190);
  }
 if (keyDown("space")) {
   gameState = "play";
  }
  if (gameState === "play") {
    if (keyDown("up") || (keyDown("space"))) {
    bird.velocityY = -6;
    playSound("assets/category_jump/ninja_jump_2.mp3");
  }
  textSize(20);
  text("score:", 15, 20);
  text(score, 85, 20);
    pillar.velocityX=-2;
    pillar2.velocityX=-2;
    pillar3.velocityX = -2;
    pillar4.velocityX = -2;
    pillar5.velocityX = -2;
    pillar6.velocityX = -2;
    if (pillar.x == bird.x) {
      score=score+1;
      playSound("assets/category_hits/retro_game_weapon_-_light_punch_2.mp3");
    }
    if (pillar3.x == bird.x) {
      score=score+1;
      playSound("assets/category_hits/retro_game_weapon_-_light_punch_2.mp3");
    }
    if (pillar5.x == bird.x) {
      score=score+1;
      playSound("assets/category_hits/retro_game_weapon_-_light_punch_2.mp3");
    }
  
  bird.velocityY=bird.velocityY+0.6
  }
  if (bird.isTouching(pillar)) {
    score=0;
    
  }
  if (bird.isTouching(pillar2)) {
    score=0;
   
  }
  if (bird.isTouching(pillar3)) {
    score=0;
    
  }
  if (bird.isTouching(pillar4)) {
    score=0;
    
  }
  if (bird.isTouching(pillar5)) {
    score=0;
  }
  if (bird.isTouching(pillar6)) {
    score=0;
  }
  if (pillar.x<0) {
    pillar.x=400;
  }
  if (pillar2.x<0) {
    pillar2.x=400;
  }
  if (pillar3.x<0) {
    pillar3.x=400;
  }
  if (pillar4.x<0) {
    pillar4.x=400;
  }
  if (pillar5.x<0) {
    pillar5.x=400;
  }
  if (pillar6.x<0) {
    pillar6.x=400;
  }
  if (score===10) {
    var gamestate = "over";
    text("YOU WIN", 130, 190);
  }
  createEdgeSprites();
  bird.collide(topEdge);
  bird.collide(bottomEdge);
  bird.bounceOff(pillar);
  bird.bounceOff(pillar2);
  bird.bounceOff(pillar3);
  bird.bounceOff(pillar4);
  bird.bounceOff(pillar5);
  bird.bounceOff(pillar6);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
