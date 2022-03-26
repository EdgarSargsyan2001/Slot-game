import {gameScene } from "./gameScene.js"
import {data} from './game.js'


function setDrow(columnArr){
    columnArr.forEach((el)=>{
        el.info = gameScene.add.image(el.x,el.y,el.fruitName)
        el.info.displayWidth = data.ElementWidth;
        el.info.displayHeight = data.ElementWidth;

    })
}

function setUpdate(columnArr,speed){
    columnArr.forEach((el)=>{
        
        if(el.info.y - el.info.displayHeight  > gameScene.sys.canvas.height+250){
            el.info.y = 0
        }else{
            el.info.y += speed
        }

    })
}

function toolsClose(CheatToolBackgroundY,ArrowY,textToolsY){

    gameScene.CheatToolBackground.y = CheatToolBackgroundY
    gameScene.Arrow.y = ArrowY
    gameScene.Arrow.flipY = false
    gameScene.textTools.y = textToolsY
    gameScene.textToolsTitle.y = 
    gameScene.CheatToolInput1.y = 
    gameScene.CheatToolInput2.y =
    gameScene.CheatToolInput3.y =
    gameScene.num1.y = 
    gameScene.num2.y = 
    gameScene.num3.y = CheatToolBackgroundY

    data.flagTools = false 
}
function toolsOpen(CheatToolBackgroundY,ArrowY,textToolsY,textToolsTitle,CheatToolInputsY,numsY){
    
    gameScene.CheatToolBackground.y = CheatToolBackgroundY
    gameScene.Arrow.y = ArrowY
    gameScene.Arrow.flipY = true
    gameScene.textTools.y = textToolsY
    gameScene.textToolsTitle.y = textToolsTitle
    gameScene.CheatToolInput1.y = 
    gameScene.CheatToolInput2.y =
    gameScene.CheatToolInput3.y = CheatToolInputsY
    gameScene.num1.y = 
    gameScene.num2.y = 
    gameScene.num3.y = numsY

    data.flagTools = true 
}

function SetTime(timeStop,addtime,columnArr,column,toolsNum){
    columnArr.sort((a,b)=> b.info.y - a.info.y )
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
                el.info.y = 160 * gameScene.sys.canvas.height/350
                flag = false

            }else {

                el.info.y = parseInt( arrComb.splice(parseInt(Math.random()*arrComb.length),1) ) * gameScene.sys.canvas.height/350

            }
        })

    },timeStop + addtime )

    return WinFruitName

}

function bottonClick(){
  if(data.flagSpinButton){
      let timeStop = parseInt((Math.random()*1000)+400) 
      
      data.flagSpinButton = false
      gameScene.button.alpha = 0.5
      
      gameScene.Win.alpha = 0
      data.speedcolumn1 = data.speedcolumn2 = data.speedcolumn3 = 20 * data.ElementWidth / 100
      
    

        let winColumn1 = SetTime(timeStop,1000,data.column1,"column1",data.num1)
        let winColumn2 = SetTime(timeStop,1800,data.column2,"column2",data.num2)
        let winColumn3 = SetTime(timeStop,3500,data.column3,"column3",data.num3)
        
        setTimeout(()=>{
            if(winColumn1 == winColumn2 && winColumn1  == winColumn3 && winColumn3 == winColumn2){
                gameScene.Win.alpha = 1

            }
            data.flagSpinButton = true
            gameScene.button.alpha = 1
            

        },3500 + timeStop)


    //tools close
        toolsClose(-25,7,0)


    // num text default
        gameScene.num1.setText('-')
        data.num1 = '-'
        gameScene.num2.setText('-')
        data.num2 = '-'
        gameScene.num3.setText('-')
        data.num3 = '-'

  }
        
}

function cheatToolClick(){
            
    if(data.flagTools){
        toolsClose(-25,7,0,)
        
    }else{
        toolsOpen(40,70,63,10,38,27)

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
    
    Num.setText('-')
    data[key] = Num._text
    
    
    
}

export{
    setDrow,
    setUpdate,
    bottonClick,
    SetTime,
    cheatToolClick,
    changeNum,
}