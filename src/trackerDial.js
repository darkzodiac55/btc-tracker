import init from "./init";
const axios = require('axios'); /////import axios from 'axios' --- difference??

export class trackerDial {

    upPrice(delay) {
        setInterval(() => {
            this.getAPrice(this.cry, this.cur)
        }, delay)
    }

    async getAPrice(cry, cur) {
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