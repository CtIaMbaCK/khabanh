// Danh sách các âm thanh đã chuẩn bị sẵn
const sounds = [
  new Audio("/audio/mixkit-male-voice-cheer-victory-2011.wav"),
  new Audio("./BIỆT GIANG HỒ REMIX.mp3"),
//   new Audio('sound3.mp3'),
  // new Audio('sound4.mp3')
];


function playRandomSound() {

  const randomIndex = Math.floor(Math.random() * sounds.length);
  const selectedSound = sounds[randomIndex];

  selectedSound.play();
}
