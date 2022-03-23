import {gameScene,config } from "./gameScene.js"
import {setDrow,setUpdate,bottonClick} from './Function.js'
 
export const data = {

    speedcolumn1:0,
    speedcolumn2:0,
    speedcolumn3:0,
    ElementWidth:100,
    winImgHeight:-50,
    buttonHeight:-50,

    column1:[   
                {fruitName:"Blackberry", x:config.width/3.3, y:160,name:undefined},
                {fruitName:"Banana", x:config.width/3.3, y:40,name:undefined},
                {fruitName:"Blackberry", x:config.width/3.3, y:-80,name:undefined},
                {fruitName:"Cherry", x:config.width/3.3, y:-200,name:undefined},
                {fruitName:"Cherry", x:config.width/3.3, y:-320,name:undefined},
                {fruitName:"Banana", x:config.width/3.3, y:-440,name:undefined},
            ],
    column2:[
                {fruitName:"Banana", x:config.width/2, y:160,name:undefined},
                {fruitName:"Banana", x:config.width/2, y:40,name:undefined},
                {fruitName:"Blackberry", x:config.width/2, y:-80,name:undefined},
                {fruitName:"Cherry", x:config.width/2, y:-200,name:undefined},
                {fruitName:"Blackberry", x:config.width/2, y:-320,name:undefined},
                {fruitName:"Cherry", x:config.width/2, y:-440,name:undefined},
            ],
    column3:[
                {fruitName:"Cherry", x:config.width/1.42, y:160,name:undefined},
                {fruitName:"Banana", x:config.width/1.42, y:40,name:undefined},
                {fruitName:"Blackberry", x:config.width/1.42, y:-80,name:undefined},
                {fruitName:"Cherry", x:config.width/1.42, y:-200,name:undefined},
                {fruitName:"Blackberry", x:config.width/1.42, y:-320,name:undefined},
                {fruitName:"Banana", x:config.width/1.42, y:-440,name:undefined},
            ]        


}



gameScene.create = function(){

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
    gameScene.Win = gameScene.add.image(350,data.winImgHeight,'Win')
    gameScene.Win.displayWidth = 400;
    gameScene.Win.displayHeight = 50;


    //button spin onClick
    this.button = this.add.image(this.sys.canvas.width/2,this.sys.canvas.height+data.buttonHeight,'button')
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,bottonClick)


    gameScene.button.displayWidth = 194;
    gameScene.button.displayHeight = 62;

}
    

gameScene.update = function(){

    setUpdate(data.column1,data.speedcolumn1)
    setUpdate(data.column2,data.speedcolumn2)
    setUpdate(data.column3,data.speedcolumn3)
    
}




