import {gameScene,config } from "./gameScene.js"
import {setDrow,setUpdate,bottonClick,cheatToolClick,changeNum} from './Function.js'
 
export const data = {
    flagSpinButton:true,
    speedcolumn1:0,
    speedcolumn2:0,
    speedcolumn3:0,
    ElementWidth:100 * config.height/350 * config.width/700,
    winImgHeight:-50,
    buttonHeight:-50,
    flagTools:false,
    text:'1',
    num1:'-',
    num2:'-',
    num3:'-',


    column1:[   
                {fruitName:"Blackberry", x:config.width/3.3, y:160*config.height/350,info:undefined},
                {fruitName:"Cherry", x:config.width/3.3, y:-80*config.height/350,info:undefined},
                {fruitName:"Banana", x:config.width/3.3, y:40*config.height/350,info:undefined},
                {fruitName:"Blackberry", x:config.width/3.3, y:-200*config.height/350,info:undefined},
                {fruitName:"Cherry", x:config.width/3.3, y:-320*config.height/350,info:undefined},
                {fruitName:"Banana", x:config.width/3.3, y:-440*config.height/350,info:undefined},
            ],
    column2:[
                {fruitName:"Banana", x:config.width/2, y:160*config.height/350,info:undefined},
                {fruitName:"Banana", x:config.width/2, y:40*config.height/350,info:undefined},
                {fruitName:"Blackberry", x:config.width/2, y:-80*config.height/350,info:undefined},
                {fruitName:"Blackberry", x:config.width/2, y:-200*config.height/350,info:undefined},
                {fruitName:"Cherry", x:config.width/2, y:-320*config.height/350,info:undefined},
                {fruitName:"Cherry", x:config.width/2, y:-440*config.height/350,info:undefined},
            ],
    column3:[
                {fruitName:"Cherry", x:config.width/1.42, y:160*config.height/350,info:undefined},
                {fruitName:"Blackberry", x:config.width/1.42, y:40*config.height/350,info:undefined},
                {fruitName:"Banana", x:config.width/1.42, y:-80*config.height/350,info:undefined},
                {fruitName:"Cherry", x:config.width/1.42, y:-200*config.height/350,info:undefined},
                {fruitName:"Banana", x:config.width/1.42, y:-440*config.height/350,info:undefined},
                {fruitName:"Blackberry", x:config.width/1.42, y:-320*config.height/350,name:undefined},
            ]        


}



gameScene.create = function(){
    //background white
    gameScene.backgroundcolor = gameScene.add.image(this.sys.canvas.height,50,"backgroundcolor")

    //columns
    setDrow(data.column2)
    setDrow(data.column3)
    setDrow(data.column1)

    //background image
    gameScene.bg = this.add.sprite(0,0,'Background')
    gameScene.bg.setPosition(this.sys.canvas.width/2,this.sys.canvas.height/2)
    gameScene.bg.displayWidth = this.sys.canvas.width;
    gameScene.bg.displayHeight = this.sys.canvas.height;


    //win game
    gameScene.Win = gameScene.add.image(this.sys.canvas.width/2,50,'Win')
    gameScene.Win.alpha = 0
    gameScene.Win.displayWidth = 400;
    gameScene.Win.displayHeight = 50;

    //CheatToolBackground
    gameScene.CheatToolBackground = gameScene.add.image(90,-25,'CheatToolBackground')
    gameScene.CheatToolBackground.displayWidth = 180;
    gameScene.CheatToolBackground.displayHeight = 80;

    //cheat Tool onClick
    gameScene.CheatToolBackground.setInteractive().on('pointerdown',cheatToolClick)
    
     
    // Arrow
    gameScene.Arrow = gameScene.add.image(70,7,'Arrow')
    gameScene.Arrow.displayWidth = 13;
    gameScene.Arrow.displayHeight = 5;

    //Cheat Tool Input
    gameScene.CheatToolInput1 = gameScene.add.image(40,-30,'CheatToolInput')
    gameScene.CheatToolInput2 = gameScene.add.image(90,-30,'CheatToolInput')
    gameScene.CheatToolInput3 = gameScene.add.image(140,-30,'CheatToolInput')
    
    gameScene.CheatToolInput1.displayWidth = gameScene.CheatToolInput2.displayWidth  = gameScene.CheatToolInput3.displayWidth = 40;
    gameScene.CheatToolInput1.displayHeight = gameScene.CheatToolInput2.displayHeight = gameScene.CheatToolInput3.displayHeight  = 25;



    // text tools title
    gameScene.textToolsTitle = this.add.text(15, -25, 'SYMBOL POSITION IN THE REEL', { fontFamily: 'monospace', fontSize:10 });


    //text Tools
    gameScene.textTools = this.add.text(30, 0, 'Tools', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif,', fontSize:18 });


    // numbers
    gameScene.num1 = this.add.text(35, -30, '-', { fontFamily: 'Georgia', fontSize:18 });
    gameScene.num2 = this.add.text(85, -30, '-', { fontFamily: 'Georgia', fontSize:18 });
    gameScene.num3 = this.add.text(135, -30, '-', { fontFamily: 'Georgia', fontSize:18 });


    //changeNum
    gameScene.CheatToolInput1.setInteractive().on('pointerdown',()=>changeNum(gameScene.num1,"num1"))
    gameScene.CheatToolInput2.setInteractive().on('pointerdown',()=>changeNum(gameScene.num2,"num2"))
    gameScene.CheatToolInput3.setInteractive().on('pointerdown',()=>changeNum(gameScene.num3,"num3"))


    //button spin onClick
    gameScene.button = this.add.image(this.sys.canvas.width/2,this.sys.canvas.height+data.buttonHeight,'button')
    gameScene.button.setInteractive().on('pointerdown',bottonClick)
    //button spin style
    gameScene.button.displayWidth = 194;
    gameScene.button.displayHeight = 62;

 
}
    


gameScene.update = function(){
    
    setUpdate(data.column1,data.speedcolumn1)
    setUpdate(data.column2,data.speedcolumn2)
    setUpdate(data.column3,data.speedcolumn3)
}




