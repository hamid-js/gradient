const colorA =  document.getElementById("color-a")
const colorB =  document.getElementById("color-b")
const generateBtn =  document.getElementById("submit")
const codeInput =  document.getElementById("code")
const copyBtn =  document.getElementById("copy")
let button = document.querySelector(".buttons")

let buttons = button.children
let cssCode ;
let directionCode = "to bottom"

 for(let btn of buttons){

    btn.addEventListener("click" , event => {
        let direction = event.target.dataset.direction

        setDirection(direction , event.target)
        
    })

    
    
 }





const setDirection = (direction , directionElem) => {
     for(let item of buttons){
         item.classList.remove("active")
        
     }

     if (directionElem.tagName === "BUTTON") {
        directionElem.classList.add("active")

     }else{
        directionElem.parentElement.classList.add("active")
     }
     generateCssCode(direction)
     directionCode = direction
}
const generateCssCode = (direction) =>{
     cssCode = `background: linear-gradient ( ${directionCode} , ${colorA.value} 0%, ${colorB.value} 100% ) `
//    console.log(cssCode);

}

const setBackGround = () => {
    document.body.style.cssText= cssCode
}






const copyCssCode = () => {
    codeInput.select()
    document.execCommand("paste")
    if(codeInput.value){
        alert("Copy done :))")
    }

}

const generateBtnHandler = () => {
 
    
        generateCssCode()
        setBackGround()
        codeInput.value = cssCode
    }





generateBtn.addEventListener("click", generateBtnHandler)
copyBtn.addEventListener("click", copyCssCode)