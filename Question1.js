var ques2, imageSprite
class Question1{
    constructor(){
        this.question1= createElement('h1')

        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');

        this.answerBox = createInput('Enter Correct Option No.')
        this.next1 = createButton("Next")

        

        
        ques2 = new Question2();

        imageSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
        imageSprite.addImage(Question1img)
    }



    display(){
       background("red")

        //image(Question1img, 0, -displayHeight*4, displayWidth, displayHeight*5);
        this.question1.html("What is the Animagus Form of Sirius Black?");
        this.question1.position(300, displayHeight/2-300)
        this.question1.style("font-size","40px")
        this.question1.style('color', "White")

        this.option1.html("1:Fox")
        this.option1.position(300, displayHeight/2-200);
        this.option2.html("2:Stag")
        this.option2.position(300, displayHeight/2-150);
        this.option3.html("3: Dog " );
        this.option3.position(300, displayHeight/2-100);
        this.option4.html("4: Cat" );
        this.option4.position(300, displayHeight/2-50);
    
        this.answerBox.position(displayWidth/2-30, displayHeight/2+100)
        this.answerBox.style('width', '220px');
        this.answerBox.style('Height', '60px');
        this.answerBox.style('font-size', '20px');
        this.answerBox.style('background', 'Yellow');
    
        this.next1.position(displayWidth/2+20, displayHeight/2+170)
        this.next1.style("background", "Turquoise")
        this.next1.style("width", "80px");
        this.next1.style("height", "30px");
        this.next1.style("font-size", "20px");

        this.next1.mousePressed(()=>{
            this.question1.hide();
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            this.answerBox.hide();
            this.next1.hide();

            ques2.display();

            var Answer1 = "3"
            if(Answer1===this.answerBox.value()){
                score= score+1
            }
        })
        drawSprites();
      
    }
}