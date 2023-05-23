//-GqXDBreSUwtkL9XNPqeLsv6JU8D9Nn4_3oCYCaERVI

const imagecontainer=document.getElementById('imagecontainer')
const myloader = document.getElementById('loader')

function controlloader(){
  myloader.hidden = false

}
controlloader()





async function getImages(){

 const response = await fetch("https://api.unsplash.com/photos/?client_id=-GqXDBreSUwtkL9XNPqeLsv6JU8D9Nn4_3oCYCaERVI")

 const imagesData = await response.json()

imagesData.map(function(i)
{
  let imageUrl = i.urls.full
const myImageElement = document.createElement("img")

myImageElement.setAttribute("src",imageUrl)

console.log(myImageElement)

imagecontainer.append(myImageElement)

})
}
// getImages()

setTimeout(function
  (){
  getImages()
  myloader.hidden =true
  },1000)

window.addEventListener("scroll",function(){

let myClientHeight = document.documentElement.clientHeight
let myScrollHeight = document.documentElement.scrollHeight
let myScrollTop = document.documentElement.scrollTop

console.log(myClientHeight, myScrollHeight, myScrollTop)

if(myClientHeight + myScrollTop >= myScrollHeight){
  
 }
// getImages()
})


