
// ======>>>> implementaion of class Quiz feature   
export default class Quiz {
    //owel 7aga bt4t3`l hya elly gowa el-constructor
    constructor(questions) {

        this.questions = questions;
        this.numOfQuestion = questions.length;
        this.score = 0;
        this.currQuestion = 0;
        this.showQuestion();

        // document.getElementById("next").addEventListener("click", () => this.nextQuesiton(this.currQuestion, questions))

        //===>>>## an alternative way       
        document.getElementById("next").addEventListener("click", this.nextQuesiton.bind(this));

        $("#tryBtn").click(() => {
            $("#finish").fadeOut(500, () => {
                $("#setting").fadeIn(500)
            })
        })
    }


    // ======>>>> implementaion of function Which Shuflle the the Array <<<<======
    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    // ======>>>> implementaion of function Which Showing the current question and  answer <<<<======
    showQuestion() {
        document.getElementById("question").innerHTML = this.questions[this.currQuestion].question;
        document.getElementById("currentQuestion").innerHTML = this.currQuestion + 1
        document.getElementById("totalNumberOfQuestions").innerHTML = this.numOfQuestion

        let answers = [this.questions[this.currQuestion].correct_answer, ...this.questions[this.currQuestion].incorrect_answers]
        // console.log(answers)
        let randomAnswer = this.shuffle(answers);
        // console.log(randomAnswer)
        let answerRow = '';
        for (let i = 0; i < answers.length; i++) {
            //     answerRow += `
            //     <label class="form-check-label">
            //     <input type="radio" class="form-check-input" name="answer"  value='${answers[i]}'>
            //     ${answers[i]}
            // </label>
            // `
            answerRow +=
                `
        <div class="pretty mb-2 p-default p-curve" >
            <input type="radio" name="answer"  value='${answers[i]}' checked>
            <div class="state p-info-o">
                <label> ${answers[i]}</label>
            </div>
        </div>
    `

        }
        document.getElementById("rowAnswer").innerHTML = answerRow;
    }



    // ======>>>> implementaion of function Which Showing  question 
    nextQuesiton() {

        if (Array.from(document.getElementsByName("answer")).filter(el => el.checked).length != 0) {
            $("#alert").fadeOut(500)
            let userAnswer = Array.from(document.getElementsByName("answer")).find(el => el.checked).value;
            let correctAnswer = this.questions[this.currQuestion].correct_answer
            // fire the checkUserAnswer Fun 
            this.checkUserAnswer(correctAnswer, userAnswer)
            // increase the currentQuestion
            this.currQuestion++;
            if (this.numOfQuestion > this.currQuestion) {
                this.showQuestion()
            } else {
                $("#score").text(this.score)
                $("#quiz").fadeOut(500, () => {
                    $("#finish").fadeIn(500)
                    $(".numOfQuestions").html(`(${this.numOfQuestion})`)
                })
            }
        } else {
            $("#alert").fadeIn(500);
        }
        // let nextAnswers = [this.questions[this.currQuestion].correct_answer, ...this.questions[this.currQuestion].incorrect_answers]
    }

    // ======>>>> implementaion of function Which check userAnswer question 
    checkUserAnswer(correctAnswer, userAnswer) {

        if (correctAnswer === userAnswer) {
            this.score++;
            $("#Correct").fadeIn(700, () => {
                $("#Correct").fadeOut(500)
            });
        }
        else {
            $("#inCorrect").fadeIn(700, () => {
                $("#inCorrect").fadeOut(500)
            });
        }
    }
};