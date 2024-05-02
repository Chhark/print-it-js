const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let current_dot
let prev_dot 
let banner_img = document.querySelector(".banner-img")
banner_img.src = './assets/images/slideshow/slide1.jpg'
let i = 0
let current_slide = i
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")

arrow_left.addEventListener("click",function(){
	slider(-1 , -1 ,3)	
})

arrow_right.addEventListener("click",function(){
	slider(1 ,4 ,0)	
})

function slider (p_n ,max , min){
	prev_dot = document.getElementById(i)
	i += p_n
	console.log(i)
	if (i == max){
		i = min
	}
	current_slide=i 
	current_dot = document.getElementById(i)
	current_dot.classList.add('dot_selected')
	prev_dot.classList.remove('dot_selected')
	banner_img.src = './assets/images/slideshow/' + slides[current_slide].image
	console.log(current_slide)

} 
