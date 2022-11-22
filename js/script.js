const bigcircle = document.querySelector(".bigcircle"), image = document.querySelector(".image"), smallcircle = document.querySelector(".smallcircle"), container = document.querySelector(".container");

if (window.innerWidth > 1000) {
    container.addEventListener("mousemove", () => {
        let x = (event.clientX - (window.innerWidth/2));
        bigcircle.style.transform = `translate3D(${x/50}px, 0, 0)`;
        image.style.transform = `translate3D(${-x/35}px, 0, 0)`;
        smallcircle.style.transform = `translate3D(${-x/8}px, 0, 0)`;
    });
}