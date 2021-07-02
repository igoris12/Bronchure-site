class Carusel {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        this.findSelsector();
    }

    findSelsector() {
        this.DOM = document.querySelector(this.selector)
    }


}

export { Carusel }