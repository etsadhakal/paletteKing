const hexNum = [0,1,2,3,4,5,6,7,8,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.btn-hex');
const bgPale = document.querySelectorAll('.bg-color');
const hexCode = document.querySelectorAll('.color-code');

hexBtn.addEventListener('click', getNewHex);
function getNewHex(){
    let newHexCode = ['#'];
    for (let i = 0; i<6; i++){
        let randomHex = Math.floor(Math.random()*hexNum.length);
        newHexCode +=hexNum[randomHex];
        console.log(newHexCode);
       
    }
    bgPale.forEach(el => el.style.backgroundColor = newHexCode);
    hexCode.forEach(el => el.innerHTML = newHexCode);
}

