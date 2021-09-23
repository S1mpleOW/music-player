const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
  songs: [
    {
      name: "Gone",
      singer: "ROSÉ",
      path: "./music/song1.mp3",
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
        <ul class="songs">
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
        </ul>
        `;
    });
  },
  start: function () {
    this.render();
  },
};
