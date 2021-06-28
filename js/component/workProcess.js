function disctioptionAnimatoin() {
    const container1 = document.querySelector('.workProcess .cont1');
    const container2 = document.querySelector('.workProcess .cont2');
    const container3 = document.querySelector('.workProcess .cont3');

    const tagleElement1 = document.querySelector('.back .discription1');
    const tagleElement2 = document.querySelector('.back .discription2');
    const tagleElement3 = document.querySelector('.back .discription3');

    container1.addEventListener("mouseout", function () {
        tagleElement1.style.transform = "translateX(400px)";
    });
    container1.addEventListener("mouseover", function () {
        tagleElement1.style.transform = "translateX(0)";
    });
    container2.addEventListener("mouseout", function () {
        tagleElement2.style.transform = "translateX(400px)";
    });
    container2.addEventListener("mouseover", function () {
        tagleElement2.style.transform = "translateX(0)";
    });
    container3.addEventListener("mouseout", function () {
        tagleElement3.style.transform = "translateX(400px)";
    });
    container3.addEventListener("mouseover", function () {
        tagleElement3.style.transform = "translateX(0)";
    });
}


export { disctioptionAnimatoin }