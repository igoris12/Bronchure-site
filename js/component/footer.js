class Footer {
    constructor(selector, data) {

        this.selector = selector;
        this.data = data;
        this.DOM = document.querySelector(this.selector)

        this.render()

    }


    render() {
        const dataList = this.data.list;
        let HTML = '';
        for (let i = 0; i < this.data.list.length; i++) {
            HTML += `<div class="item col-12 col-md-6 col-lg-4 ">
                        <i class="${this.data.imgPath + " " + dataList[i].img}" ></i>
                         <h3 class="title">${dataList[i].title}</h3>
                        <p class="description">${dataList[i].description}</p>
                    </div>`
        }

        this.DOM.innerHTML = HTML;
    }



}

export { Footer }