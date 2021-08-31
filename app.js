class trackerDial  {
    
    price = 0

    getPrice () {
        this.price = 40000
    }

    upPrice (delay) {
        setInterval(()=>{
            this.price += 5
            this.id.innerText = this.price
        },delay)
    }
}

class mainDial extends trackerDial{
    constructor() {
        super()
        this.getPrice()
        this.upPrice(2000)
    }
    id = document.querySelector(".contMain h1")
    delay = 2000
}

class init {
    static initDials() {
    this.rMainDial = new mainDial()
    }
}

init.initDials()
