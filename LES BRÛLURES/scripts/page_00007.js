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
	const questionIndex = 6;
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
function InitQuestion7()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 6;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('5yQGlDqjb6M=', 192, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5yQGlDqjb6M=', 192, -1000, 1000),DecodeDecimal('P3HY1pfrkaY=', 192, -1000, 1000),DecodeDecimal('P3HY1pfrkaY=', 192, -1000, 1000));
    question.num = 7;
    question.answers.length = 0;
    question.shortTextQuestion = "Pour une brûlure chimique, il est indispensable de connaitre la nature du produit avant de commencer le rinçage  ? ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('50Cw1OwcNug=', 192, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearBooleanChoice(questionIndex,0);

}






