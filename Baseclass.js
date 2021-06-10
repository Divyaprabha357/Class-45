class baseclass{
    constructor(){
        this.question= createElement('h1')

        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');

        this.answerBox = createInput('Enter Correct Option No.')
        this.next = createButton("Next")

    }



    display(){
       background("red")

        //image(Question1img, 0, -displayHeight*4, displayWidth, displayHeight*5);
        this.question.html("What is question?");
        this.question.position(300, displayHeight/2-300)
        this.question.style("font-size","40px")
        this.question.style('color', "White")

        this.option1.html("1:A")
        this.option1.position(300, displayHeight/2-200);
        this.option2.html("2:B")
        this.option2.position(300, displayHeight/2-150);
        this.option3.html("3: C " );
        this.option3.position(300, displayHeight/2-100);
        this.option4.html("4: D" );
        this.option4.position(300, displayHeight/2-50);
    
        this.answerBox.position(displayWidth/2-30, displayHeight/2+100)
        this.answerBox.style('width', '220px');
        this.answerBox.style('Height', '60px');
        this.answerBox.style('font-size', '20px');
        this.answerBox.style('background', 'Yellow');
    
        this.next.position(displayWidth/2+20, displayHeight/2+170)
        this.next.style("background", "Turquoise")
        this.next.style("width", "80px");
        this.next.style("height", "30px");
        this.next.style("font-size", "20px");

        this.next.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.next.hide();

        })
        drawSprites();
      
    }
}
    
