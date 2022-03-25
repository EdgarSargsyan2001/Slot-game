import {gameScene } from "./gameScene.js"
import {data} from './game.js'


function setDrow(columnArr){
    columnArr.forEach((el)=>{
        el.name = gameScene.add.image(el.x,el.y,el.fruitName)
        el.name.displayWidth = data.ElementWidth;
        el.name.displayHeight = data.ElementWidth;

    })
}

function setUpdate(columnArr,speed){
    columnArr.forEach((el)=>{
        
        if(el.name.y - el.name.displayHeight  > gameScene.sys.canvas.height+250){
            el.name.y = 0
        }else{
            el.name.y += speed
        }

    })
}
function SetTime(timeStop,addtime,columnArr,column){
    columnArr.sort((a,b)=> b.name.y - a.name.y )

    let winIndex = parseInt(Math.random()*columnArr.length)
    let WinFruitName = columnArr[winIndex].fruitName

    setTimeout(()=>{

        let flag = true
        let arrComb = [40,-80,-200,-320,-440]
        if(column == "column1")data.speedcolumn1 = 0
        if(column == "column2")data.speedcolumn2 = 0
        if(column == "column3")data.speedcolumn3 = 0
        
        
        columnArr.forEach((el,index)=>{
            
            if(el.fruitName === WinFruitName && flag){
                el.name.y = 160
                flag = false

            }else {

                el.name.y = parseInt( arrComb.splice(parseInt(Math.random()*arrComb.length),1) )

            }
        })

    },timeStop + addtime )

    return WinFruitName
}

function bottonClick(){
    let timeStop = parseInt((Math.random()*1000)+400) 

        gameScene.Win.y = data.winImgHeight
        gameScene.button.y = gameScene.sys.canvas.height+500
        data.speedcolumn1 = data.speedcolumn2 = data.speedcolumn3 = 18
        
        
        let winColumn1 = SetTime(timeStop,1000,data.column1,"column1")
        let winColumn2 = SetTime(timeStop,1800,data.column2,"column2")
        let winColumn3 = SetTime(timeStop,3500,data.column3,"column3")
        
        setTimeout(()=>{
            if(winColumn1 == winColumn2 && winColumn1  == winColumn3 && winColumn3 == winColumn2){
                gameScene.Win.y = 50

            }
            gameScene.button.y = gameScene.sys.canvas.height+data.buttonHeight
            
        },3500 + timeStop)

}

export{
    setDrow,
    setUpdate,
    bottonClick,
    SetTime
}