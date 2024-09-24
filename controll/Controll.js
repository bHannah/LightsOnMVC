import Modell from "../modell/Modell.js"
import Jatekter from "../view/Jatekter.js" 

export default class Controll{
    constructor(){
        this.jatekter=$(".jatekter")
        this.model = new Modell()
        this.jatek = new Jatekter(this.model.getLista(), this.jatekter)
        this.#esemenykezelo();
        }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            this.model.setListaELem(event.detail);
            this.model.kornyezoElemek(event.detail);
            this.jatek.init(this.model.getLista(), this.jatekter);
            this.model.ellenorzes()
            if(this.model.getNyert()){
                this.jatek.nyertesKiir();
            }
        });
    }

    
}