// Get video and canvas elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the video size
video.addEventListener('loadedmetadata', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
});

// Chroma key effect function
function applyChromaKey() {
  // Draw current video frame to canvas
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Get image data from the canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Loop through each pixel to remove green color
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];     // Red value
    const g = data[i + 1]; // Green value
    const b = data[i + 2]; // Blue value

    // If pixel is a green color (chroma key color), make it transparent
    if (r < 100 && g > 150 && b < 100) {
      data[i + 3] = 0;  // Set alpha to 0 (transparent)
    }
  }

  // Put the modified image data back to canvas
  ctx.putImageData(imageData, 0, 0);
}

// Continuously apply chroma key effect every frame
function update() {
  applyChromaKey();
  requestAnimationFrame(update);
}

video.addEventListener('play', update);
