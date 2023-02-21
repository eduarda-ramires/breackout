var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["40baf8e6-af4b-4a3e-a508-9c1a49df7f24","6883fec8-ebbd-4abe-9a12-ab8dd84b0c66","f1a605cf-c9a0-401b-967e-ddeeeff161a6","89909e9d-1796-412d-8f0a-e3dce2290430","d95c6fda-e57f-45e8-979c-7d910c3b2fd0","c2895eb0-481e-4bdb-8bbd-4e4d5a1d2fc2"],"propsByKey":{"40baf8e6-af4b-4a3e-a508-9c1a49df7f24":{"name":"vermelho","sourceUrl":null,"frameSize":{"x":66,"y":27},"frameCount":14,"looping":true,"frameDelay":3,"version":"kFz6isWmPkX30WvV61FCEuynaNGKBwYP","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":189},"rootRelativePath":"assets/40baf8e6-af4b-4a3e-a508-9c1a49df7f24.png"},"6883fec8-ebbd-4abe-9a12-ab8dd84b0c66":{"name":"amarelo","sourceUrl":null,"frameSize":{"x":66,"y":27},"frameCount":14,"looping":true,"frameDelay":1,"version":"i5RXenohov9u_DQKiQHr9lwOJH2XM9KV","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":189},"rootRelativePath":"assets/6883fec8-ebbd-4abe-9a12-ab8dd84b0c66.png"},"f1a605cf-c9a0-401b-967e-ddeeeff161a6":{"name":"laranja","sourceUrl":null,"frameSize":{"x":66,"y":27},"frameCount":10,"looping":true,"frameDelay":12,"version":"F5MrsVB772JAhwPZ1Mjqtw0gwt29P1uH","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":135},"rootRelativePath":"assets/f1a605cf-c9a0-401b-967e-ddeeeff161a6.png"},"89909e9d-1796-412d-8f0a-e3dce2290430":{"name":"verde","sourceUrl":null,"frameSize":{"x":66,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"yC.izeo_9YMyDMzlZuS0zLvl4eTTmmfq","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":27},"rootRelativePath":"assets/89909e9d-1796-412d-8f0a-e3dce2290430.png"},"d95c6fda-e57f-45e8-979c-7d910c3b2fd0":{"name":"bola","sourceUrl":null,"frameSize":{"x":14,"y":14},"frameCount":14,"looping":true,"frameDelay":12,"version":"rr9j8jk0VHYpWJD2EOuRKRO7HdH6AJ8G","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":56},"rootRelativePath":"assets/d95c6fda-e57f-45e8-979c-7d910c3b2fd0.png"},"c2895eb0-481e-4bdb-8bbd-4e4d5a1d2fc2":{"name":"jogador","sourceUrl":null,"frameSize":{"x":100,"y":11},"frameCount":2,"looping":true,"frameDelay":12,"version":"ioFPXJYu7fgR0oX0qjJSjniiuvigwkFP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":22},"rootRelativePath":"assets/c2895eb0-481e-4bdb-8bbd-4e4d5a1d2fc2.png"}}};
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

var vermelho1 = createSprite(50, 50);
vermelho1.setAnimation("verde");
var vermelho2 = createSprite(118, 50);
vermelho2.setAnimation("verde");
var vermelho3 = createSprite(118+68, 50);
vermelho3.setAnimation("verde");
var vermelho4 = createSprite(118+68*2, 50);
vermelho4.setAnimation("verde");
var vermelho5 = createSprite(118+68*3, 50);
vermelho5.setAnimation("verde");
var amarelo1 = createSprite(50, 80);
amarelo1.setAnimation("amarelo");
var amarelo2 = createSprite(50+68*1, 80);
amarelo2.setAnimation("amarelo");
var amarelo3 = createSprite(50+68*2, 80);
amarelo3.setAnimation("amarelo");
var amarelo4 = createSprite(50+68*3, 80);
amarelo4.setAnimation("amarelo");
var amarelo5 = createSprite(50+68*4, 80);
amarelo5.setAnimation("amarelo");
var boela = createSprite(200, 200);
boela.setAnimation("bola");
var jogador = createSprite(200, 380);
jogador.setAnimation("jogador");
createEdgeSprites();
var texto = "Espaço para iniciar";
var pontuacao = 10;
fill("yellow");
textSize(20);
function draw() {
  background("black");
  drawSprites();
  jogador.x = World.mouseX;
  text(texto, 100, 200);
  if (boela.velocityX == 0) {
    if (keyDown("space")) {
      playSound("assets/CUPHEAD-CARTOON-RAP-BATTLE.mp3", true);
      boela.velocityX = randomNumber(-5, 5);
      boela.velocityY = randomNumber(-8, -5);
      texto = "";
    }
  }
  if (boela.bounceOff(topEdge)||boela.bounceOff(leftEdge)||boela.bounceOff(rightEdge)) {
    playSpeech("Ai", "female", "Deutsch");
  } else if ((boela.isTouching(bottomEdge))) {
    stopSound("assets/CUPHEAD-CARTOON-RAP-BATTLE.mp3");
    playSound("assets/category_female_voiceover/game_over_female.mp3", false);
    boela.setVelocity(0, 0);
    boela.x = 200;
    boela.y = 200;
    texto = "Perdeu!\nPrecione espaço";
    destroiBlocos();
    criaBlocos();
    pontuacao = 10;
  } else if ((boela.bounceOff(jogador))) {
    boela.velocityY = randomNumber(-8, -5);
    boela.velocityX = randomNumber(-5, 5);
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  } else if ((boela.bounceOff(vermelho1))) {
    vermelho1.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(vermelho2))) {
    vermelho2.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(vermelho3))) {
    vermelho3.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(vermelho4))) {
    vermelho4.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(vermelho5))) {
    vermelho5.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(amarelo1))) {
    amarelo1.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(amarelo2))) {
    amarelo2.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(amarelo3))) {
    amarelo3.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(amarelo4))) {
    amarelo4.destroy();
    pontuacao--;
  } else if ((boela.bounceOff(amarelo5))) {
    amarelo5.destroy();
    pontuacao--;
  }
  if (pontuacao == 0) {
    pontuacao = 10;
    playSound("assets/category_alerts/playful_quirky_positive_game_cue_1.mp3", false);
    boela.setVelocity(0, 0);
    boela.x = 200;
    boela.y = 200;
    texto = "Você ganhou!\nPrecione espaço para reiniciar";
    criaBlocos();
  }
}
function criaBlocos() {
   vermelho1 = createSprite(50, 50);
  vermelho1.setAnimation("vermelho");
   vermelho2 = createSprite(118, 50);
  vermelho2.setAnimation("vermelho");
   vermelho3 = createSprite(118+68, 50);
  vermelho3.setAnimation("vermelho");
   vermelho4 = createSprite(118+68*2, 50);
  vermelho4.setAnimation("vermelho");
   vermelho5 = createSprite(118+68*3, 50);
  vermelho5.setAnimation("vermelho");
   amarelo1 = createSprite(50, 80);
  amarelo1.setAnimation("amarelo");
   amarelo2 = createSprite(50+68*1, 80);
  amarelo2.setAnimation("amarelo");
   amarelo3 = createSprite(50+68*2, 80);
  amarelo3.setAnimation("amarelo");
   amarelo4 = createSprite(50+68*3, 80);
  amarelo4.setAnimation("amarelo");
   amarelo5 = createSprite(50+68*4, 80);
  amarelo5.setAnimation("amarelo");
}
function destroiBlocos() {
  amarelo1.destroy();
  amarelo2.destroy();
  amarelo3.destroy();
  amarelo4.destroy();
  amarelo5.destroy();
  vermelho1.destroy();
  vermelho2.destroy();
  vermelho3.destroy();
  vermelho4.destroy();
  vermelho5.destroy();
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
