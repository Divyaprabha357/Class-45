var ques6
class Question5{
    constructor(){
        this.question5= createElement('h1')

        this.option5_1 = createElement('h2');
        this.option5_2 = createElement('h2');
        this.option5_3= createElement('h2');
        this.option5_4 = createElement('h2');

        this.answerBox5 = createInput('Enter Correct Option No.')
        this.next5= createButton("Next");

        ques6 = new Question6();




        
    }

    display(){
        this.question5.html("Who created the Chamber of secrets?");
        this.question5.position(300, displayHeight/2-300)
        this.question5.style("font-size","40px")
        this.question5.style('color', "White")
    
        this.option5_1.html("1: Lord Voldemort " );
        this.option5_1.position(300, displayHeight/2-200);
        this.option5_2.html("2: Salazar Slytherin" );
        this.option5_2.position(300, displayHeight/2-150);
        this.option5_3.html("3: Marvolo Gaunt" );
        this.option5_3.position(300, displayHeight/2-100);
        this.option5_4.html("4: Godric Griffindor" );
        this.option5_4.position(300, displayHeight/2-50);
    
        this.answerBox5.position(displayWidth/2-30, displayHeight/2+100)
        this.answerBox5.style('width', '220px');
        this.answerBox5.style('Height', '60px');
        this.answerBox5.style('font-size', '20px');
        this.answerBox5.style('background', 'Yellow');
    
        this.next5.position(displayWidth/2+20, displayHeight/2+170)
        this.next5.style("background", "Turquoise")
        this.next5.style("width", "80px");
        this.next5.style("height", "30px");
        this.next5.style("font-size", "20px");

        this.next5.mousePressed(()=>{
            this.question5.hide();
            this.option5_1.hide();
            this.option5_2.hide();
            this.option5_3.hide();
            this.option5_4.hide();
            this.answerBox5.hide();
            this.next5.hide();

            ques6.display();



            var Answer5 = "2"
            if(Answer5===this.answerBox5.value()){
                score= score+1
            }

        })
        drawSprites();
      
    }
}