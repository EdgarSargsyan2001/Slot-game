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

function SetTime(timeStop,addtime,columnArr,column,toolsNum){
    columnArr.sort((a,b)=> b.name.y - a.name.y )
    let WinFruitName, winIndex

    if(toolsNum === '1'){
        WinFruitName = "Blackberry"
    }else if(toolsNum === '2'){
        WinFruitName = "Banana"
    }else if(toolsNum === '3'){
        WinFruitName = "Cherry"
    }
    else{
        winIndex = parseInt(Math.random()*columnArr.length)
        WinFruitName = columnArr[winIndex].fruitName
    }
    

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
        data.speedcolumn1 = data.speedcolumn2 = data.speedcolumn3 = 19
        
        
        let winColumn1 = SetTime(timeStop,1000,data.column1,"column1",data.num1)
        let winColumn2 = SetTime(timeStop,1800,data.column2,"column2",data.num2)
        let winColumn3 = SetTime(timeStop,3500,data.column3,"column3",data.num3)
        
        setTimeout(()=>{
            if(winColumn1 == winColumn2 && winColumn1  == winColumn3 && winColumn3 == winColumn2){
                gameScene.Win.y = 50

            }
            gameScene.button.y = gameScene.sys.canvas.height+data.buttonHeight
            
        },3500 + timeStop)

    //tools close
        gameScene.CheatToolBackground.y = -25
        gameScene.Arrow.y = 7
        gameScene.Arrow.flipY = false
        gameScene.textTools.y = 0
        gameScene.textToolsTitle.y = 
        gameScene.CheatToolInput1.y = 
        gameScene.CheatToolInput2.y =
        gameScene.CheatToolInput3.y =
        gameScene.num1.y = 
        gameScene.num2.y = 
        gameScene.num3.y = -30
        data.flagTools = false 


        // num text default
        gameScene.num1.setText('-')
        data.num1 = '-'
        gameScene.num2.setText('-')
        data.num2 = '-'
        gameScene.num3.setText('-')
        data.num3 = '-'


        
}

function cheatToolClick(){
            
    if(data.flagTools){
        gameScene.CheatToolBackground.y = -25
        gameScene.Arrow.y = 7
        gameScene.Arrow.flipY = false
        gameScene.textTools.y = 0

        gameScene.textToolsTitle.y = 
        gameScene.CheatToolInput1.y = 
        gameScene.CheatToolInput2.y =
        gameScene.CheatToolInput3.y =
        gameScene.num1.y = 
        gameScene.num2.y = 
        gameScene.num3.y = -30
        
        data.flagTools = false 
        
    }else{
        
        gameScene.CheatToolBackground.y = 40
        gameScene.Arrow.y = 70
        gameScene.Arrow.flipY = true
        gameScene.textTools.y = 63
        gameScene.textToolsTitle.y = 10

        gameScene.CheatToolInput1.y = 
        gameScene.CheatToolInput2.y =
        gameScene.CheatToolInput3.y = 38
        gameScene.num1.y = 
        gameScene.num2.y = 
        gameScene.num3.y = 27

        data.flagTools = true 
    }
    
}

function changeNum(Num,key){
    if(Num._text === '-'){
        Num.setText(1)
        data[key] = Num._text
    
        return
    }
    if(Num._text === "1"){
        Num.setText(2)
        data[key] = Num._text

        return 
        
    } 
    if(Num._text === "2") {
        Num.setText(3)
        data[key] = Num._text

        return 
    }
    if(Num._text === "3"){
        Num.setText('-')
        data[key] = Num._text

        return 
    } 
    
}

export{
    setDrow,
    setUpdate,
    bottonClick,
    SetTime,
    cheatToolClick,
    changeNum,
}