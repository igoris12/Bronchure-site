class CaruselInterfase {
    constructor(data) {
        this.data = data;
    };

    innerHTML() {
        const imgPath = this.data.imgPath + this.data.list.src;
        return `<div class="item">
                        <div class="bg">
                            <h3 class="title">header</h3>
                        </div>
                    </div>`
    };

}

export { CaruselInterfase };

