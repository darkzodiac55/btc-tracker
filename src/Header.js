import init from "./init";

export class Header {
    constructor() {
        this.addLisCur()
        this.addLisCry()
    }
    btnCur = document.querySelector(".currency")
    addLisCur() {
        this.btnCur.addEventListener('click', () => {
            /* console.log(this.btnCur.innerText); */
            init.currencySetter()
        })
    }
    btnsCry = document.querySelector(".cryptos")
    addLisCry() {
        this.btnsCry.addEventListener('click', (e) => {
            let spans = e.currentTarget.children;
            for (const span of spans) {
                span.classList.remove('selected')
            }
            e.target.classList.add('selected')
            init.cryptoSetter(e.target.innerText.toLowerCase())
        })
    }

}