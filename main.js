let cards = document.querySelectorAll('.cards-div');
let counter = 1;
let unitSize = 0;
let bod = document.querySelector('body')
let bodyHeight = bod.clientHeight

let appearFn = (element) => {
    element.classList.add('card-appear')
    element.classList.remove('card-hidden')
}
let hideFn = (element) => {
    element.classList.remove('card-appear')
    element.classList.add('card-hidden')
}
function toggleCardView(array){
    window.addEventListener('mousemove', e => {
        let px = e.pageX, py = e.pageY
        let mouse={x:px,y:py};
        let barrier = {
            left:undefined,
            right:undefined,
            top:undefined,
            bottom:undefined
        }
        
        for(let x = 0; x < array.length; x++){
            barrier={
                left:array[x].getBoundingClientRect().x,
                right:array[x].getBoundingClientRect().x+array[x].getBoundingClientRect().width,
                top:array[x].getBoundingClientRect().y,
                bottom:array[x].getBoundingClientRect().y+array[x].getBoundingClientRect().height
            }
            if(mouse.x < barrier.right && mouse.x > barrier.left){
                appearFn(array[x])

            }
            else{
                hideFn(array[x])
            }
            }
        
        })
        
}


toggleCardView(cards)
