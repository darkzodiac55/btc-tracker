class trackerDial {

    upPrice(delay) {
        setInterval(() => {
            this.getAPrice(this.cry, this.cur)
        }, delay)
    }

    async getAPrice(cry,cur) {
        try {
            let response = await axios.get(`https://api.cryptonator.com/api/ticker/${cry}-${cur}`)
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
        /* this.storedCurrency() */
        this.getAPrice('btc', this.cur)
        this.upPrice(this.delay)
        
    }
    id = document.querySelector(".contMain h1")
    delay = 2000000
    /* storedCurrency() {
        if (localStorage.currency) {
            console.log(localStorage.getItem('currency'));
            this.cur = localStorage.getItem('currency')
            init.buttonChanger(this.cur)
        }
    } */
    cur = 'eur'
    cry = 'btc'

}

class Header {
    constructor() {
        this.addLisCur()
        this.addLisCry()
    }
    btnCur = document.querySelector(".currency")
    addLisCur() {
        this.btnCur.addEventListener('click', ()=>{
            /* console.log(this.btnCur.innerText); */
            init.currencySetter()
        })
    }
    btnsCry = document.querySelector(".cryptos")
    addLisCry() {
        this.btnsCry.addEventListener('click', (e)=>{
            let spans = e.currentTarget.children;
            for (const span of spans) {
                span.classList.remove('selected')
            }
            e.target.classList.add('selected')
            init.cryptoSetter(e.target.innerText.toLowerCase())
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
        console.log(localStorage.currency);
    }
    static cryptoSetter(selectedCry) {
        this.rMainDial.cry = selectedCry
        this.rMainDial.getAPrice(this.rMainDial.cry, this.rMainDial.cur)
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

}

init.initHeader()
init.initDials()


