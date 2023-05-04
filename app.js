const song = document.querySelector('audio');
const back = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');
const play = document.querySelector('.playBtn');
const artist = document.querySelector('.artist');
const nameOfSong = document.querySelector('.songTitle');

let flag = false;

const tracks = [{
    id: 1,
    path: './track/first.mp3',
    artist: 'Billy Eichner',
    nameOfSong: 'accunaMatatta'
    }, {
    id: 2,
    path: './track/second.mp3',
    artist: 'JD McCrary',
    nameOfSong: 'King'
},{
    id: 3,
    path: './track/third.mp3',
    artist : 'Seth Rogen ',
    nameOfSong: 'nature'
}];

let currentIndexSong = 0;


play.addEventListener('click', function () {
    song.src = tracks[currentIndexSong].path;
    artist.textContent = tracks[currentIndexSong].artist;
    nameOfSong.textContent = tracks[currentIndexSong].nameOfSong;

        if (flag === false) {
        song.play();

        flag = true;
        this.style = 'background-image: url(./img/pause.png);'
    }
    else {
        song.pause();
        flag = false;
        this.style = 'background-image: url(./img/playBtn.png);'

    }
})
back.addEventListener('click', function () {
    if (currentIndexSong === 0) return
    currentIndexSong--;
    song.src = tracks[currentIndexSong].path;
    artist.textContent = tracks[currentIndexSong].artist;
    nameOfSong.textContent = tracks[currentIndexSong].nameOfSong;
    song.play();
    flag = true;
    play.style = 'background-image: url(./img/pause.png);'
})
next.addEventListener('click', function () {
    if(currentIndexSong === tracks.length-1) return;
    currentIndexSong++;
    song.src = tracks[currentIndexSong].path;
    artist.textContent = tracks[currentIndexSong].artist;
    nameOfSong.textContent = tracks[currentIndexSong].nameOfSong;
    song.play();
    flag = true;
    play.style = 'background-image: url(./img/pause.png);'
})
