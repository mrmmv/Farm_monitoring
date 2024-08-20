// script.js

document.getElementById('detectButton').addEventListener('click', () => {
    const fileInput = document.getElementById('imageUpload');
    if (fileInput.files.length === 0) {
        alert('Please select an image.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';

        // Simulate disease detection
        const disease = simulateDiseaseDetection();
        displayResult(disease);
    };
    reader.readAsDataURL(file);
});

function simulateDiseaseDetection() {
    // Simulate the process of disease detection
    const diseases = [
        {
            name: 'Brown Spot',
            treatment: 'Use fungicides such as benomyl, carbendazim, or thiophanate-methyl. Improve field drainage and reduce leaf wetness.'
        },
        {
            name: 'Leaf Blast',
            treatment: 'Apply fungicides like tricyclazole or isoprothiolane. Use resistant varieties and avoid excessive nitrogen fertilizer.'
        },
        {
            name: 'Bacterial Blight',
            treatment: 'Use bactericides such as copper-based compounds. Ensure proper water management and use resistant varieties.'
        },
        {
            name: 'Healthy',
            treatment: 'No treatment necessary. Continue regular crop management practices.'
        }
    ];
    const randomIndex = Math.floor(Math.random() * diseases.length);
    return diseases[randomIndex];
}

function displayResult(disease) {
    const resultDiv = document.getElementById('result');
    const diseaseNameP = document.getElementById('diseaseName');
    const treatmentP = document.getElementById('treatment');

    diseaseNameP.textContent = disease.name;
    treatmentP.textContent = disease.treatment;

    resultDiv.style.display = 'block';
}
