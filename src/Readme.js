export default class ReadmePopup {
    constructor() {

        this.addLis()
    }
    popup = document.querySelector('#readme')

    addLis() {
        this.popup.children[0].addEventListener('click',(e)=>{
            this.popup.classList.add('hidden')
        })
    }
}