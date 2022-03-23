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
    let vin = parseInt(Math.random()*3)

    setTimeout(()=>{

        let height = 40
        let flag = true
        if(column == "column1")data.speedcolumn1 = 0
        if(column == "column2")data.speedcolumn2 = 0
        if(column == "column3")data.speedcolumn3 = 0
        
        
        columnArr.forEach((el)=>{
            
            if(el.fruitName === columnArr[vin].fruitName && flag){
                el.name.y = 160
                flag = false

            }else {
            
                el.name.y = height
                height -= 120  

            }
        })

    },timeStop + addtime )

    return columnArr[vin].fruitName
}

export{
    data,
    setDrow,
    setUpdate,
    SetTime
}