const startQuizBtn = document.querySelector('#btn-start');
const appHTML = document.querySelector('#app');

startQuizBtn.addEventListener('click', function(){
    getQuiz().then(data => {
        console.log(data);
       
        data.results.forEach(element => {
            const addHTML = `<h2 id="questionHead">${element.question}</h2>
                            <div class="anwsersWrong">
                            <button type="radio" class="answers" id="anwser1"></button>
                            <button type="radio" class="answers" id="anwser2"></button>
                            <button type="radio" class="answers" id="anwser3"></button>
                            <button type="radio" class="answers" id="anwser4"></button>
                            </div>`;
            appHTML.innerHTML += addHTML;
        });
    })
})