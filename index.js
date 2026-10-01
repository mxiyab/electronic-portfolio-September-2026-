const pdfs = [
  'https://docs.google.com/document/d/1F9MH4SIl7zotTzMSGyJZ6ea6XoOoTOIKB_McnA9iuQA/preview?tab=t.0',
  'https://drive.google.com/file/d/1WlhWleoYIoEbjHWHxyRt-92qkGzhLY7Y/preview',
  'https://drive.google.com/file/d/1JCVOSsWJx5bXUau4ofcVursHaKKbKMu2/preview',
  'https://drive.google.com/file/d/1pikOWxAAO3MKKzZ3VTsZC3wkpi6Letcg/preview',
  'https://drive.google.com/file/d/1vuw3BELEQJcKIl53kqJyJz-sxL3Xeeyw/preview',
];

let currentIndex = 0;
const viewer =document.getElementById('pdfViewer');
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