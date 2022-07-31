const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_PLAYTIME = 'videoplayer-current-time';
const savedTime = localStorage.getItem(LOCAL_PLAYTIME);

starterPlayerTime();

player.on('timeupdate', throttle(onPlayTimeSave, 1000));

function onPlayTimeSave(data) {
  localStorage.setItem(LOCAL_PLAYTIME, data.seconds);
}

function starterPlayerTime() {
  if (localStorage.getItem(LOCAL_PLAYTIME) !== null) {
    player.setCurrentTime(savedTime);
  }
  return;
}
