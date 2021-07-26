// //Movement Animation to happen
// const card = document.querySelectorAll('.card');
// const container = document.querySelectorAll('.container');
// //Items
// const sneaker = document.querySelectorAll('.skills_img img');
// const description = document.querySelectorAll('.skills_info p');
// 
// 
// //Moving Animation Event
// container.forEach(item => {
//     item.addEventListener('mousemove', (e) => {
//         let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//         let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//         card.forEach(item => { item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` });
//     })
// });
// 
// 
// //Animate In
// container.forEach(item => {
//     item.addEventListener("mouseenter", (e) => {
//         card.forEach(item => { item.style.transition = "none" });
//         //Popout
//         sneaker.forEach(item => { item.style.transform = "translateZ(200px) rotateZ(-15deg)" });
//     })
// });
// 
// 
// //Animate Out
// container.forEach(item => {
//     item.addEventListener("mouseleave", (e) => {
//         card.forEach(item => { item.style.transition = "all 0.5s ease" });
//         card.forEach(item => { item.style.transform = `rotateY(0deg) rotateX(0deg)` });
//         //Popback
//         sneaker.forEach(item => { item.style.transform = "translateZ(0px) rotateZ(0deg)" });
//     })
// });


// //Movement Animation to happen
// const card = document.querySelectorAll('.card');
// const container = document.querySelectorAll('.container');
// //Items
// const sneaker = document.querySelectorAll('.skills_img img');
// const description = document.querySelectorAll('.skills_info p');
// 
// 
// //Moving Animation Event
// container.forEach(item => {
//     item.addEventListener('mousemove', (e) => {
//         let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//         let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//         card.forEach(item => { item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` });
//     })
// });
// 
// 
// //Animate In
// container.forEach(item => {
//     item.addEventListener("mouseenter", (e) => {
//         card.forEach(item => { item.style.transition = "none" });
//         //Popout
//         sneaker.forEach(item => { item.style.transform = "translateZ(200px) rotateZ(-45deg)" });
//         description.forEach(item => { item.style.transform = "translateZ(125px)" });
//     })
// });
// 
// 
// //Animate Out
// container.forEach(item => {
//     item.addEventListener("mouseleave", (e) => {
//         card.forEach(item => { item.style.transition = "all 0.5s ease" });
//         card.forEach(item => { item.style.transform = `rotateY(0deg) rotateX(0deg)` });
//         //Popback
//         sneaker.forEach(item => { item.style.transform = "translateZ(0px) rotateZ(0deg)" });
//         description.forEach(item => { item.style.transform = "translateZ(0px)" });
//     })
// });
// 


var x = screen.width;
if (x > 1200) { //Movement Animation to happen
    const card1 = document.querySelector('.card1');
    const container1 = document.querySelector('.container1');
    //Items
    const photo1 = document.querySelector('.imgs1');


    //Moving Animation Event
    container1.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container1.addEventListener("mouseenter", (e) => {
        card1.style.transition = "none";
        //Popout
        photo1.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container1.addEventListener("mouseleave", (e) => {
        card1.style.transition = "all 0.5s ease";
        card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        photo1.style.transform = "translateZ(0px) rotateZ(0deg)";
    });



    const card2 = document.querySelector('.card2');
    const container2 = document.querySelector('.container2');
    //Items
    const photo2 = document.querySelector('.imgs2');


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
        photo2.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container2.addEventListener("mouseleave", (e) => {
        card2.style.transition = "all 0.5s ease";
        card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        photo2.style.transform = "translateZ(0px) rotateZ(0deg)";
    });


    const card3 = document.querySelector('.card3');
    const container3 = document.querySelector('.container3');
    //Items
    const photo3 = document.querySelector('.imgs3');


    //Moving Animation Event
    container3.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container3.addEventListener("mouseenter", (e) => {
        card3.style.transition = "none";
        //Popout
        photo3.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container3.addEventListener("mouseleave", (e) => {
        card3.style.transition = "all 0.5s ease";
        card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        photo3.style.transform = "translateZ(0px) rotateZ(0deg)";
    });


    const card4 = document.querySelector('.card4');
    const container4 = document.querySelector('.container4');
    //Items
    const photo4 = document.querySelector('.imgs4');


    //Moving Animation Event
    container4.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container4.addEventListener("mouseenter", (e) => {
        card4.style.transition = "none";
        //Popout
        photo4.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container4.addEventListener("mouseleave", (e) => {
        card4.style.transition = "all 0.5s ease";
        card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        photo4.style.transform = "translateZ(0px) rotateZ(0deg)";
    });


    const card5 = document.querySelector('.card5');
    const container5 = document.querySelector('.container5');
    //Items
    const photo5 = document.querySelector('.imgs5');


    //Moving Animation Event
    container5.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card5.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container5.addEventListener("mouseenter", (e) => {
        card5.style.transition = "none";
        //Popout
        photo5.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container5.addEventListener("mouseleave", (e) => {
        card5.style.transition = "all 0.5s ease";
        card5.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        photo5.style.transform = "translateZ(0px) rotateZ(0deg)";
    });


    const card6 = document.querySelector('.card6');
    const container6 = document.querySelector('.container6');
    //Items
    const photo6 = document.querySelector('.imgs6');


    //Moving Animation Event
    container6.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card6.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container6.addEventListener("mouseenter", (e) => {
        card6.style.transition = "none";
        //Popout
        photo6.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container6.addEventListener("mouseleave", (e) => {
        card6.style.transition = "all 0.5s ease";
        card6.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        photo6.style.transform = "translateZ(0px) rotateZ(0deg)";
    });

}