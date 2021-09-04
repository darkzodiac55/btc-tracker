class trackerDial {

    upPrice(delay) {
        setInterval(() => {
            this.getAPrice(this.cur)
        }, delay)
    }

    async getAPrice(cur) {
        try {
            let response = await axios.get(`https://api.cryptonator.com/api/ticker/btc-${cur}`)
            this.price = response.data.ticker.price
            let EUprice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: `${cur}` }).format(this.price);
            this.addLis(EUprice)

        } catch (error) {
            console.error(error);
        }
    }
    addLis(price) {

        this.id.classList.remove("fade"); // removing the class
        setTimeout(() => {
            requestAnimationFrame(() => {
                // We are manually adding new content and adding class again to node
                init.priceSetter(price)
                this.id.classList.add("fade");
            });
        }, 700); // timeout


    }
}

class mainDial extends trackerDial {        //////can potentially add individual "Dials" for each currency/per various days
    constructor() {
        super()
        this.getAPrice('eur')
        this.upPrice(this.delay)
        
    }
    id = document.querySelector(".contMain h1")
    delay = 2000000
    cur = 'eur'

}

class Header {
    constructor() {
        this.addLisCur()
    }
    btnCur = document.querySelector(".currency")
    addLisCur() {
        this.btnCur.addEventListener('click', ()=>{
            init.currencySetter('usd')
        })
    }

}

/* function toggleTransitionWithTimeout() {
    $text1.classList.remove("fade"); // removing the class
    setTimeout(() => {
        requestAnimationFrame(() => {
            // We are manually adding new content and adding class again to node
            $text1.innerHTML = content;
            $text1.classList.add("fade");
        });
    }, 225); // timeout
} */

//////////////////currency selectable

class DOMhelper {
    
}

class init {
    static initDials() {
        this.rMainDial = new mainDial()
    }
    static initHeader() {
        this.header = new Header()
    }
    static priceSetter(price) {
        this.rMainDial.id.innerText = price
    }
    static currencySetter(cur) {
        this.rMainDial.cur = cur
        this.rMainDial.getAPrice(cur)
    }

}

init.initDials()
init.initHeader()

