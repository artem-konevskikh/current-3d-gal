// play video when user enters room. Pause when leaving
const video1 = document.getElementById('video-doc');
video1.pause();
const video2 = document.getElementById('video-research');
video2.pause();
const video3 = document.getElementById('video-current');
video3.pause();
const video4 = document.getElementById('video-gan');
video4.pause();

AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position');
    // console.log(userPosition);
    if ((userPosition["z"] > 2) && (userPosition["z"] < 13.8) && (userPosition["x"] > 2) && (userPosition["x"] < 14)) {
      video1.play();
    } else {
      video1.pause();
    }

    if ((userPosition["z"] <= -12.3) && (userPosition["x"] > -25) && (userPosition["x"] > -25.55) && (userPosition["x"] < -11)) {
      video2.play();
    } else {
      video2.pause();
    }

    if ((userPosition["z"] <= -12.3) && (userPosition["x"] > -25) && (userPosition["x"] > -9) && (userPosition["x"] < 9.65)) {
      video3.play();
    } else {
      video3.pause();
    }

    if ((userPosition["z"] <= -12.3) && (userPosition["x"] > -25) && (userPosition["x"] > 11.6) && (userPosition["x"] < 26)) {
      video4.play();
    } else {
      video4.pause();
    }
  }
});