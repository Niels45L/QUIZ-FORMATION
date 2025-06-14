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
	const questionIndex = 15;
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
function InitQuestion16()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 15;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('70OfMsCJomM=', 638, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('70OfMsCJomM=', 638, -1000, 1000),DecodeDecimal('Twz62S8PX6c=', 638, -1000, 1000),DecodeDecimal('Twz62S8PX6c=', 638, -1000, 1000));
    question.num = 16;
    question.answers.length = 0;
    question.shortTextQuestion = "Les cloques sur une brûlure doivent être percées pour éviter les infections  ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('8UM8C3loJFE=', 638, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearBooleanChoice(questionIndex,0);

}






