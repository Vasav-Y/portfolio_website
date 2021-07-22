//Movement Animation to happen
const card = document.querySelectorAll('.card');
const container = document.querySelectorAll('.container');
//Items
const sneaker = document.querySelectorAll('.skills_img img');
const description = document.querySelectorAll('.skills_info p');


//Moving Animation Event
container.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.forEach(item => { item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` });
    })
});


//Animate In
container.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        card.forEach(item => { item.style.transition = "none" });
        //Popout
        sneaker.forEach(item => { item.style.transform = "translateZ(200px) rotateZ(-15deg)" });
        description.forEach(item => { item.style.transform = "translateZ(125px)" });
    })
});


//Animate Out
container.forEach(item => {
    item.addEventListener("mouseleave", (e) => {
        card.forEach(item => { item.style.transition = "all 0.5s ease" });
        card.forEach(item => { item.style.transform = `rotateY(0deg) rotateX(0deg)` });
        //Popback
        sneaker.forEach(item => { item.style.transform = "translateZ(0px) rotateZ(0deg)" });
        description.forEach(item => { item.style.transform = "translateZ(0px)" });
    })
});


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
// //Movement Animation to happen
// const card = document.querySelectorAll('.card');
// const container = document.querySelectorAll('.container');
// //Items
// const sneaker = document.querySelectorAll('.skills_img img');
// const description = document.querySelectorAll('.skills_info p');
// 
// 
// //Moving Animation Event
// container.addEventListener('mousemove', (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// container.addEventListener("mouseenter", (e) => {
//     card.style.transition = "none";
//     //Popout
//     sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
//     description.style.transform = "translateZ(125px)";
// });
// //Animate Out
// container.addEventListener("mouseleave", (e) => {
//     card.style.transition = "all 0.5s ease";
//     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     //Popback
//     sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
//     description.style.transform = "translateZ(0px)";
// });