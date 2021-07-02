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
        this.gnerateItems()
        this.render();
    }

    findSelsector() {
        this.DOM = document.querySelector(this.selector)
    }

    gnerateItems() {
        const itemsCount = data.length;
        const itmeWidth = 100 / itemsCount;
        let HTML = '';

        for (let i = 0; i < itemsCount; i++) {
            const obj = new this.component({
                ...data[i],
                imgPath: this.data.imgPath

            }); console.log(obj);

        }
    }

    render() {
        const HTML = `<div class="row">
                            <div class="header col-12 col-md-7">
                                 <h2> My work in progress</h2>
                            </div>
                            <div class="col-12 col-md-5 buttons">
                                <button class="leftArrw fa fa-angle-left"></button>
                                 <button class="rightArrw fa fa-angle-right"></button>
                            </div>
                            <div class="caruselContainer">
                                <div class="gallery">
                                    <div class="item">
                                        <div class="bg">
                                            <h3 class="title">header</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>`
    }


}


export { Carusel }