var Exam = {
    questions: [],
    beginTime: 0,
    endTime: 0,
    startExam: function() {
        this.startAt = new Date();
    },
    finishExam: function() {
        this.finishAt = new Date();
    },
    timeExamInSeconds: function() {
        return (this.finishAt - this.startAt) / 1000;
    },
    add: function(name, valueCorrect) {
        this.questions.push({
            name: name,
            correct: valueCorrect,
            isCorrect: false,
            countCorrect: 0,
            countIncorrect: 0,
            lastUpdate: 0
        });
        return this.questions.length-1;
    },
    clearQuestion: function(index) {
        this.questions[index].countCorrect=0;
        this.questions[index].countIncorrect=0;
    },
    markQuestion: function(index, value) {
        if( this.questions[index] === value){
            this.questions[index].isCorrect = true;
            this.questions[index].countCorrect++;
        }else{
            this.questions[index].isCorrect = false;
            this.questions[index].countIncorrect++;
        }
        this.questions[index].lastUpdate = Date.getTime();
    },
    average: function() {
        var sum = 0;
        _.each(this.questions, function(question){
            if(question.isCorrect){
                sum ++;
            }
        });
        return sum / this.questions.length;
    }
}
