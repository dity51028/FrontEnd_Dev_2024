const gradientBox = document.querySelector(".gradient-box"),
textBox = document.querySelector("textarea"),
copyBtn = document.querySelector(".copy"),
refreshBtn = document.querySelector(".refresh"),
selectMenu = document.querySelector(".selectbox select")
colorInputs = document.querySelectorAll(".colors input");

const getRandomColor = ()=>{
    const randomHex = Math.floor(Math.random()*0xffffff).toString(16);
    return`#${randomHex}`;
}

const copyCode =()=>{
    navigator.clipboard.writeText(textBox.value);
    copyBtn.innerText = "Code Copied";

    setTimeout(() => {
            copyBtn.innerText="Copy Code";
    }, 2000);


}


const generateGradient =(isRandom)=>{


    if(isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    
    const gradient = `linear-gradient(${selectMenu.value},${colorInputs[0].value},${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textBox.value=`Background : ${gradient}`
    console.log(gradient);
}


colorInputs.forEach(input =>{
    input.addEventListener("input",()=>generateGradient(false));
})


refreshBtn.addEventListener("click", ()=>generateGradient(true));
copyBtn.addEventListener("click",copyCode);