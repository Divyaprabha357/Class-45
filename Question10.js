
class Question10 extends baseclass{
    constructor(){
        super();

        this.submit= createButton("SUBMIT");
        this.displayScore= createElement("h1")

    }
    display(){

        super.display();

        this.question.html("What is the name of the wand shop in the Diagon Alley?")
        this.option1.html("1:FLOURISH AND BLOTTS")
        this.option2.html("2:OLLIVANDER'S")
        this.option3.html("3:THE LEAKY CAULDRON")
        this.option4.html("4:WEASLEY'S WIZARD WHEEZES")

        this.next.hide();

        this.submit.position(displayWidth/2+20, displayHeight/2+170)
        this.submit.style("background", "Turquoise")
        this.submit.style("width", "80px");
        this.submit.style("height", "30px");
        this.submit.style("font-size", "20px");



        this.submit.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.submit.hide();

            var Answer9= "4"
            if(Answer9===this.answerBox.value()){
                score=score+1
            }

            this.displayScore.html("You have Scored:"+score+"/10")
            this.displayScore.position(displayWidth/2-200, displayHeight/2-100);
            this.displayScore.style("font-size", "50px");
            this.displayScore.style("color", "Yellow")
            
        })
    }

}