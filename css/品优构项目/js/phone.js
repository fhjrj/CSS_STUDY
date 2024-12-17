let index=2,index1=0,number=0
let arr=[{src:"./upload/th1.png"},{src:"./upload/th2.jpg"},{src:"./upload/th3.jpg"},{src:"./upload/th4.jpg"},{src:"./upload/th5.jpg"}]
const right_button=document.querySelector(`.m_left ul li:last-child button`)
const left_button=document.querySelector(`.m_left ul li:first-child button`)
const img=document.querySelector(`.m_left img`)
const up=document.querySelector(`.mm_right .butt1`)
const down=document.querySelector(`.mm_right .butt2`)
const text=document.querySelector(`.mm_somm`)
right_button.addEventListener(`click`,function(){
    const li=document.querySelector(`.m_left ul li:nth-child(${index})`)
    li.style.borderColor=`transparent`
    index1=(++index1)%arr.length
    if(index===6) index=2
    else index++
    const li2=document.querySelector(`.m_left ul li:nth-child(${index})`)
    li2.style.borderColor=`red`
    img.src=arr[index1].src
})

left_button.addEventListener(`click`,function(){
    const li=document.querySelector(`.m_left ul li:nth-child(${index})`)
    li.style.borderColor=`transparent`
    if(index1===0){
        index1=4
    }else{
        index1--;
    }
    if(index===2) index=6
    else index--
    const li2=document.querySelector(`.m_left ul li:nth-child(${index})`)
    li2.style.borderColor=`red`
    img.src=arr[index1].src
})

up.addEventListener(`click`,function(){
  number++
  text.textContent=number.toString()
})

down.addEventListener(`click`,function(){
  if(number===0){
        number=0
  }else{
    number--;
  }
  text.textContent=number.toString()
})