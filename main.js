const but=document.querySelector(`#butClicker`)
const display=document.querySelector(`#display`)
let numclick=0
let isCalled=false;
let sleepTime=1000;
async function countDown() {
    but.disabled=true;
    for (let i = 3; i > 0; i--) {
      display.innerHTML=i
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    display.innerHTML=`Start!`
    but.disabled=false;
    lol()
  }
function czekanie(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(numclick)
        }, sleepTime);
    })
}
async function lol(){
    console.log("start")
    const result=await czekanie()
    console.log(result)
    console.log("stop")
    isCalled=false;
    numclick=0
    display.innerHTML=`${(result/(sleepTime/1000)).toFixed(2)}CPS`
}
but.addEventListener(`click`, evt=>{
    evt.preventDefault()
    numclick++
    if(!isCalled){
    countDown()
    isCalled=true
}
})
  
  