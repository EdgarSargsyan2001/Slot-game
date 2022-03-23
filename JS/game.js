import {gameScene,config } from "./gameScene.js"
import {setDrow,setUpdate,SetTime} from './Function.js'

const SpinButton = document.querySelector('.buttonSpin')
 

export const data = {

    speedcolumn1:0,
    speedcolumn2:0,
    speedcolumn3:0,
    ElementWidth:100,
    winImgHeight:-50,

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

    setDrow(data.column2)
    setDrow(data.column3)
    setDrow(data.column1)
    
    this.bg = this.add.sprite(0,0,'Background')
    this.bg.setPosition(this.sys.canvas.width/2,this.sys.canvas.height/2)
    this.bg.displayWidth = this.sys.canvas.width;
    this.bg.displayHeight = this.sys.canvas.height;


    gameScene.Win = gameScene.add.image(350,data.winImgHeight,'Win')
    gameScene.Win.displayWidth = 400;
    gameScene.Win.displayHeight = 50;
    
}

gameScene.update = function(){

    setUpdate(data.column1,data.speedcolumn1)
    setUpdate(data.column2,data.speedcolumn2)
    setUpdate(data.column3,data.speedcolumn3)
    
}



SpinButton.addEventListener('click',function(e){
    
    let timeStop = parseInt((Math.random()*1000)+400) 

    e.target.disabled = true
    gameScene.Win.y = data.winImgHeight
    

    data.speedcolumn1 = data.speedcolumn2 = data.speedcolumn3 = 18
    
    
    let winColumn1 = SetTime(timeStop,1500,data.column1,"column1")
    let winColumn2 = SetTime(timeStop,2800,data.column2,"column2")
    let winColumn3 = SetTime(timeStop,4500,data.column3,"column3")

    setTimeout(()=>{
        if(winColumn1 == winColumn2 && winColumn1  == winColumn3 && winColumn3 == winColumn2){
            gameScene.Win.y = 50

        }
        
        e.target.disabled = false 

    },4600 + timeStop)

})


