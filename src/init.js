import { Header } from "./Header";
import { mainDial } from "./mainDial";
import { Tooltip } from "./Tooltip";
import ReadmePopup from "./Readme";

export default class init {
    static initDials() {
        this.rMainDial = new mainDial()
    }
    static initHeader() {
        this.header = new Header()
    }
    static initTooltip() {
        this.tooltip = new Tooltip()
    }
    static initReadme() {
        this.readme = new ReadmePopup()
    }
    static priceSetter(price) {
        this.rMainDial.id.innerText = price
    }
    static currencySetter() {
        if (this.header.btnCur.innerText === 'USD') {
            this.rMainDial.cur = 'usd'
            this.rMainDial.getAPrice(this.rMainDial.cry, 'usd')
            this.header.btnCur.innerText = 'EUR'
        } else {
            this.rMainDial.cur = 'eur'
            this.rMainDial.getAPrice(this.rMainDial.cry, 'eur')
            this.header.btnCur.innerText = 'USD'
        }
        localStorage.setItem('currency', this.rMainDial.cur)
    }
    static cryptoSetter(selectedCry) {
        this.rMainDial.cry = selectedCry
        this.rMainDial.getAPrice(this.rMainDial.cry, this.rMainDial.cur)
        localStorage.setItem('crypto', this.rMainDial.cry)
    }
    static buttonChanger(cur) {
        let oppositeCur
        if (cur === 'eur') {
            oppositeCur = 'usd'
        } else {
            oppositeCur = 'eur'
        }
        this.header.btnCur.innerText = oppositeCur.toUpperCase()
    }
    static cryptoBtnChanger(cry) {
        let spans = this.header.btnsCry.children;
        for (const span of spans) {
            span.classList.remove('selected')
            if (span.innerText === cry.toUpperCase()) {
                span.classList.add('selected')
            }
        }
        
    }
    static addLoadLis() {
        document.addEventListener("DOMContentLoaded", () => {
            this.rMainDial.storedCurrency()
            this.rMainDial.storedCrypto()
            this.tooltip.appear()
            this.rMainDial.getAPrice(this.rMainDial.cry, this.rMainDial.cur)
        });
    }

}