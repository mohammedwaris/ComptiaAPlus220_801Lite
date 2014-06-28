function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getVirtualExamQuestions(){
   var questions = new Array();
   for(i=0;i<questionsJSON.length;i++){
      var question = new Object();
      question.question = questionsJSON[i].question;
      question.option1 = questionsJSON[i].option1;
      question.option2 = questionsJSON[i].option2;
      question.option3 = questionsJSON[i].option3;
      question.option4 = questionsJSON[i].option4;
      question.option5 = questionsJSON[i].option5;
      question.answer = questionsJSON[i].answer;
      question.explanation = questionsJSON[i].explanation;
      question.isexamquestion = questionsJSON[i].isexamquestion;
      if(question.isexamquestion == "1")
        questions.push(question);
   }
   questions = shuffle(questions);
   q = new Array();
   for(i=0;i<90;i++){
     q.push(questions[i]);
   }
   return q;
}

function getShortExamQuestions(){
   var questions = new Array();
   for(i=0;i<questionsJSON.length;i++){
      var question = new Object();
      question.question = questionsJSON[i].question;
      question.option1 = questionsJSON[i].option1;
      question.option2 = questionsJSON[i].option2;
      question.option3 = questionsJSON[i].option3;
      question.option4 = questionsJSON[i].option4;
      question.option5 = questionsJSON[i].option5;
      question.answer = questionsJSON[i].answer;
      question.explanation = questionsJSON[i].explanation;
      question.isexamquestion = questionsJSON[i].isexamquestion;
      if(question.isexamquestion == "1")
        questions.push(question);
   }
   questions = shuffle(questions);
   q = new Array();
   for(i=0;i<10;i++){
     q.push(questions[i]);
   }
   return q;
}

function getPracticeQuestions(){
   var questions = new Array();
   for(i=0;i<questionsJSON.length;i++){
      var question = new Object();
      question.question = questionsJSON[i].question;
      question.option1 = questionsJSON[i].option1;
      question.option2 = questionsJSON[i].option2;
      question.option3 = questionsJSON[i].option3;
      question.option4 = questionsJSON[i].option4;
      question.option5 = questionsJSON[i].option5;
      question.answer = questionsJSON[i].answer;
      question.explanation = questionsJSON[i].explanation;
      question.isexamquestion = questionsJSON[i].isexamquestion;
      if(question.isexamquestion == "1")
        questions.push(question);
   }
   return questions;
}