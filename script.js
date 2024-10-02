var container = document.getElementById("container-div");
var toggleBtn = document.getElementById("btn");
toggleBtn.addEventListener('click', () => container.classList.toggle('big'))
function myFunc() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var box = document.createElement('div');
            box.classList.add('box')
            box.style.backgroundPosition = `${j * 125}px${i * 125}px`
            container.appendChild(box)
        }
    }
}
myFunc()