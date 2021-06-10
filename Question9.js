var ques10
class Question9 extends baseclass{
    constructor(){
        super();
        ques10= new Question10

    }
    display(){

        super.display();

        this.question.html("What is the name of Hermoine's cat?")
        this.option1.html("1:Scabbers")
        this.option2.html("2:Fawkes")
        this.option3.html("3:Hegwig")
        this.option4.html("4:Crookshanks")

        this.next.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.next.hide();


            ques10.display();

            var Answer9= "4"
            if(Answer9===this.answerBox.value()){
                score=score+1
            }

        })
    }

}