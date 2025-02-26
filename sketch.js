var wizard, wizardParado, wizardWalk;
var wizard2, wizardImg;
var fundoImg;
var chao;
var foguinho, foguinhoImg;


function preload() {

    fundoImg = loadImage("fundo.jpg");
    foguinhoImg = loadImage("foguinho.png");
    wizardImg = loadImage("wizard_sprite2.png");
    wizardParado = loadAnimation("wizard_sprite_1.png");
    wizardWalk = loadAnimation("wizard_sprite_1.png",
        "wizard_sprite_2.png");

}

function setup() {
    createCanvas(1600, 682);
    wizard = createSprite(800, 580);
    wizard.addAnimation("Idle", wizardParado);
    wizard.addAnimation("walking", wizardWalk);
    wizard.scale = 0.25;

    wizard2 = createSprite(900, 580);
    wizard2.addImage(wizardImg);
    wizard2.scale = 0.25;

    foguinho = createSprite(wizard.x, wizard.y, 50, 50);
    foguinho.addImage(foguinhoImg);
    foguinho.scale = 0.2;

    foguinho.visible = false;


    chao = createSprite(800, 680, 1600, 20);
}

function draw() {
    background(fundoImg);
    
    foguinho.x = wizard.x;
    foguinho.y = wizard.y;

    if (keyDown("d")) {
        wizard.x += 5;
        wizard.changeAnimation("walking");
        wizard.mirrorX(1);
        foguinho.mirrorX(1);
    }

    if (keyDown("a")) {
        wizard.x -= 5;
        wizard.changeAnimation("walking");
        wizard.mirrorX(-1);
        foguinho.mirrorX(-1);

    }
    //console.log(wizard.y);
    if (keyDown("w") && wizard.y > 580) {
        wizard.velocityY = - 10;

    }

    if (keyDown("l")) {
        wizard2.x += 5;
        wizard2.mirrorX(1);
    }

    if (keyDown("j")) {
        wizard2.x -= 5;
        wizard2.mirrorX(-1);
    }

    if (keyDown("i")) {
        wizard2.velocityY = -10;
    }

    if (keyDown("f")) {
        foguinho.velocityY = -5;
        foguinho.visible = true;
    }



    wizard.velocityY = wizard.velocityY + 0.7;
    wizard2.velocityY = wizard2.velocityY + 0.7;

    wizard.collide(chao);
    wizard2.collide(chao);
    drawSprites();
}
