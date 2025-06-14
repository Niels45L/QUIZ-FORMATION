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
	const questionIndex = 4;
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
function InitQuestion5()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 4;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('kU+E4wJGJdA=', 782, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kU+E4wJGJdA=', 782, -1000, 1000),DecodeDecimal('Uk4LYBLSNio=', 782, -1000, 1000),DecodeDecimal('Uk4LYBLSNio=', 782, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Les brûlures causées par des boissons chaudes sont généralement superficielles et ne nécessitent jamais une consultation médicale  ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('mgjy6o923zE=', 782, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearBooleanChoice(questionIndex,0);

}






