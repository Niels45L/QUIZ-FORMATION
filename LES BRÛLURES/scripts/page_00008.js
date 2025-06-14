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
	const questionIndex = 7;
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
function InitQuestion8()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 7;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('ZcjIoEa8XR4=', 952, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZcjIoEa8XR4=', 952, -1000, 1000),DecodeDecimal('i0irxfjaoiI=', 952, -1000, 1000),DecodeDecimal('i0irxfjaoiI=', 952, -1000, 1000));
    question.num = 8;
    question.answers.length = 0;
    question.shortTextQuestion = "Lors d'une brûlure chimique à l'œil, il faut rincer de manière continue en dirigeant le flux d'eau de l'intérieur vers l'extérieur de l'œil  ? ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('ZcjIoEa8XR4=', 952, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearBooleanChoice(questionIndex,0);

}






