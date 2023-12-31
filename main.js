let cards = document.querySelectorAll('.cards-div');

let counter = 1;
let unitSize = 0;
let bod = document.querySelector('body')
let bodyHeight = bod.clientHeight
let foreground_cards = document.querySelectorAll('.card-foreground');
let background_cards = document.querySelectorAll('.card-background');

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

//card left or card right
foreground_cards.forEach((tile,i)=>{
        tile.addEventListener('mouseover',e=>{
            if(i%2==0){
                background_cards[i].classList.add('card-left')
                e.currentTarget.classList.add('card-right')
                background_cards[i].classList.remove('card-origin-left')
                e.currentTarget.classList.remove('card-origin-right')
            }
            else{
                background_cards[i].classList.add('card-right')
                e.currentTarget.classList.add('card-left')
                background_cards[i].classList.remove('card-origin-right')
                e.currentTarget.classList.remove('card-origin-left')
           }
        })
        tile.addEventListener('mouseleave',e=>{
            if(i%2==0){
                background_cards[i].classList.remove('card-left')
                e.currentTarget.classList.remove('card-right')
                background_cards[i].classList.add('card-origin-left')
                e.currentTarget.classList.add('card-origin-right')
            }
            else{
                background_cards[i].classList.remove('card-right')
                e.currentTarget.classList.remove('card-left')
                background_cards[i].classList.add('card-origin-right')
                e.currentTarget.classList.add('card-origin-left')
            }
        })
        
        
    
    
})