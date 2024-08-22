function updateText() {
    var input = document.getElementById("userInput").value;
    document.getElementById("textOverlay").innerText = input;
}

document.getElementById("qualityRange").addEventListener("input", function() {
    document.getElementById("qualityValue").innerText = this.value;
});

function saveImage() {
    var quality = document.getElementById("qualityRange").value;
    html2canvas(document.querySelector(".container"), {
        scale: 1,
        useCORS: true
    }).then(canvas => {
        let image = canvas.toDataURL("image/png", quality);
        let link = document.createElement('a');
        link.href = image;
        link.download = 'brat_image.png';
        link.click();
    });
}