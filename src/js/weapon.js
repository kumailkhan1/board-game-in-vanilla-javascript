export default class Weapon{
    name = ["dagger","pistol","rocket","grenade"];
    damage;
    imageSrc;
    constructor(name,imageSrc){
        if (name === "dagger"){
            this.name = name;
            this.damage = 10;
            this.imageSrc = imageSrc;
        }
        
        if (name === "pistol"){
            this.name = name;
            this.damage = 15;
            this.imageSrc = imageSrc;
        }
        if (name === "rocket"){
            this.name = name;
            this.damage = 35;
            this.imageSrc = imageSrc;
        }
        if (name === "grenade"){
            this.name = name;
            this.damage = 20;
            this.imageSrc = imageSrc;
        }

    }

    
}
