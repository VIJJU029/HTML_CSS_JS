//https://api.quotable.io/random
//
//JSON and Javascript Object

const myButton =document.getElementById('btn1');
const myquote = document.getElementById('myquote');
const myauthor=document.getElementById('myauthor');

const container = document.getElementById("container")
const Loader = document.getElementById('Loader')

const copy=document.getElementById('copy')

const volume= document.getElementById("volume");

function first(){
  container.hidden = false
  Loader.hidden = true
}

function second(){
  Loader.hidden = false
  container.hidden = true
}
first()






myButton.addEventListener("click",async function(){

  second()





  const response = await fetch("https://api.quotable.io/random")
  
let quotes = await response.json()
// quotes.content
// quotes.author

  myquote.innerText=quotes.content
  myauthor.innerText=quotes.author
first()

})

//copy function
copy.addEventListener('click',function(){
  navigator.clipboard.writeText(myquote.innerText)

})

//Volume function
volume.addEventListener('click',function(){

  let speach = new SpeechSynthesisUtterance(myquote.innerText)
  speechSynthesis.speak(speach)
})





