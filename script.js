let color = document.getElementById("color");
let colorCode = document.querySelector(".colorCode");

color.addEventListener('input',function(){
    let colorValue = color.value;
    colorCode.textContent = colorValue;

    document.body.style.background = `linear-gradient(120deg ,${colorValue},${colorValue}50 )`;

    colorCode.style.boxShadow = `0px  0px 10px ${colorValue}`
});