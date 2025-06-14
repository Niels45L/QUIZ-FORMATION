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
	const questionIndex = 11;
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
function InitQuestion12()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 11;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('Ce05LAEf1So=', 654, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ce05LAEf1So=', 654, -1000, 1000),DecodeDecimal('/XreOgtP/BM=', 654, -1000, 1000),DecodeDecimal('/XreOgtP/BM=', 654, -1000, 1000));
    question.num = 12;
    question.answers.length = 0;
    question.shortTextQuestion = "Une brûlure chimique doit être rincée abondamment à l'eau pendant au moins 15 minutes  ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('Ce05LAEf1So=', 654, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearBooleanChoice(questionIndex,0);

}






