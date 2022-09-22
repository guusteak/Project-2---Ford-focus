class AnimBg{
    constructor(){
        this.elements = document.querySelectorAll('.anim-bg');
    }
    listenCursorMove(event){
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const posX = clientX - centerX;
        const posY = clientY - centerY;
        this.elements.forEach(el => this.moveElemenet(el, posX, posY))
    }
    moveElemenet(el, posX, posY){
        const ratioX = -el.getAttribute('ratioX');
        const ratioY = -el.getAttribute('ratioY');
    }
}