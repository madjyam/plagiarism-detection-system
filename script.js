function checkPlagiarism() {
    const original = document.getElementById('originalText').value;
    const submitted = document.getElementById('submittedText').value;

    const words1 = original.split(/\s+/);
    const words2 = submitted.split(/\s+/);

    const commonWords = new Set(words1.filter(word => words2.includes(word)));
    const similarityPercentage = (commonWords.size / words1.length) * 100;

    const resultElement = document.getElementById('result');

    if(similarityPercentage >= 70) {
        resultElement.textContent = 'Plagiarism detected.';
    }else{
        resultElement.textContent = 'Plagiarism not detected.';
    }


}