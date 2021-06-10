var ques4
class Question3{
    constructor(){
        this.question3= createElement('h1')

        this.option3_1 = createElement('h2');
        this.option3_2 = createElement('h2');
        this.option3_3= createElement('h2');
        this.option3_4 = createElement('h2');

        this.answerBox3 = createInput('Enter Correct Option No.')
        this.next3 = createButton("Next");

        ques4= new Question4();

    }

    display(){
        this.question3.html("What is the name of the village where Harry's parents lived?");
        this.question3.position(300, displayHeight/2-300)
        this.question3.style("font-size","40px")
        this.question3.style('color', "White")
    
        this.option3_1.html("1: Godric's Hollow" );
        this.option3_1.position(300, displayHeight/2-200);
        this.option3_2.html("2: Hogsmeade" );
        this.option3_2.position(300, displayHeight/2-150);
        this.option3_3.html("3: Privet Drive" );
        this.option3_3.position(300, displayHeight/2-100);
        this.option3_4.html("4: Diagon Alley" );
        this.option3_4.position(300, displayHeight/2-50);
    
        this.answerBox3.position(displayWidth/2-30, displayHeight/2+100)
        this.answerBox3.style('width', '220px');
        this.answerBox3.style('Height', '60px');
        this.answerBox3.style('font-size', '20px');
        this.answerBox3.style('background', 'Yellow');
    
        this.next3.position(displayWidth/2+20, displayHeight/2+170)
        this.next3.style("background", "Turquoise")
        this.next3.style("width", "80px");
        this.next3.style("height", "30px");
        this.next3.style("font-size", "20px");

        this.next3.mousePressed(()=>{
            this.question3.hide();
            this.option3_1.hide();
            this.option3_2.hide();
            this.option3_3.hide();
            this.option3_4.hide();
            this.answerBox3.hide();
            this.next3.hide();

            ques4.display();

            var Answer3 = "1"
            if(Answer3===this.answerBox3.value()){
                score= score+1
            }

        })
        drawSprites();
      
    }
}