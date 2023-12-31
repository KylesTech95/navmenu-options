let cards = document.querySelectorAll('.cards-div');
let disclaimer=document.querySelector('.header-disclaimer')
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
let st = 0;
function btnCick(){
    st++
console.log(st)
disclaimer.classList.toggle('zoom-out')
let parent = disclaimer.parentElement;
console.log(parent)
parent.classList.toggle('d-appear')

// setTimeout(()=>{
// },250)

}
//tiles move left or right depending on it's index
//hidden article tag should appear on hover
foreground_cards.forEach((tile,i)=>{
        tile.addEventListener('mouseover',e=>{
            e.currentTarget.style='border:3px solid lime;transition:.5s'
            background_cards[i].style='background:gray;color:#fff;opacity:.90;'
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
            e.currentTarget.style='border:3px solid #fff;transition:.75s'
            background_cards[i].style='background:none;color:#fff;opacity:0;'
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