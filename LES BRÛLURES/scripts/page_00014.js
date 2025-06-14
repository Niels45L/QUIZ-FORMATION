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
	const questionIndex = 13;
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
function InitQuestion14()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 13;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('+Epi6geEMCc=', 228, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+Epi6geEMCc=', 228, -1000, 1000),DecodeDecimal('GpN2JtiOhg8=', 228, -1000, 1000),DecodeDecimal('GpN2JtiOhg8=', 228, -1000, 1000));
    question.num = 14;
    question.answers.length = 0;
    question.shortTextQuestion = "Il est possible de retirer les vêtements situés sur la zone brulée, s'ils n'adhérent pas à la peau de la victime  ?";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('+Epi6geEMCc=', 228, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearBooleanChoice(questionIndex,0);

}






