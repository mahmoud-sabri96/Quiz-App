// /<reference path="../typings/globals/jquery/index.d.ts" />

import Quiz from "./Quiz.js"

export class Settings {

    //owel 7aga bt4t3`l hya elly gowa el-constructor
    constructor() {
        // let categoryElement = document.getElementById("category");
        // let difficultyElement = document.getElementsByName("difficulty");
        // let numberOfQuestions = document.getElementById("numberOfQuestions");
        // // console.log(categoryElement)

        // get dom element
        this.categoryElement = document.getElementById("category");
        this.difficultyElement = document.getElementsByName("difficulty");
        this.numberOfQuestions = document.getElementById("numberOfQuestions");
        // console.log(this.numberOfQuestions);

        document.getElementById("startBtn").addEventListener("click", this.startQuiz.bind(this))

    }

    // ======>>>> implementaion of start Quiz function
    async startQuiz() {
        let category = this.categoryElement.value;
        let difficulty = Array.from(this.difficultyElement).find(el => el.checked).value;
        let numOfQuestions = this.numberOfQuestions.value;
        let API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`

        if (numOfQuestions == "") {
            $("#alertApi").fadeIn(500)
        } else {
            $("#alertApi").fadeOut(500);
        }

        let questions = await this.fetchAPI(API);
        //## Check if have array of data to do some action 
        if (questions.length) {
            $("#setting").fadeOut(200, function () {
                $("#quiz").fadeIn(200);
            });

            let x = new Quiz(questions);

        }
    }



    // ======>>>> implementaion of function Which fetching data from API
    async fetchAPI(API) {
        let response = await fetch(API);
        let data = await response.json();
        let finalResult = data.results;
        return finalResult;
    }
}
