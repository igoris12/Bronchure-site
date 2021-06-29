function disctioptionAnimatoin() {
    const container1 = document.querySelector('.workProcess .cont1');
    const container2 = document.querySelector('.workProcess .cont2');
    const container3 = document.querySelector('.workProcess .cont3');

    const tagleElement1 = document.querySelector('.back .discription1');
    const tagleElement2 = document.querySelector('.back .discription2');
    const tagleElement3 = document.querySelector('.back .discription3');

    //header
    const moverHeader1 = document.querySelector('.workProcess .header1');
    const moverHeader2 = document.querySelector('.workProcess .header2');
    const moverHeader3 = document.querySelector('.workProcess .header3');

    container1.addEventListener("mouseout", function () {
        tagleElement1.style.transform = "translateX(400px)";
        moverHeader1.style.transform = "translateY(60px)"
    });
    container1.addEventListener("mouseover", function () {
        tagleElement1.style.transform = "translateX(0)";
        moverHeader1.style.transform = "translateY(0px)"
    });
    container2.addEventListener("mouseout", function () {
        tagleElement2.style.transform = "translateX(400px)";
        moverHeader2.style.transform = "translateY(60px)"
    });
    container2.addEventListener("mouseover", function () {
        tagleElement2.style.transform = "translateX(0)";
        moverHeader2.style.transform = "translateY(0)"
    });
    container3.addEventListener("mouseout", function () {
        tagleElement3.style.transform = "translateX(400px)";
        moverHeader3.style.transform = "translateY(60px)"
    });
    container3.addEventListener("mouseover", function () {
        tagleElement3.style.transform = "translateX(0)";
        moverHeader3.style.transform = "translateY(0)"
    });
}


export { disctioptionAnimatoin }