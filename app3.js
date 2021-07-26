var x = screen.width;
if (x > 1200) {
    //Movement Animation to happen
    const card = document.querySelector('.workcard1');
    const container = document.querySelector('.workCont1');
    //Items



    //Moving Animation Event
    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
        card.style.transition = "none";
        //Popout

    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback

    });

    //Movement Animation to happen
    const card2 = document.querySelector('.workcard2');
    const container2 = document.querySelector('.workCont2');
    //Items



    //Moving Animation Event
    container2.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container2.addEventListener("mouseenter", (e) => {
        card2.style.transition = "none";
        //Popout

    });
    //Animate Out
    container2.addEventListener("mouseleave", (e) => {
        card2.style.transition = "all 0.5s ease";
        card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback

    });

}