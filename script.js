var container = document.getElementById("container-div");
var toggleBtn = document.getElementById("btn");
toggleBtn.addEventListener('click', () => {
    for (var i = 0; i < 4;i++){
        for(var j = 0 ; j<4; j++){
            var box = document.createElement('div');
            box.classList.add('boxes')
            boxes.style.backgroundPosition=`${j*125}px${i*125}px`
            container.appendChild(boxes)
        }
    }
})
