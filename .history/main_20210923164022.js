/*
    1. Render song (finished)
    2. Scroll top (finished)
    3. Play / pause / seek
    4. CD rotate
    5. Next / pre
    6. Random
    7. Next repeat when ended
    8. Active song
    9. Scroll active song into view
    10. Play song when click
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const songName = $(".header > h2");
const cdImg = $(".progressbar-circle");
const audio = $("audio#audio");
const playbtn = $(".btn-toggle-play");
const controlPlaying = $(".control");
const app = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Gone",
      singer: "ROSÉ",
      path: "../music/song1.mp3",
      image: "./img/song1.jpg",
    },
    {
      name: "Lalisa",
      singer: "LISA",
      path: "./music/song2.mp3",
      image: "./img/song2.jpg",
    },
    {
      name: "On the ground",
      singer: "ROSÉ",
      path: "./music/song3.mp3",
      image: "./img/song3.jpg",
    },
    {
      name: "Solo",
      singer: "JENNIE",
      path: "./music/song4.mp3",
      image: "./img/song4.jpg",
    },
    {
      name: "How you like that",
      singer: "BLACKPINK",
      path: "./music/song5.mp3",
      image: "./img/song5.jpg",
    },
    {
      name: "Kill this love",
      singer: "BLACKPINK",
      path: "./music/song6.mp3",
      image: "./img/song6.jpg",
    },
    {
      name: "Boombayah",
      singer: "BLACKPINK",
      path: "./music/song7.mp3",
      image: "./img/song7.jpg",
    },
    {
      name: "Whistle",
      singer: "BLACKPINK",
      path: "./music/song8.mp3",
      image: "./img/song8.jpg",
    },
    {
      name: "Playing With Fire",
      singer: "BLACKPINK",
      path: "./music/song9.mp3",
      image: "./img/song9.jpg",
    },
    {
      name: "Don'T Know What To Do",
      singer: "BLACKPINK",
      path: "./music/song10.mp3",
      image: "./img/song10.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
            <li class="song">
                <div
                    class="song-img"
                    style="background-image: url(${song.image})"
                ></div>
                <div class="song-content">
                    <h2 class="song-name">${song.name}</h2>
                    <span class="song-author">${song.singer}</span>
                </div>

                <div class="song-option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </li>
        `;
    });
    const html = htmls.join("");
    $(".songs").innerHTML = html;
  },
  handleEvent: function () {
    const _this = this;
    console.log(_this);
    const progressbar = $(".progressbar");
    const progressbarHeight = progressbar.offsetHeight;
    document.onscroll = function () {
      const scrollTop = window.scrollY; // window.scrollY
      const newHeight = progressbarHeight - scrollTop;
      progressbar.style.height = newHeight > 0 ? newHeight + "px" : 0;
      progressbar.style.opacity = newHeight / progressbarHeight;
    };
    playbtn.onclick = function () {
      if (!_this.isPlaying) {
        app.isPlaying = true;
        audio.play();
        controlPlaying.classList.add("playing");
      } else {
        audio.pause();
      }
    };
    audio.onplay = function () {
      app.isPlaying = false;
      controlPlaying.classList.remove("playing");
    };
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  loadCurrentSong: function () {
    songName.textContent = this.currentSong.name;
    cdImg.style.backgroundImage = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
  },
  start: function () {
    this.defineProperties();
    this.loadCurrentSong();
    this.handleEvent();
    this.render();
  },
};

app.start();
