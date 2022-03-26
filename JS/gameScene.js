export let gameScene = new Phaser.Scene('Game')

export let config = {
    type:Phaser.AUTO,
    width:700,
    height:350,
    parent:"game",
    scene:gameScene,
    // dom: {
    //     createContainer: true
    // },
}

 new Phaser.Game(config)
 
 gameScene.preload = function(){
     
    
    this.load.image('Background','assets/Background.png')
    this.load.image('Banana','assets/Banana.png')
    this.load.image('Blackberry','assets/Blackberry.png')
    this.load.image('Cherry','assets/Cherry.png')
    this.load.image('Win','assets/Win.png')
    this.load.image('button', 'assets/Spin.png');
    this.load.image('backgroundcolor', 'assets/backgroundcolor.png');
    this.load.image('CheatToolBackground','assets/CheatToolBackground.png')
    this.load.image('Arrow','assets/Arrow.png')
    this.load.image('CheatToolInput','assets/CheatToolInput.png')
}

