
var ques7
class Question6 extends baseclass{
    constructor(){
        super();
        ques7=new Question7();
    }
    display(){

        super.display();

        this.question.html("What is the occupation of Hermoine's Parents")
        this.option1.html("1:Dentists")
        this.option2.html("2:Doctors")
        this.option3.html("3:Mechanics")
        this.option4.html("4:Scientists")

        this.next.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.next.hide();

            ques7.display();

            var Answer5= "1"
            if(Answer5===this.answerBox.value()){
                score=score+1
            }

        })
    }

}