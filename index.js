const container = document.querySelector('.container');
let oldClientX = 0;
let oldClientY = 0;
// clientX, Y: coord of the mouse pointer in the window
// offsetX, Y: coord of the mouse pointer in the reletive area
let currTarget;
const handlerMouseMove = function (e) {
    e.preventDefault();
    currTarget.style.top = `${currTarget.offsetTop - (oldClientY - e.clientY)}px`;
    currTarget.style.left = `${currTarget.offsetLeft - (oldClientX - e.clientX)}px`;
    oldClientX = e.clientX;
    oldClientY = e.clientY;
};
container.addEventListener('mousedown', function (e) {
    e.preventDefault();
    const target = e.target.closest('img');
    if (!target)
        return;
    currTarget = target;
    oldClientX = e.clientX;
    oldClientY = e.clientY;
    container.addEventListener('mousemove', handlerMouseMove);
    container.addEventListener('mouseup', function (e) {
        container.removeEventListener('mousemove', handlerMouseMove);
    });
});
