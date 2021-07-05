class CaruselInterfase {
    constructor(data) {
        this.data = data;
    }

    learnHTML() {
        const imgPath = this.data.imgPath + this.data.img
        return `
                        <div class="bg">
                            <h3 class="title">${this.data.title}</h3>
                        </div>
                    `
    }

}

export { CaruselInterfase };

