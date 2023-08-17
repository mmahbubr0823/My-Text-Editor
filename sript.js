// textArea
const textArea = document.getElementById('text-field');

// button bold
document.getElementById('bold').addEventListener('click', function(){
    textArea.style.fontWeight = "bold";
})
// button italic
document.getElementById('italic').addEventListener('click', function(){
    textArea.style.fontStyle = "italic";
})
// button underline
document.getElementById('underline').addEventListener('click', function(){
    textArea.style.textDecoration = "underline";
})
// button left 
document.getElementById('left').addEventListener('click', function(){
    textArea.style.textAlign = "left";
})
// button right 
document.getElementById('right').addEventListener('click', function(){
    textArea.style.textAlign = "right";
})
// button center 
document.getElementById('center').addEventListener('click', function(){
    textArea.style.textAlign = "center";
})
// button justify 
document.getElementById('justify').addEventListener('click', function(){
    textArea.style.textAlign = "justify";
})
// button change case 
document.getElementById('case').addEventListener('click', function(){
    textArea.style.textTransform = "upperCase";
})
// button fontSize plus 
document.getElementById('btn-plus').addEventListener('click', function(){
    const textString = document.getElementById('text-value');
    let textValue = parseInt(textString.innerText);
    textValue = textValue + 1;
    textString.innerText = textValue;

    textArea.style.fontSize = textValue + 'px';
})
// button fontSize minus 

document.getElementById('btn-minus').addEventListener('click', function(){
    const textString = document.getElementById('text-value');
    let textValue = parseInt(textString.innerText);
    textValue = textValue - 1;
    textString.innerText = textValue;
    textArea.style.fontSize = textValue + 'px';

})

// colorPicker

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', function(){
    const color =colorPicker.value; 
    textArea.style.color = color;
})