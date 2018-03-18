module.exports={
    getQuestions : function(pageName){
        var questions = [];
        var question = {};
        question.label = "What is the current value of your car?";
        question.id = "estimatedValue";
        question.displayed = true;
        questions.push(question);


        question = {};
        question.label = "modified?";
        question.id = "modified";
        question.displayed = true;
        questions.push(question);

        return questions;
    }
}