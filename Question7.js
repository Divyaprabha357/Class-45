var ques8
class Question7 extends baseclass{
    constructor(){
        super();
        ques8= new Question8
    }
    display(){

        super.display();
        
        this.question.html("Who is the conductor of the Knight bus?")
        this.option1.html("1:Stan Stupkin")
        this.option2.html("2:Erien")
        this.option3.html("3:Barty Crouch")
        this.option4.html("4:Arthur Weasley")

        this.next.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.next.hide();

            ques8.display();

            var Answer6= "1"
            if(Answer6===this.answerBox.value()){
                score=score+1
            }

        })
    }
}