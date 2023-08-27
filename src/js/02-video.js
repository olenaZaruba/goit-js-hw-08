import Player from '@vimeo/player';
import { refs } from './refs';

const throttle = require('lodash.throttle');
const player = new Player(refs.iframe);

function currentTime(data) {
  let time = data.seconds;
  console.log(time);
  localStorage.setItem('videoplayer-current-time', time);
}

const startTimeVideo = player.setCurrentTime(
  localStorage.getItem('videoplayer-current-time')
);

player.on('timeupdate', throttle(currentTime, 1000));
player.setCurrentTime(startTimeVideo);
