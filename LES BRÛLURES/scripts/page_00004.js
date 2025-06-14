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
	const questionIndex = 3;
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
function InitQuestion4()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 3;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('386TIbNgpgs=', 218, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('386TIbNgpgs=', 218, -1000, 1000),DecodeDecimal('KmsvUPDad4U=', 218, -1000, 1000),DecodeDecimal('KmsvUPDad4U=', 218, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Il est nécessaire de protéger une brûlure simple, après l'avoir refroidie avec un pansement stérile on adhérent  ? ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('386TIbNgpgs=', 218, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearBooleanChoice(questionIndex,0);

}






