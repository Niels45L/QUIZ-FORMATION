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
	const questionIndex = 10;
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
function InitQuestion11()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 10;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('xlsv9v/IqUA=', 448, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xlsv9v/IqUA=', 448, -1000, 1000),DecodeDecimal('quevmCb/Ums=', 448, -1000, 1000),DecodeDecimal('quevmCb/Ums=', 448, -1000, 1000));
    question.num = 11;
    question.answers.length = 0;
    question.shortTextQuestion = "En cas d'ingestion d’un produit chimique, il est recommandé de faire vomir la victime pour éliminer le produit le plus rapidement possible  ? ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('hnh3sgkOFUA=', 448, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearBooleanChoice(questionIndex,0);

}






