var ques5
class Question4{
    constructor(){
        this.question4= createElement('h1')

        this.option4_1 = createElement('h2');
        this.option4_2 = createElement('h2');
        this.option4_3= createElement('h2');
        this.option4_4 = createElement('h2');

        this.answerBox4 = createInput('Enter Correct Option No.')
        this.next4= createButton("Next");

        ques5= new Question5();





        
    }

    display(){
        this.question4.html("What is the form of Harry's Patronus?");
        this.question4.position(300, displayHeight/2-300)
        this.question4.style("font-size","40px")
        this.question4.style('color', "White")
    
        this.option4_1.html("1: Doe " );
        this.option4_1.position(300, displayHeight/2-200);
        this.option4_2.html("2: Hare" );
        this.option4_2.position(300, displayHeight/2-150);
        this.option4_3.html("3: Stag " );
        this.option4_3.position(300, displayHeight/2-100);
        this.option4_4.html("4: Fox" );
        this.option4_4.position(300, displayHeight/2-50);
    
        this.answerBox4.position(displayWidth/2-30, displayHeight/2+100)
        this.answerBox4.style('width', '220px');
        this.answerBox4.style('Height', '60px');
        this.answerBox4.style('font-size', '20px');
        this.answerBox4.style('background', 'Yellow');
    
        this.next4.position(displayWidth/2+20, displayHeight/2+170)
        this.next4.style("background", "Turquoise")
        this.next4.style("width", "80px");
        this.next4.style("height", "30px");
        this.next4.style("font-size", "20px");

        this.next4.mousePressed(()=>{
            this.question4.hide();
            this.option4_1.hide();
            this.option4_2.hide();
            this.option4_3.hide();
            this.option4_4.hide();
            this.answerBox4.hide();
            this.next4.hide();



            ques5.display();

            var Answer4 = "3"
            if(Answer4===this.answerBox4.value()){
                score= score+1
            }

        })
        drawSprites();
      
    }
}