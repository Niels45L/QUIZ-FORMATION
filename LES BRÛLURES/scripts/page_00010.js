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
	const questionIndex = 9;
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
function InitQuestion10()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 9;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('n99YuAfY10U=', 243, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('n99YuAfY10U=', 243, -1000, 1000),DecodeDecimal('0lBPALELx5A=', 243, -1000, 1000),DecodeDecimal('0lBPALELx5A=', 243, -1000, 1000));
    question.num = 10;
    question.answers.length = 0;
    question.shortTextQuestion = "Il est possible d'arroser une brûlure électrique avec de l'eau immédiatement, une fois que la victime n'est plus en contact avec l'électricité  ? ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('n99YuAfY10U=', 243, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearBooleanChoice(questionIndex,0);

}






