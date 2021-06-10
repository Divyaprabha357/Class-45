var ques9
class Question8 extends baseclass{
    constructor(){
        super();
        ques9= new Question9();

    }
    display(){

        super.display();

        this.question.html("What is the Unlocking Spell")
        this.option1.html("1:Wingardium Leviosa")
        this.option2.html("2:Expalliarmus")
        this.option3.html("3:Alohomora")
        this.option4.html("4:Lumos")

        this.next.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.next.hide();


            ques9.display();

            var Answer8= "3"
            if(Answer8===this.answerBox.value()){
                score=score+1
            }

        })
    }

}