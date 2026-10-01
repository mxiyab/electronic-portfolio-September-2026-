const pdfs = [
  'https://drive.google.com/file/d/10oJhNUjP2PmlB6yUzRVYYg40UNa3c97W/preview',
  'https://drive.google.com/file/d/1z79REC7DAWnCX2sNcbOh26W31Y5zAE30/preview',
  'https://drive.google.com/file/d/1mCmUpl3qY4zxomAE2DifMPIeQvDe3uZb/preview',
  'https://drive.google.com/file/d/16ex9q8ttwU3Cr5HMuG62KnQ3Pdmn7YCC/preview',
  'https://drive.google.com/file/d/1eNk89PTfR-gXXO2ifdP_UY_YAHn4VqQB/preview',
  'https://drive.google.com/file/d/133HPcvsoOsGA5NwALwNWVLbrQByN8nqW/preview'
];

let currentIndex = 0;
const viewer = document.getElementById('pdfViewer');
const interval = 10000;

function showNextPDF() {
  const currentPDF = pdfs[currentIndex];
  console.log(`Loading PDF: ${currentPDF}`);
  viewer.src = currentPDF;

  currentIndex = (currentIndex + 1) % pdfs.length;
}

window.addEventListener('DOMContentLoaded', () => {
  showNextPDF();
  setInterval(showNextPDF, interval);
});