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




let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today = year + "-" + month + "-" + day;
document.getElementById('theDate').value = today;


const dateInput = document.getElementById("dateInput");
//date string must be in format 'yyyy-mm-ddT00:00'
let dateTimeString = '2022-03-15T12:20';
dateInput.value= dateTimeString;