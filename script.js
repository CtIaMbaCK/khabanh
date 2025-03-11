// Danh sách các âm thanh đã chuẩn bị sẵn
const sounds = [
//   new Audio("/audio/mixkit-male-voice-cheer-victory-2011.wav"),
  new Audio("https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/bell_ring.mp3"),
//   new Audio('sound3.mp3'),
  // new Audio('sound4.mp3')
];

// Hàm phát âm thanh ngẫu nhiên
function playRandomSound() {
  // Chọn ngẫu nhiên một âm thanh từ danh sách
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const selectedSound = sounds[randomIndex];

  // Phát âm thanh đã chọn
  selectedSound.play();
}
