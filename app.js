class trackerDial {

    upPrice(delay) {
        setInterval(() => {
            this.getAPrice()
        }, delay)
    }

    async getAPrice() {
        try {
            let response = await axios.get('https://api.cryptonator.com/api/ticker/btc-eur')
            this.price = response.data.ticker.price
            let EUprice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.price);
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
        this.getAPrice()
        this.upPrice(this.delay)
        this.addLis()
    }
    id = document.querySelector(".contMain h1")
    delay = 20000


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


class init {
    static initDials() {
        this.rMainDial = new mainDial()
    }
    static priceSetter(price) {
        this.rMainDial.id.innerText = price
    }

}

init.initDials()

