// console.log("hello");

// Initialixe the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterSongPlay = document.getElementById('masterSongPlay');
let myPrograssBar = document.getElementById('myPrograssBar');
let songPlayGif = document.getElementById('songPlayGif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName')


let songs= [
{songsName : "Salam-e-Issq" , filePath : "songs/1.mp3" , coverPath : "covers/1.jpg", songDurestion : "3:50"},
{songsName : "jan meri jan" , filePath : "songs/2.mp3" , coverPath : "covers/2.jpg", songDurestion : "2:33"},
{songsName : "company" , filePath : "songs/3.mp3" , coverPath : "covers/3.jpg", songDurestion : "4:33"},
{songsName : "tri miti me mil java" , filePath : "songs/4.mp3" , coverPath : "covers/4.jpg", songDurestion : "4:27"},
{songsName : "matlu" , filePath : "songs/5.mp3" , coverPath : "covers/5.jpg", songDurestion : "3:28"},
{songsName : "jay goga" , filePath : "songs/6.mp3" , coverPath : "covers/6.jpg", songDurestion : "3:28"},
{songsName : "happy holi" , filePath : "songs/7.mp3" , coverPath : "covers/7.jpg", songDurestion : "4:30"},
{songsName : "Salam-e-Issq" , filePath : "songs/8.mp3" , coverPath : "covers/8.jpg", songDurestion : "3:50"},
{songsName : "Salam-e-Issq" , filePath : "songs/9.mp3" , coverPath : "covers/9.jpg", songDurestion : "3:28"},
	]

songItem.forEach((element , i)=>{
	// console.log(element , i);
	element.getElementsByTagName("img")[0].src = songs[i].coverPath;
	element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
	element.getElementsByClassName('songsTimeDurtion')[0].innerText = songs[i].songDurestion;
})


//Handle play/pause click
masterSongPlay.addEventListener('click' , ()=>{

	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterSongName.innerText = songs[songIndex].songsName;
		masterSongPlay.classList.remove('fa-circle-play');
		masterSongPlay.classList.add('fa-circle-pause');
		songPlayGif.style.opacity = 1;
	}
	else{
		audioElement.pause();
		masterSongPlay.classList.add('fa-circle-play');
		masterSongPlay.classList.remove('fa-circle-pause');
		songPlayGif.style.opacity = 0;
	}
})

//listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
     //update Seekbar
	progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
	myPrograssBar.value = progress;
	secound = myPrograssBar.value;

             min = 0;
			if(secound >= 60){
				secound -= 60;
				min++;
			}

	document.getElementById('songCurrentTimeViewSecound').innerText = secound;
	document.getElementById('songCurrentTimeViewMinut').innerText = min;		
});



myPrograssBar.addEventListener('change' , ()=>{
	audioElement.currentTime =myPrograssBar.value *audioElement.duration /100;  
})



// song item plye

const mackAllPlay = ()=>{
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
	})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element , i)=>{
		element.addEventListener('click' , ()=>{
			mackAllPlay();

			if(audioElement.paused){
			songIndex = i;
			element.classList.remove('fa-circle-play');
			element.classList.add('fa-circle-pause');
			audioElement.src = `songs/${i+1}.mp3`;
			// audioElement.currentTime = 0;
			audioElement.play();
			masterSongName.innerText = songs[songIndex].songsName;
			masterSongPlay.classList.remove('fa-circle-play');
			masterSongPlay.classList.add('fa-circle-pause');
			songPlayGif.style.opacity = 1;

		}
		else{
			songIndex = i;
			element.classList.add('fa-circle-play');
			element.classList.remove('fa-circle-pause');
			audioElement.src = `songs/${i+1}.mp3`;
			// audioElement.currentTime = 0;
			audioElement.pause();
			masterSongName.innerText = songs[songIndex].songsName;
			masterSongPlay.classList.add('fa-circle-play');
			masterSongPlay.classList.remove('fa-circle-pause');
		}

		})
})





// next song
document.getElementById('masterSongNext').addEventListener('click' , ()=>{
	if(songIndex>9){
		songIndex= 0;
	}
	else{
		songIndex++;
	}

	audioElement.src = `songs/${songIndex+1}.mp3`;
		// audioElement.currentTime = 0;
		audioElement.play();
		masterSongName.innerText = songs[songIndex].songsName;
		masterSongPlay.classList.remove('fa-circle-play');
		masterSongPlay.classList.add('fa-circle-pause');
		songPlayGif.style.opacity = 1;


		Array.from(document.getElementsByClassName('songItemPlay')).forEach((element , i)=>{
			i.classList.remove('fa-circle-play');
      		i.classList.add('fa-circle-pause');
		})
          
 
})

//songs privis

document.getElementById('masterSongback').addEventListener('click' , ()=>{
	if(songIndex == 0){
		songIndex= 9;
	}
	else{
		songIndex--;
	}

	audioElement.src = `songs/${songIndex+1}.mp3`;
		// audioElement.currentTime = 0;
		audioElement.play();
		masterSongName.innerText = songs[songIndex].songsName;
		masterSongPlay.classList.remove('fa-circle-play');
		masterSongPlay.classList.add('fa-circle-pause');
		songPlayGif.style.opacity = 1;

})
