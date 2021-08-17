let colorContainer = document.getElementById('colorCode');
let genBtn = document.getElementById('genBtn');
let symbols = "0123456789ABCDEF";
let color = "";

genBtn.addEventListener('click', function() {
    for(let i=0; i<6; i++) {
        color += symbols[Math.floor(Math.random()*16)];
    }
    colorContainer.innerHTML = "#" + color;
    document.body.style.background = "#" + color;
    color = "";

});