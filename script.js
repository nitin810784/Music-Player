let musicContainer = document.getElementById('music-container');
let playBtn = document.getElementById('play');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let audio = document.getElementById('audio');
let title = document.getElementById('title');
let artist = document.getElementById('artist');

let songs = [
    {
        title:'song 1',
        artist:'Artist 1',
        src:'./Nachde Ne Saare - Full Video _ Baar Baar Dekho _ Sidharth Malhotra & Katrina Kaif _ Jasleen Royal (320).mp3'
    },
    {
        title:'song 2',
        artist:'Artist 2',
        src:'./WhatsApp Audio 2024-05-28 at 23.10.41_777dd442.mp3'
    },
    {
        title:'song 3',
        artist:'Artist 3',
        src:'./WhatsApp Audio 2024-05-28 at 23.10.27_a5aa7169.mp3'
    },
    {
        title:'song 4',
        artist:'Artist 4',
        src:'./WhatsApp Audio 2024-05-28 at 23.10.38_575f7a86.mp3'
    },
    {
        title:'song 5',
        artist:'Artist 5',
        src:'./WhatsApp Audio 2024-05-28 at 23.10.39_0c48d89b.mp3'
    }

];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}
function playSong() {
    musicContainer.classList.add('play');
    playBtn.innerText = 'Pause';
    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.innerText = 'Play';
    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('ended', nextSong);
