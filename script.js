// Your code here.
const slider = document.querySelector(".items");
let isDown=false;
let startX;
let scrollLeft; 
slider.addEventListener('mousedown',(e)=>{
	isDown=true;
	slider.classList.add('active');
	startX=e.pageX - slider.offsetLeft;
	scrollLeft=slider.scrollLeft;
	console.log("pageX",e.pageX);
	console.log("scrollLeft",scrollLeft)
})

slider.addEventListener('mouseleave',()=>{
	isDown=false;
	slider.classList.remove("active");
})
slider.addEventListener('mouseup',()=>{
	isDown=false;
	slider.classList.remove("active");
})

let timeoutId;
slider.addEventListener('mousemove',(e)=>{
	if(!isDown)return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x-startX)*2;
	// slider.scrollLeft = scrollLeft - walk;
	clearTimeout(timeoutId); // Clear any previous timeout
    timeoutId = setTimeout(() => {
        slider.scrollLeft = scrollLeft - walk;
    }, 50);
})

















