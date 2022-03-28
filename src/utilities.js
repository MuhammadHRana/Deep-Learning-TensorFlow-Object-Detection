// Define labelmap
const labelMap = {
    1:{name:'Muhammad', color:'blue'},
    2:{name:'ProteinShaker', color:'brown'},
    3:{name:'ThumbsUp', color:'yellow'},
    4:{name:'ThumbsDown', color:'yellow'},
    5:{name:'ThankYou', color:'green'},
    6:{name:'LiveLong', color:'orange'},
    7:{name:'Apple', color:'red'},
    8:{name:'Tylenol', color:'white'},
    9:{name:'CellPhone', color:'black'}
}

// Define function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // Draw
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}