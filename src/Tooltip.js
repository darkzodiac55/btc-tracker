export class Tooltip {
    constructor() {
        this.addLisCloser()
    }
    id = document.querySelector('.contSecond')
    closer = document.querySelector('.closer')
    addLisCloser() {
        this.closer.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.remove('visible')
        })
    }
    appear() {
        if (!localStorage.tooltip) {
            setTimeout(() => {
                this.id.classList.add('visible')
                localStorage.setItem('tooltip', 'displayed')
            }, 2000)
        }

    }
}