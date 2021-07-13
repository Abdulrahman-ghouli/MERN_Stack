class Ninja {
    constructor(name, health){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = health;

    }
   sayName(){
       console.log(this.name);
   }
   showstate(){
     console.log(this.name+" "+ this.health + " "+ this.speed +" "+ this.strength );
   }
   drinkSake(){
       this.health+=10;
       console.log(this.health);
   }

}
const ninja1 = new Ninja ("hyaus",100);
ninja1.sayName();
ninja1.showstate();
ninja1.drinkSake();


class Sensi extends Ninja {
    constructor(name,){
        super(name,200)
        this.wisdom  = 10;
        this.strength = 10;
        this.speed = 10;
    }
    speakWisdom(){
        const msg = super.drinkSake();
        console.log(this.wisdom);

    }
    drinkSake(){
        this.health+=10;
        console.log(this.health);
    }

}

