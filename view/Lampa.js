export default class Lampa {
    //adattagok
    #lepes = {}
    #index
    //konstruktor
    constructor(lista, lepes, index, szuloElem){
        this.#lepes=lepes
        this.#index=index
        this.szuloElem = szuloElem
        this.lampaMegjelenit(lista)
        this.kattintottElem = $(".kor:last-child")
        this.esemenyKezelo()
    }
    //tagfüggvények
    lampaMegjelenit(lista){
        let txt = "";
        if(lista[this.#index]===true){
            txt += `<div class="kor felkapcsolva"></div>`
        }else{
            txt += `<div class="kor lekapcsolva"></div>`
        }
        this.szuloElem.append(txt)
    }

    esemenyKezelo(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail: this.#index})
            window.dispatchEvent(e)
        })
    }
}