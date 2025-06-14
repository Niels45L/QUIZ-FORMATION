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
	const questionIndex = 1;
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
function InitQuestion2()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 1;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('WjdvdaPFbS0=', 644, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('WjdvdaPFbS0=', 644, -1000, 1000),DecodeDecimal('izB2K+6IxlY=', 644, -1000, 1000),DecodeDecimal('izB2K+6IxlY=', 644, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Une brûlure au visage, aux mains, aux organes génitaux, nécessite une demande d'avis médical  ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('WjdvdaPFbS0=', 644, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearBooleanChoice(questionIndex,0);

}






