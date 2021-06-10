
var ques3
class Question2{
    constructor(){
        this.question2= createElement('h1')

        this.option2_1 = createElement('h2');
        this.option2_2 = createElement('h2');
        this.option2_3= createElement('h2');
        this.option2_4 = createElement('h2');

        this.answerBox2 = createInput('Enter Correct Option No.')
        this.next2 = createButton("Next");

        ques3= new Question3()

        
    }

    display(){
        this.question2.html("How many staircases are there in Hogwarts ?");
        this.question2.position(300, displayHeight/2-300)
        this.question2.style("font-size","40px")
        this.question2.style('color', "White")
    
        this.option2_1.html("1: 135 " );
        this.option2_1.position(300, displayHeight/2-200);
        this.option2_2.html("2: 142" );
        this.option2_2.position(300, displayHeight/2-150);
        this.option2_3.html("3: 245 " );
        this.option2_3.position(300, displayHeight/2-100);
        this.option2_4.html("4: 240" );
        this.option2_4.position(300, displayHeight/2-50);
    
        this.answerBox2.position(displayWidth/2-30, displayHeight/2+100)
        this.answerBox2.style('width', '220px');
        this.answerBox2.style('Height', '60px');
        this.answerBox2.style('font-size', '20px');
        this.answerBox2.style('background', 'Yellow');
    
        this.next2.position(displayWidth/2+20, displayHeight/2+170)
        this.next2.style("background", "Turquoise")
        this.next2.style("width", "80px");
        this.next2.style("height", "30px");
        this.next2.style("font-size", "20px");

        this.next2.mousePressed(()=>{
            this.question2.hide();
            this.option2_1.hide();
            this.option2_2.hide();
            this.option2_3.hide();
            this.option2_4.hide();
            this.answerBox2.hide();
            this.next2.hide();


            ques3.display();

            var Answer2 = "2"
            if(Answer2===this.answerBox2.value()){
                score= score+1
            }

        })
        drawSprites();
      
    }
}