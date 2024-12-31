// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 1, 2, 6, 8
    let group2Score = 0; // For questions 4, 9, 11, 12
    let group3Score = 0; // For questions 3, 7
    let group4Score = 0; // For questions 5, 10

    const group1Questions = [1, 2, 6, 8];
    const group2Questions = [4, 9, 11, 12];
    const group3Questions = [3, 7];
    const group4Questions = [5, 10];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 27) {
        comment = "You allow your personal doubts and fears to keep you from succeeding. You've probably had a few incomplete goals in the past, so you may have convinced yourself that you aren't self-motivated - and then you've made that come true. Break this harmful pattern now, and start believing in yourself again. The tools and tips below will help you get back your motivation.";
    } else if (totalScore <= 43) {
        comment = "You're doing OK on self-motivation. You're certainly not failing - however, you could achieve much more. To achieve what you want, try to increase the motivation factors in all areas of your life. Read the relevant sections below, and work on them to strengthen your self-motivation.";
    } else if (totalScore <= 60) {
        comment = "Wonderful! You get things done, and you don't let anything stand in your way. You make a conscious effort to stay self-motivated, and you spend significant time and effort on setting goals and acting to achieve those goals. You attract and inspire others with your success. Treasure this - and be aware that not everyone is as self-motivated as you are!";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "Actually motivation is self motivation.<br><br>";

    resultsDiv.innerHTML += `Self-Confidence and Self-Efficacy: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Positive Thinking, and Positive Thinking About the Future: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Focus and Strong Goals: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Motivating Environment : ${group4Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

