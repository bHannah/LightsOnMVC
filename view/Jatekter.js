import Lampa from "./Lampa.js";

export default class Jatekter{
    //adattagok
    #lista = []
    #szuloElem
    //konstruktor
    constructor(lista, szuloElem){
        this.init(lista, szuloElem);
    }
    
    init(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.kiir()
    }
    //tagfüggvények
    kiir() {
        this.#lista.forEach((elem, index) => {
            new Lampa(this.#lista, elem, index, this.#szuloElem);
        })
    }

    nyertesKiir(){
        const nyertesElem = $(".nyertes")
        nyertesElem.append("Gratulálunk, nyertél!")
    }
}