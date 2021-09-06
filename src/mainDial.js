import { trackerDial } from "./trackerDial";
import init from "./init";


export class mainDial extends trackerDial {        //////can potentially add individual "Dials" for each currency/per various days
    constructor() {
        super()
        /* this.storedCurrency() */
        /* this.getAPrice('btc', this.cur) */
        this.upPrice(this.delay)

    }
    id = document.querySelector(".contMain h1")
    
    storedCurrency() {
        if (localStorage.currency) {
            this.cur = localStorage.getItem('currency')
            init.buttonChanger(this.cur)
        }
    }
    storedCrypto() {
        if (localStorage.crypto) {
            this.cry = localStorage.getItem('crypto')
            init.cryptoBtnChanger(this.cry)
        }
    }
    cur = 'eur'
    cry = 'btc'
    delay = 20000

}