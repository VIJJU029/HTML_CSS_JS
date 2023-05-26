const myaudio= document.querySelector("audio");
const myplay= document.getElementById("play");

Audioplaying = false

function playaudio(){
  Audioplaying=true
myaudio.play()
myplay.classList.replace("fa-play", "fa-pause")

}

function pauseaudio(){
  Audioplaying=false
myaudio.pause()
myplay.classList.replace("fa-pause","fa-play")
}



myplay.addEventListener("click",function(){

  if(Audioplaying){
    pauseaudio()
  }else{

    playaudio()
  }
  //write the logic to play and pause the audio

})

const data =[

  { singername:"vijaykumar",
   songname:"All is Well",
   info:"image1"
  },

  {singername:"prasad",
   songname:"in to the sky",
   info:"image2" 
    
  },
  {singername:"raju",
  songname:"sing a song",
  info:"image3"

  }
]
// collect= {singername:"jemma Barbsy",
// songname:"All is Well",
// info:"image2" 
 
// }
const mysinger = document.getElementById('singer')
const mysong=document.getElementById('song')
const myimage =document.querySelector("img");

const myForward= document.getElementById("forward");
const myBackward = document.getElementById("backward");



function loadData(collect){

  mysinger.innerText = collect.singername
  mysong.innerText =collect.songname
  myimage.src =`IMAGES/${collect.info}.jpg`//images/image2
  myaudio.src =`AUDIO/${collect.info}.mp3`//music/image2.mp3
  
  
  
}
// loadData(data[2]);


let songIndex =0
myBackward.addEventListener("click",function(){

  songIndex--

  if(songIndex<0){
    songIndex=data.length-1
  }
  console.log(songIndex)
  loadData(data[songIndex])
})

myForward.addEventListener("click",function(){
  songIndex ++
  
  if(songIndex>data.length-1){
    songIndex=0
  }
  console.log(songIndex)
  loadData(data[songIndex])
  
})

const myprogressbar = document.getElementById("progressbar")

const durationTime=document.getElementById("durationTime")
const currentTime= document.getElementById("currentTime")

function getdata(event){

  let mycurrentTime = event.srcElement.currentTime
  let myduration = event.srcElement.duration

  let mypercentage = (mycurrentTime/myduration)*100

  myprogressbar.style.width =`${mypercentage}%`

  // console.log(myduration)
  const durationTimeInMinutes = Math.floor((myduration/60))
  console.log(durationTimeInMinutes)

  let durationTimeInSeconds = Math.floor((myduration%60))
  console.log(durationTimeInSeconds)
  

  if(durationTimeInSeconds <9){
    durationTimeInSeconds =`0${durationTimeInSeconds}`
  }
  durationTime.innerText=
  `${durationTimeInMinutes}:${durationTimeInSeconds}`


  const currentTimeInMinutes = Math.floor((mycurrentTime/60))
  // console.log(currentTimeInMinutes)

  let currentTimeInSeconds = Math.floor((mycurrentTime%60))
  // console.log(currentTimeInSeconds)
  

  if(currentTimeInSeconds < 9){
    currentTimeInSeconds =`0${currentTimeInSeconds}`
  }
  currentTime.innerText=
  `${currentTimeInMinutes}:${currentTimeInSeconds}`

  let totalTime=`{durationInMinutes}:${durationInSeconds}`
  console.log(totalTime)
  if(!isaudioplaying){
    durationTime.innerText =totalTime
  }

  
}
myaudio.addEventListener("timeupdate",getdata)




