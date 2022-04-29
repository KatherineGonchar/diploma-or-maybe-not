const list = document.querySelectorAll('.list');
let isClicked = false;

function activeLink(){
    isClicked = true;
    list.forEach((item) => {
        item.classList.remove('active');
    });
}
function hover(){
    let activatedLink = document.querySelector('.active');
    activatedLink.classList.remove('active');
    this.classList.add('hovered');
    this.addEventListener('mouseleave', () =>{
        if (isClicked) {
            isClicked=false;
            this.classList.add('active');
            this.classList.remove('hovered');
        }
        if (this.classList.contains('hovered')) {
            activatedLink.classList.add('active');
            this.classList.remove('hovered');
        }
        activatedLink = undefined;
    })
}

list.forEach((item) =>
    item.addEventListener('click', activeLink))
list.forEach((item) =>
    item.addEventListener('mouseover', hover)
)




const productContainers = [...document.querySelectorAll('.cards-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log(item.offsetWidth);
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})