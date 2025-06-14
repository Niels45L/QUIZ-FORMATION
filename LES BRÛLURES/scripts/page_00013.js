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
	const questionIndex = 12;
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
function InitQuestion13()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 12;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('l+xB9OTpPYM=', 859, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('l+xB9OTpPYM=', 859, -1000, 1000),DecodeDecimal('ByPeVHnjeb0=', 859, -1000, 1000),DecodeDecimal('ByPeVHnjeb0=', 859, -1000, 1000));
    question.num = 13;
    question.answers.length = 0;
    question.shortTextQuestion = "Il est recommandé d'appliquer du beurre ou une pommade grasse sur une brûlure thermique pour apaiser la douleur ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('A0vJH/1jD/A=', 859, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearBooleanChoice(questionIndex,0);

}






