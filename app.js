class trackerDial  {
    
    price = 0

    getPrice () {
        this.price = 40000
    }

    /* upPrice (delay) {
        setInterval(()=>{
            this.price += 5
            this.id.innerText = this.price
        },delay)
    } */
}

class mainDial extends trackerDial{
    constructor() {
        super()
        this.getPrice()
        /* this.upPrice(2000) */
    }
    id = document.querySelector(".contMain h1")
    delay = 2000
}

//////////////////currency selectable

class init {
    static initDials() {
    this.rMainDial = new mainDial()
    }

    static async getAPrice() {
        try {
            let response = await axios.get('https://api.cryptonator.com/api/ticker/btc-eur')
            let price = response.data.ticker.price
            let EUprice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
            console.log(typeof EUprice);
            this.rMainDial.id.innerText = EUprice
        } catch (error) {
            console.error(error);
        }
    }
}

init.initDials()
init.getAPrice()
