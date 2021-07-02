class CaruselInterfase {
    constructor(data) {
        this.data = data;
    };

    innerHTML() {
        const imgPath = this.data.imgPath + this.data.list.src;
        return `CONTENT`
    };

}

export { CaruselInterfase };

