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

let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")

arrow_left.addEventListener("click",function(){
	console.log("il y a eu un click")	
})

arrow_right.addEventListener("click",function(){
	console.log("il y a eu un click")	
})