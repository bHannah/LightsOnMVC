export default class Modell{
    //adattagok
    #Lista = []
    #Nyert

    //constructor
    constructor(){
        this.getLista();
        this.feltoltes();
        console.log(this.#Lista)
        this.#Nyert = false;
    }

    //tagfgv-k
    feltoltes(){
        for (let i = 0; i < 9; i++) {
            let randomszam = Math.floor(Math.random()*100)+1;
            if(randomszam < 31){
                this.#Lista[i] = true;
            }
            else{
                this.#Lista[i] = false;
            }
            
        }
    }

    kornyezoElemek(i){
        console.log(i)

        if((i+1)%3==0){
                this.setListaELem(i-1)
                if(i<6){
                    this.setListaELem(i+3)
                }
                if(i>3){
                    this.setListaELem(i-3)
                }
        }else if(i%3==0){
            this.setListaELem(i+1)
                this.setListaELem(i-3)
                if(i<6){
                    this.setListaELem(i+3)
                }
        }else{
            if(i>0){
                this.setListaELem(i-1)
            }
            if(i<8){
                this.setListaELem(i+1)
            }
            if(i>3){
                this.setListaELem(i-3)
            }
            if(i<6){
                this.setListaELem(i+3)
            }
        }
    }

    setListaELem(i){
        if(this.#Lista[i] === true){
            this.#Lista[i] = false;
        }
        else{
            this.#Lista[i] = true;
        }
    }

    getLista(){
        return this.#Lista;
    }

    ellenorzes(){
        var i =0;
        while(this.#Lista[i]){
            i++
        }
        this.#Nyert= i>=8
    }

    getNyert(){
        return this.#Nyert
    }
}