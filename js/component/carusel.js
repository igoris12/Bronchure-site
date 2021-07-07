class Carusel {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;
        this.listDOM = null;
        this.leftArrow = null;
        this.rightArrow = null;
        this.itemsInScrean = 1;
        this.animationInProgress = false;
        this.animationDuration = 1000;
        this.visibleItemIndex = 0;

        this.init()


    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.data.itemsInScrean = this.data.itemsInScrean.sort((a, b) => a.minWidth - b.minWidth);
        this.itemsInScrean = this.calcTmensPerWiewValue();
        this.visibleItemIndex = this.itemsInScrean;
        this.render(this.itemsInScrean);
        this.addEvant();


    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    generateItems(data) {
        const itemsCount = data.length;
        const itmeWidth = 100 / itemsCount;

        let HTML = '';

        for (let i = 0; i < itemsCount; i++) {
            const obj = new this.component({
                ...data[i],
                imgPath: this.data.imgPath
            });
            HTML += `<div class="item" style="width: ${itmeWidth}%; background-image: url(${this.data.imgPath + obj.data.src});">
            ${obj.learnHTML()}
            </div>`
        }

        return HTML;
    }

    render(itemsInScrean) {

        const clonedData = [
            ...this.data.list.slice(-itemsInScrean),
            ...this.data.list,
            ...this.data.list.slice(0, itemsInScrean)
        ];


        const itemsCount = clonedData.length;
        const listWidth = itemsCount / itemsInScrean * 100;
        const translate = itemsInScrean / clonedData.length * 100;



        const HTML = `   <div class="row">
            <div class="header col-12 col-md-7">
                <h2>What we are offering</h2>
            </div>
            <div class="col-12 col-md-5 buttons">
                <button class="leftArrw fa fa-angle-left"></button>
                <button class="rightArrw fa fa-angle-right"></button>
            </div>
                            <div class="gallery">
                                    <div class="list" style="width: ${listWidth}%;);">
                                         ${this.generateItems(clonedData)}
                                    </div>
                        </div>
                            
                           `

        this.DOM.innerHTML = HTML;
        this.listDOM = this.DOM.querySelector('.list');
        this.leftArrow = this.DOM.querySelector('.leftArrw')
        this.rightArrow = this.DOM.querySelector('.rightArrw')


    }

    calcTmensPerWiewValue() {
        const resposive = this.data.itemsInScrean;

        let itemsToRender = 1;

        for (let i = 0; i < resposive.length; i++) {
            if (innerWidth > resposive[i].minWidth) {
                itemsToRender = resposive[i].itemsNumber;
            }
        }

        return itemsToRender;
    }

    carouselAnimarion() {
        const transalte = this.visibleItemIndex / (this.data.list.length + 2 * this.itemsInScrean) * 100;
        this.listDOM.style.transform = `translateX(-${transalte}%)`;
    }

    addEvant() {

        window.addEventListener('resize', () => {

            const itemsToRender = this.calcTmensPerWiewValue();
            if (this.itemsInScrean !== itemsToRender) {
                this.render(itemsToRender)
                this.itemsInScrean = itemsToRender;
            }
        })

        this.rightArrow.addEventListener('click', () => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex++;
                this.carouselAnimarion();
                if (this.data.list.length + this.itemsInScrean === this.visibleItemIndex) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.itemsInScrean;
                        this.carouselAnimarion();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 20);
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        });



        this.leftArrow.addEventListener('click', () => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex--;
                this.carouselAnimarion();
                if (this.visibleItemIndex === 0) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.data.list.length;
                        this.carouselAnimarion();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 20);
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        });

        setInterval(() => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex++;
                this.carouselAnimarion();
                if (this.data.list.length + this.itemsInScrean === this.visibleItemIndex) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.itemsInScrean;
                        this.carouselAnimarion();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 20);
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        }, 4000)


    }
    //  Options

}
export { Carusel }