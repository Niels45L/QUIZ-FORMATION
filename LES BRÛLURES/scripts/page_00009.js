//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 8;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 8;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('4wwT6EqOwp8=', 516, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4wwT6EqOwp8=', 516, -1000, 1000),DecodeDecimal('zbAcCX0ao8o=', 516, -1000, 1000),DecodeDecimal('zbAcCX0ao8o=', 516, -1000, 1000));
    question.num = 9;
    question.answers.length = 0;
    question.shortTextQuestion = "Les brûlures chimiques peuvent continuer à causer des dégats tant que le produit reste en contact avec la peau  ? ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('4wwT6EqOwp8=', 516, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearBooleanChoice(questionIndex,0);

}






