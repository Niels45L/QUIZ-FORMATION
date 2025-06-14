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
	const questionIndex = 5;
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
function InitQuestion6()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 5;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('6RMpL8D7lM4=', 987, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6RMpL8D7lM4=', 987, -1000, 1000),DecodeDecimal('XuM/MF6rFf8=', 987, -1000, 1000),DecodeDecimal('XuM/MF6rFf8=', 987, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Il faut appliquer une eau à 5° sur une brûlure pour soulager la douleur et limiter l'expansion de celle-ci  ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('1XkQyINl/6g=', 987, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearBooleanChoice(questionIndex,0);

}






