let index=0,b=5;
let imgg=[{background:`url(./upload/1.jpg) no-repeat`},{background:`pink`},{background:`url(./upload/3.jpg) no-repeat`},{background:`url(./upload/4.jpg) no-repeat`},{background:`url(./upload/5.jpg) no-repeat`}]
const dt_=document.querySelector(`.dt`)
const dd_=document.querySelector(`.dd`)
const ul_=document.querySelector(`.diandian ul`)
const b_left=document.querySelector(`.left`)
const b_right=document.querySelector(`.right`)
const founcs=document.querySelector(`.focus`)

b_right.addEventListener(`click`,function(){
    document.querySelector(`.diandian ul li:nth-child(${index+1})`).classList.remove(`active`)
    index=(++index)%b
    founcs.style.background=imgg[index].background
    founcs.style.backgroundSize="100% 100%"
    document.querySelector(`.diandian ul li:nth-child(${index+1})`).classList.add(`active`)
})

    b_left.addEventListener(`click`,function(){
    document.querySelector(`.diandian ul li:nth-child(${index+1})`).classList.remove(`active`)
    if(index==0)
      index=5
      index=(--index)%b
      founcs.style.background=imgg[index].background
        founcs.style.backgroundSize="100% 100%"
    document.querySelector(`.diandian ul li:nth-child(${index+1})`).classList.add(`active`)
})