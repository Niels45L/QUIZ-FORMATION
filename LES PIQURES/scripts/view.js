//=========================================
// File name: view.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Main functions for display messages and status info
//=========================================

var currentPlayingAudio = "";

function RestoreSelection(question, questionIndex)
{
	if (question.typeOfQuestion === QMAKE_MULTIANS)          // risposte multiple del tipo r/w
	{
		if (question.isSingleAns) {
			RestoreSelectionSingleAns(question, questionIndex);
		}
		else {
			RestoreSelectionMultiAns(question, questionIndex);
		}
	}
	else if (question.typeOfQuestion === QMAKE_MULTIANS_WITH_POINT)   // risposte multiple a punteggio
		RestoreSelectionMultiAns(question, questionIndex);
	else if (question.typeOfQuestion === QMAKE_BOOLEAN)    // risposte booleane
		RestoreSelectionBoolAns(question, questionIndex);
	else if (question.typeOfQuestion === QMAKE_OPENANS)     // risposta aperta
		RestoreSelectionOpenAns(question, questionIndex);
	else if (question.typeOfQuestion === QMAKE_FILLGAP)     // fill-gap
		RestoreSelectionFillGap(question, questionIndex);
	else if (question.typeOfQuestion === QMAKE_MATCHING)     // risposta matching
		RestoreSelectionMatching(question, questionIndex);


	if (options.lockQuestionAfterConfirm && question.alreadyAnswered)
	{
		DisableButtonClearQuestion(questionIndex);
		DisableQuestion(question, questionIndex);
	}
}

function RestoreSelectionSingleAns(question, questionIndex)
{
	var i;

	for (i = 0; i < question.answers.length; i++)
	{
		var answer = question.answers[i];
		var radioId = '#idRadio' + questionIndex + "_" + i;
		$(radioId).prop('checked', (answer.choice === 1));
	}
}

function RestoreSelectionMultiAns(question, questionIndex)
{
	var i = 0;

	for (i = 0; i < question.answers.length; i++)
	{
		var answer = question.answers[i];
		var checkBoxId = '#idCheckbox' + questionIndex + "_" + i;
		$(checkBoxId).prop('checked', (answer.choice === 1));
	}
}

function RestoreSelectionOpenAns(question, questionIndex)
{
	var answer = question.answers[0];
	$("#comment" + questionIndex).val(answer.additionalText);
}

function RestoreSelectionBoolAns(question, questionIndex)
{
	var i = 0;
	for (i = 0; i < question.answers.length; i++)
	{
		var answer = question.answers[i];
		var radioId = '#idRadio' + questionIndex + "_" + i;
		var radioIdTrue = radioId + "_T";
		var radioIdFalse = radioId + "_F";
		$(radioIdTrue).prop('checked', (answer.choice === 1));
		$(radioIdFalse).prop('checked', (answer.choice === 0));
	}
}

function RestoreSelectionFillGap(question, questionIndex)
{
	var i = 0;
	for (i = 0; i < question.answers.length; i++)
	{
		var answer = question.answers[i];
		var inputId = '#idGap' + questionIndex + "_" + i;
		$(inputId).val(answer.choice);
	}
}

function RestoreSelectionMatching(question, questionIndex)
{
	var i = 0;
	for (i = 0; i < question.answers.length; i++)
	{
		var answer = question.answers[i];

		SetSelectedItemLeft("idDD" + questionIndex, i, answer.choice[0]);
		SetSelectedItemRight("idDD" + questionIndex, i, answer.choice[1]);
	}
}

function GetSingleAnswerChoice(questionIndex)
{
	var optname = "optradio" + questionIndex;
	var choice = $("input[name='" + optname + "']:checked").val();
	if (typeof choice === 'undefined') choice = 0;

	return choice;
}

function DisableSingleAnswerChoices(questionIndex)
{
	var optname = "optradio" + questionIndex;
	var opt = $("input[name='" + optname + "']");
	DisableChoice(opt);
}

function ClearSingleAnswerChoices(questionIndex)
{
	var optname = "optradio" + questionIndex;
	var opt = $("input[name='" + optname + "']");
	opt.prop('checked', false);
}

function GetMultipleAnswerChoice(questionIndex, answerIndex)
{
	var checkboxName = '#idCheckbox' + questionIndex + "_" + answerIndex;
	var isChecked = $(checkboxName).is(':checked');
	return (isChecked ? 1 : 0);
}

function DisableMultipleAnswerChoice(questionIndex, answerIndex)
{
	var checkboxName = '#idCheckbox' + questionIndex + "_" + answerIndex;
	var opt = $(checkboxName);
	DisableChoice(opt);
}

function ClearMultipleAnswerChoice(questionIndex, answerIndex) {
	var checkboxName = '#idCheckbox' + questionIndex + "_" + answerIndex;
	var opt = $(checkboxName);
	opt.prop('checked', false);
}

function DisableChoice(opt)
{
	opt.addClass("ctrl-disabled");
	opt.attr('disabled', 'disabled');
}

function GetBooleanChoice(questionIndex, answerIndex)
{
	var radioId = "#idRadio" + questionIndex + "_" + answerIndex + "_T";
	return ($(radioId).is(':checked')) ? 1 : 0;
}

function DisableBooleanChoice(questionIndex, answerIndex)
{
	var radioIdTrue = "#idRadio" + questionIndex + "_" + answerIndex + "_T";
	var radioIdFalse = "#idRadio" + questionIndex + "_" + answerIndex + "_F";
	DisableChoice($(radioIdTrue));
	DisableChoice($(radioIdFalse));
}

function ClearBooleanChoice(questionIndex, answerIndex)
{
	var radioIdTrue = $("#idRadio" + questionIndex + "_" + answerIndex + "_T");
	var radioIdFalse = $("#idRadio" + questionIndex + "_" + answerIndex + "_F");
	radioIdTrue.prop('checked', false);
	radioIdFalse.prop('checked', false);
}

function IsBooleanChoiceSelected(questionIndex, answerIndex)
{
	var radioId_True = "#idRadio" + questionIndex + "_" + answerIndex + "_T";
	var radioId_False = "#idRadio" + questionIndex + "_" + answerIndex + "_F";
	return ($(radioId_True).is(':checked')) || ($(radioId_False).is(':checked'));
}

function DisableOpenAns(questionIndex)
{
	var comment = $('#comment' + questionIndex);
	DisableChoice(comment);
}

function ClearOpenAns(questionIndex)
{
	var comment = $('#comment' + questionIndex);
	comment.val('');
}

function DisableFillTheGap(questionNum, gapIndex)
{
	var gapBoxName = "#idGap" + questionNum + "_" + gapIndex;
	DisableChoice($(gapBoxName));
}

function ClearFillTheGap(questionNum, gapIndex)
{
	var gapBoxName = $("#idGap" + questionNum + "_" + gapIndex);
	gapBoxName.val('');
}

function DisableButtonClearQuestion(questionIndex)
{
	var btnClear = $('#idClearButton' + questionIndex);

	btnClear.prop("onclick", null).off("click");
	btnClear.addClass('btn-warning').removeClass('btn-secondary');
	btnClear.prop("disabled", true);
}

function DisableQuestion(question, questionIndex)
{
	var i;

	switch (question.typeOfQuestion)
	{
		case QMAKE_MULTIANS:
		case QMAKE_MULTIANS_WITH_POINT:
			if (question.isSingleAns) {
				DisableSingleAnswerChoices(questionIndex);
			}
			else {
				for (i = 0; i < question.answers.length; i++) {
					DisableMultipleAnswerChoice(questionIndex, i);
				}
			}
			break;
		case QMAKE_BOOLEAN:
			for (i = 0; i < question.answers.length; i++) {
				DisableBooleanChoice(questionIndex, i);
			}
			break;
		case QMAKE_OPENANS:
			DisableOpenAns(questionIndex);
			break;
		case QMAKE_FILLGAP:
			for (i = 0; i < question.answers.length; i++) {
				DisableFillTheGap(question.num, i);
			}
			break;
		case QMAKE_MATCHING:
			for (i = 0; i < question.answers.length; i++) {
				DisableMatching("idDD" + questionIndex, i)
			}
			break;
		case QMAKE_CUSTOMQST:
			break;
		default:
			break;
	}
}

function PrintTitleAndDescription()
{
	document.title = options.name;
	$('#idQuizTitle').text(options.name);
	$('#idQuizDescription').text(options.title);

	if (options.hideTitleBar)
	{
		$('#idQuizHeader').hide();
	}

	if (options.includeProfile)
	{
		$('#idQuizProfile').show();
		$('#idAuthor').text(options.author);
		$('#idArgument').text(options.argument);
		$('#idCompany').text(options.company);
		$('#idDate').text(options.quiz_date);
	}
}

function PrintQuestionNumber()
{
	// numero di domanda corrente
	//var currQuestNum = quiz.ordineDomande[quiz.currentQuestionPage - 1] + 1;
	var currQuestNum = quiz.currentQuestionPage.toString();
	var textToDisplay = "" + currQuestNum + " / " + options.numOfQuestions;

	$('#idQuestionNumber').text(textToDisplay);
}

function ShowTopOfQuestion(questionIndex)
{
	var numQst = 0;
	var panelQst;

	if (options.questSlide)
	{
		// una domanda per pagina
		numQst = questionIndex+ 1;
	}
	else {
		// tutte le domande nella stessa pagina
		for (var i = 0; i < quiz.ordineDomande.length; i++)
		{
			if (quiz.ordineDomande[i] === questionIndex)
			{
				numQst = i + 1;
				break;
			}
		}
	}

	if (numQst > 0)
	{
		panelQst = document.getElementById("idPanel" + numQst);
		var heightPanel = panelQst.offsetHeight;
		var windowHeight = $(window).height();

		//if (!options.questSlide ||
		//	(options.questSlide && (heightPanel > window.innerHeight))) // se complessivamente la domanda (con tutte le sue risposte) occupa pi? spazio verticale dell'altezza della finestra del browser
		if (heightPanel >= windowHeight)
		{			
			panelQst.scrollIntoView(true);

			if (!options.questSlide)
			{
				// nel caso di tutte le domande sulla stessa pagina : tiene conto dell'altezza barra superiore (header)
				var header = document.getElementById("idTopBar");
				var heightHeader = header.offsetHeight;
				window.scrollBy(0, -heightHeader);
			}
		}
	}
}

function ShowHidePrevNextButton()
{
	if (options.questSlide)
	{
		if (quiz.currentQuestionPage === 1)
		{
			$('#idLinkPrev').hide();
		}
	}
}

function PrintStatusBar()
{
	if (options.hideStatusBar)
	{
		$('#idQuizFooter').hide();
	}
}

function PrintIntroEpilogueText()
{
	if (!options.questSlide)
	{
		if (options.hasIntroText)
		{
			$('#idSectionTextIntro').show();
		}
		if (options.hasEpilogueText)
		{
			$('#idSectionTextEpilogue').show();
		}
	}
	else
	{
		if (quiz.currentQuestionPage === 1)
		{
			if (options.hasIntroText)
			{
				$('#idSectionTextIntro').show();
			}
		}
		else if (quiz.currentQuestionPage === options.numOfQuestions)
		{
			if (options.hasEpilogueText)
			{
				$('#idSectionTextEpilogue').show();
			}
		}
	}
}

function PrintFeedback(question, questionIndex)
{
	var divToShow = '';
	var audioToPlay = '';

	if (!options.silentBeforeEndQuiz && options.needValuateQuiz)
	{
		if (question.valid === 1)
		{
			divToShow = '#divSuccess' + questionIndex;
			audioToPlay = '#idCorrectAnswerSound';
		}
		else if (question.valid === -1)
		{
			divToShow = '#divFail' + questionIndex;
			audioToPlay = '#idWrongAnswerSound';
		}
		else if (question.valid === 2)
		{
			divToShow = '#divInfo' + questionIndex;
			audioToPlay = '';
		}
		else if (question.valid === 3)
		{
			if (question.nScore === question.maxScore)
			{
				divToShow = '#divSuccess' + questionIndex;
				audioToPlay = '#idCorrectAnswerSound';
			}
			else if (question.nScore === question.minScore)
			{
				divToShow = '#divFail' + questionIndex;
				audioToPlay = '#idWrongAnswerSound';
			}
			else
			{
				divToShow = '#divPartiallyCorrect' + questionIndex;
				audioToPlay = '#idPartiallyCorrectAnswerSound';
			}
		}
	}
	else
	{
		// silent before end of quiz
		divToShow = '#divInfo' + questionIndex;
		audioToPlay = '';
	}

	if (divToShow !== '')
	{
		$(divToShow).show();
	}

	if ((audioToPlay !== '') && (options.playSounds))
	{
		if (currentPlayingAudio !== "") {
			$(currentPlayingAudio).trigger("pause");
		}
		currentPlayingAudio = audioToPlay
		$(audioToPlay).trigger("play");
	}
}

function HideFeedback(questionIndex)
{
	var divSuccess = '#divSuccess' + questionIndex;
	var divFail = '#divFail' + questionIndex;
	var divInfo = '#divInfo' + questionIndex;
	var divPartiallyCorrect = '#divPartiallyCorrect' + questionIndex;
	$(divSuccess).hide();
	$(divFail).hide();
	$(divInfo).hide();
	$(divPartiallyCorrect).hide();
}


function ShowHideHintsAndFeedbacks(question, questionIndex)
{
	var i = 0;
	for (i = 0; i < question.answers.length; i++)
	{
		if ($('#idHint' + questionIndex + "_" + i).length)
		{
			$('#idHint' + questionIndex + "_" + i).hide();
		}
		if (options.needValuateQuiz)
		{
			if ($('#idFeedbackAns' + questionIndex + "_" + i).length)
			{
				$('#idFeedbackAns' + questionIndex + "_" + i).show();
			}
		}
	}
	if (options.needValuateQuiz)
	{
		if ($('#divQuestionFeedback' + questionIndex).length)
		{
			$('#divQuestionFeedback' + questionIndex).show();
		}
	}
}


function PrintCountOfAnswers()
{
	var quizDone = CountAnswers();
	var toDoQuestions = quiz.nToDo;

	if ((options.takeOnlyQuestions > 0) && (options.takeOnlyQuestions <= options.numOfQuestions))
	{
		toDoQuestions = options.takeOnlyQuestions - (options.numOfQuestions - quiz.nToDo);
		quizDone = (quiz.nToDo === options.numOfQuestions - options.takeOnlyQuestions)
	}

	$('#idCorrectAnswers').text(quiz.nRight.toString());
	$('#idWrongAnswers').text(quiz.nWrong.toString());
	$('#idToBeAnswered').text(toDoQuestions.toString());

	if (options.silentBeforeEndQuiz || !options.needValuateQuiz)
	{
		$('#idDivCorrectAnswer').hide();
		$('#idDivWrongAnswer').hide();
		$("#idDivToBeAnswered").removeClass("col-xs-3").removeClass("col-sm-2").addClass("col-sm-6").addClass("col-xs-9"); //.addClass("text-xs-left");
	}
	return quizDone;
}

function PrintSavePartialButton()
{
	if (options.manualSavePartial)
	{
		$('#idBtnSavePartial').show();
	}
}

function PrintRetireButton()
{
	if (options.allowAbandonFromQuiz)
	{
		$('#idBtnRetire').show();
	}
}

function HideRetireButton()
{
	$('#idBtnRetire').hide();
}

function ShowUniqueOkButton()
{
	if (!options.questSlide && options.uniqueOkButton)
	{
		if (options.uniqueOkButtonPos === "TOP")
		{
			$('#idVerifyPanelTop').show();
		}
		else
		{
			$('#idVerifyPanelBottom').show();
		}
	}
}

function HideUniqueOkButton()
{
	if (!options.questSlide && options.uniqueOkButton)
	{
		if (options.uniqueOkButtonPos === "TOP")
		{
			$('#idVerifyPanelTop').hide();
		}
		else
		{
			$('#idVerifyPanelBottom').hide();
		}
	}
}

function ShowQuizResultsButton()
{
	if (options.uniqueOkButtonPos === "TOP")
	{
		$('#idQuizResultsPanelTop').show();
	}
	else
	{
		$('#idQuizResultsPanelBottom').show();
	}
}

function ShowProgressBar()
{
	$('#idProgressBarTimeToAnswer').show();
}

function SetProgressBar(percent)
{
	$('#idProgressBarTimeToAnswer').attr('aria-valuenow', percent).css('width', percent + '%');
}

function PrintEngagementRules()
{
	if (options.showEngagementRules)
	{
		$('#engagementRulesPanelId').show();
	}
}


function PrintAnsweredToAllQuestions()
{
	$("#idModalNotificationCloseButton").click(DoAnsweredToAllQuestion);

	HideQuestionMenu();
	HideRetireButton();
	$('#idModalNotificationText').text('Vous avez r�pondu � toutes les questions');
	$('#idModalNotification').modal('show');

	// Set a timeout to hide the element again
	setTimeout(function () {
		$("#idModalNotification").modal('hide');
		DoAnsweredToAllQuestion();
	}, 5000);
}

function DoAnsweredToAllQuestion()
{
	if (!options.reviewQuizAtTheEnd || options.questSlide)
	{
		GoToPage(RESULT_PAGE_URL);
	}
	else
	{
		HideQuestionMenu();
		HideRetireButton();
		$('#idBtnGoToResults').show();
		if (options.askPrintAtTheEnd)
		{
			$('#idBtnPrintQuiz').show();
		}
	}
}

function PrintTimeOver()
{
	$("#idModalNotificationCloseButton").click(DoTimeOver);
	
	HideQuestionMenu();
	HideRetireButton();
	$('#idModalNotificationText').text('Temps expir�');
	$('#idModalNotification').modal('show');

	// Set a timeout to hide the element again
	setTimeout(function () {
		$("#idModalNotification").modal('hide');
		DoTimeOver();
	}, 8000);
}

function DoTimeOver()
{
	if (options.showUnansweredQuests)
	{
		InitNullQuestions();
	}

	if (options.questSlide || (!options.reviewQuizAtTheEnd && !options.uniqueOkButton))
	{
		GoToPage(RESULT_PAGE_URL);
	}
	else
	{
		HideQuestionMenu();
		HideRetireButton();
		if (options.reviewQuizAtTheEnd)
		{
			$('#idBtnGoToResults').show();
		}
		else if (options.uniqueOkButton)
		{
			HideUniqueOkButton();
			ShowQuizResultsButton();
		}
	}
}

function PrintVerifyFailed()
{
	$("#idModalConfirmationYesButton").unbind('click');
	$('#idModalNotificationText').text('Certaines questions ont des r�ponses incompl�tes. Vous devez r�pondre pour continuer');
	$('#idModalNotification').modal('show');
}

function PrintAskAbandonQuiz()
{
	$("#idModalConfirmationYesButton").click(function ()
	{
		quiz.isQuizAbandoned = true;
		if (options.valuateAfterAbandon)
		{
			if (options.showUnansweredQuests)
			{
				InitNullQuestions();
			}
			GoToPage(RESULT_PAGE_URL);
		}
		else {
			GoToPage(FINAL_PAGE_URL);
		}
	});
	$('#idModalConfirmationText').text('Etes-vous s�r ?');
	$('#idModalConfirmation').modal('show');
}

function PrintAskConfirmOK(InitQuestion)
{
	$("#idModalConfirmationYesButton").unbind('click').click(function ()
	{
		onOkButtonClick(InitQuestion, true);
	});
	$('#idModalConfirmationText').text('Confirmez-vous votre r�ponse ?');
	$('#idModalConfirmation').modal('show');
}


function PrintAskVerifyQuest()
{
	$("#idModalConfirmationYesButton").unbind('click').click(function () {
		onVerifyButtonClick();
	});
	$('#idModalConfirmationText').text('�tes-vous s�r de confirmer toutes vos r�ponses ?');
	$('#idModalConfirmation').modal('show');
}

function PrintRegistrationSuccess()
{
	$("#idModalNotificationCloseButton").click(function () {
		GoToPage(INITIAL_PAGE_URL);
	});
	$('#idModalNotificationText').text('L&apos;enregistrement a r�ussi');
	$('#idModalNotification').modal('show');
}

function PrintDoneBefore(questionIndex)
{
	PrintWarning('Vous avez d�j� r�pondu � cette question !', questionIndex);
}

function PrintQuestionTimeIsElapsed(questionIndex)
{
	PrintWarning('Le temps de r�ponse � cette question est �coul�', questionIndex);
}

function PrintNeedToAnswer(questionIndex)
{
	PrintWarning('R�ponse incompl�te.', questionIndex);  // "Prima di proseguire devi rispondere alla domanda"
}

function PrintNeedToAnswerAllItem(questionIndex)
{
	PrintWarning('R�ponse incompl�te. Veuillez choisir tous les items', questionIndex);  // "Prima di proseguire devi rispondere al tutte le uscite"
}

function PrintNeedToAnswerCorrectly(questionIndex)
{
	PrintWarning('Avant la prochaine �tape, vous devez y r�pondre correctement', questionIndex);  // "Prima di proseguire devi rispondere alla domanda in modo corretto"
}

function PrintWrongKeyword(questionIndex)
{
	PrintError('Impossible de continuer le test', questionIndex);
}

function PrintErrorComputeMark(questionIndex)
{
	PrintError('Impossible de calculer la note finale', questionIndex);
}

function PrintErrorLoadPageFailed()
{
	PrintGlobalError('Une erreur lors du chargement de la page ou l&apos;actualisation de la page n&apos;est pas autoris�e');
}

function PrintGlobalError(msg)
{
	var divToShow = '#divErrorGlobal';
	$('#idErrorMsgGlobal').html(msg);
	$(divToShow).show();
}

function PrintGlobalWarning(msg)
{
	var divToShow = '#divWarningGlobal';
	$('#idWarningMsgGlobal').html(msg);
	$(divToShow).show();
}

function PrintCopyrightMsg()
{
	var copyRightMsg = "Ce test a �t� cr�� ";
	if ((options.author !== null) && (options.author !== '')) {
		copyRightMsg += "par " + options.author + " ";
	}
	copyRightMsg += "avec QuizFaber 4.1";

	$('#idCopyrightMsg').html("<I>" + copyRightMsg + "</I>");
}

function PrintWarning(msg, questionIndex)
{
	var divToShow = '#divWarning' + questionIndex;
	$('#idWarningMsg' + questionIndex).html(msg);
	$(divToShow).show();
}

function PrintError(msg, questionIndex)
{
	var divToShow = '#divError' + questionIndex;
	$('#idErrorMsg' + questionIndex).html(msg);
	$(divToShow).show();
}

function PrintSuccess(msg, questionIndex)
{
	var divToShow = '#divSuccess' + questionIndex;
	$('#idSuccessMsg' + questionIndex).html(msg);
	$(divToShow).show();
}

function PlayBackgroundSound()
{
	if (options.playSounds)
	{
		var audioToPlay = '#idBackgroundSound';
		$(audioToPlay).muted = false;
		$(audioToPlay).trigger("play");
	}
}

function PauseBackgroundSound()
{
	if (options.playSounds)
	{
		var audioToPlay = '#idBackgroundSound';
		$(audioToPlay).muted = false;
		$(audioToPlay).trigger("pause");
	}
}

//------------------------------------
// Rimescola l'ordine delle domande in modo casuale
//------------------------------------
function ShuffleQuestionsSamePage()
{
	var i;
	var idPanelQuest;
	var nQuest;
	var nNewQuest;

	var fromContent = [];
	fromContent.length = options.numOfQuestions;

	for (i = 0; i < options.numOfQuestions; i++)
	{
		nQuest = i + 1;
		idPanelQuest = "#idPanel" + nQuest;
		fromContent[i] = $(idPanelQuest).html();
	}

	for (i = 0; i < options.numOfQuestions; i++)
	{
		nQuest = i + 1;
		nNewQuest = quiz.ordineDomande[i] + 1;
		idPanelQuest = "#idPanel" + nQuest;
		
		newContent = fromContent[quiz.ordineDomande[i]];
		newContent = newContent.replace("<b>question " + nNewQuest + "</b>", "<b>question " + nQuest + "</b>")

		$(idPanelQuest).html(newContent);
	}
}

function ShowQuestionMenu()
{
	var menu = $('#qst_menu');

	if (!options.questSlide && options.showListQstToAns)
	{
		menu.show();
		
		var html = "";
		for (var i = 0; i < options.numOfQuestions; i++)   // quiz.questions.length
		{
			var n = quiz.ordineDomande[i]
			var question = quiz.questions[n];

			if ((typeof question === 'undefined') || (question === null)) {
				html += "<a href='#linkQst" + (n + 1) + "' class='qst_menu_link'>" + (i + 1) + "</a> ";
			}
		}
		menu.html("r�pondre<br />" + html);		
	}
}

function HideQuestionMenu()
{
	$('#qst_menu').hide();
}

function ShowRevision(enabled)
{
	if (enabled) {
		$(".revision-class").css({ "display": "block" });
		$("img.revision-class").css({ "display": "inline-block" });
		$("span.revision-class").css({ "display": "inline" });
		$(".no-revision-class").css({ "display": "none" });
	}
	else {
		$(".revision-class").css({ "display": "none" });
		$(".no-revision-class").css({ "display": "inline" });
	}
}

function InvalidateQuiz()
{
	$('#allPanelsId').hide();
	HideQuestionMenu();
	$('#idTopBar').hide();
}

function ShowProgressBarSavingResults()
{
	if (options.needSaveQuiz)
	{
		if ((options.saveQuizMode === QMAKE_SEND_NODEJS) || (options.saveQuizMode === QMAKE_SEND_NODEJS_LOCAL) || (options.saveQuizMode === QMAKE_SEND_WEBAPP))
		{
			$("#idProgressSavingResults").css({ "display": "block" });
		}
	}
}

function HideProgressBarSavingResults()
{
	if (options.needSaveQuiz)
	{
		if ((options.saveQuizMode === QMAKE_SEND_NODEJS) || (options.saveQuizMode === QMAKE_SEND_NODEJS_LOCAL) || (options.saveQuizMode === QMAKE_SEND_WEBAPP))
		{
			$("#idProgressSavingResults").css({ "display": "none" });
		}
	}
}

function ShowSnackbarSuccess(msg)
{
	return ShowSnackbar(msg, 'success')
}

function ShowSnackbarError(msg)
{
	return ShowSnackbar(msg, 'danger')
}

function ShowSnackbar(msg, sbType)
{
	bootoast.toast({
		message: msg,
		type: sbType,
		position: 'top',
		icon: null,
		timeout: 3,
		animationDuration: 300,
		dismissible: true
	});
}
