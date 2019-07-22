// Random Quiz

// Event listener
document.getElementById('MarkQ').addEventListener('click', MarkTheQuiz)

// Event Functions
function MarkTheQuiz() {
    // Adding questions ids and names
    let Q1 = document.getElementById('answer1').value;
    let Q2 = document.getElementById('answer2').value;
    let Q3 = document.getElementById('answer3').value;
    let Q4 = document.getElementById('answer4').value;

    Q1 = Q1.toLowerCase();
    Q2 = Q2.toLowerCase();
    Q3 = Q3.toLowerCase();
    Q4 = Q4.toLowerCase();

    let score = 0;
    let percentage = 0;

    // Marking The Quiz
    if (Q1 == 'canada') {
        console.log('correct')
        score++;
        percentage = percentage + 25;
    } else {
        console.log('incorrect')
    }

    if (Q2 == 'cardinal') {
        console.log('correct')
        score++;
        percentage = percentage + 25;
    } else {
        console.log('incorrect')
    }

    if (Q3 == 'tai lung' || Q3 == 'master tai lung' || Q3 == 'villain tai lung') {
        console.log('correct')
        score++;
        percentage = percentage + 25;
    } else {
        console.log('incorrect')
    }

    if (Q4 == 'brown') {
        console.log('correct')
        score++;
        percentage = percentage + 25;
    } else {
        console.log('incorrect')
    }

    document.getElementById('Score').innerHTML = score
    document.getElementById('Percentage').innerHTML = percentage
}