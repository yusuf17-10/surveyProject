class Form{
    constructor(){
        this.input = createInput("emailId");
        this.button = createButton("next");
        this.greeting=createElement("h3");
        this.greeting2=createElement( "h3");
        this.greeting3=createElement("h3");
        this.button2 = createRadio("yes");
        this.button3 = createRadio("no");
        this.button4 = createRadio("yes");
            this.button5 = createRadio("no");
            this.button6 = createRadio("100");
            this.button7 = createRadio("500");
            this.button8 = createRadio("1000");
            this.button9 = createRadio("more");
      
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();

       
    }

    display(){
        var title = createElement('h2');
        title.html("survey");
        title.position(displayWidth/2-40,0);

       this.input.position(displayWidth/2-50,displayHeight/2-80);
       this.button.position(displayWidth/2-50,displayHeight/2);
      
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            
            this.button2.show();
            this.button3.show();
            this.button4.show();
            this.button5.show();
            this.button6.show();
            this.button7.show();
            this.button8.show();
            this.button9.show();



            this.button2.position(400,150);
            this.button3.position(400,200);
            this.button4.position(400,300);
            this.button5.position(400,350);
            this.button6.position(400,450);
            this.button7.position(400,480);
            this.button8.position(400,510);
            this.button9.position(400,540);
            
        




            user.name= this.input.value();
            userCount++;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);

           this.greeting.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? ");
           this.greeting.position(displayWidth/2-500,displayHeight/6-50);

           this.greeting2.html("Q2. Would you be willing to contribute a small amount every month for such aprogram?");
            this.greeting2.position(displayWidth/2-500,displayHeight/3);

            this.greeting3.html("Q3. How much per month would you be willing to pay?");
            this.greeting3.position(displayWidth/2-500,displayHeight/2)

            
        });

        
        
    }
}