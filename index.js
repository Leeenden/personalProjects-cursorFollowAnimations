/* ========================================================================= */
/* =========== un-comment the relevant code blocks from below ============== */
/* ========================================================================= */

// ======================== 
// #bubble animation script 
// ========================
document.addEventListener("mousemove", function(e){
    let body = document.querySelector("body");
    let bubble = document.createElement("span");
    let x = e.offsetX;
    let y = e.offsetY;
    bubble.style.left = x+"px";
    bubble.style.top = y+"px";

    let size = Math.random() * 80;
    bubble.style.width = 20 + size+"px";
    bubble.style.height = 20 + size+"px";

    let transformValue = Math.random() * 360;
    bubble.style.transform = "rotate("+ transformValue +"deg)";
    body.appendChild(bubble);

    setTimeout(function(){
        bubble.remove();
    },1000)

});

// ======================== 
// #earth animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let earth = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     earth.style.left = x+"px";
//     earth.style.top = y+"px";

//     let size = Math.random() * 80;
//     earth.style.width = 20 + size+"px";
//     earth.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     earth.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(earth);

//     setTimeout(function(){
//         earth.remove();
//     },1000)

// });

/* ======================== 
// #fireball animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let fireball = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     fireball.style.left = x+"px";
//     fireball.style.top = y+"px";

//     let size = Math.random() * 80;
//     fireball.style.width = 20 + size+"px";
//     fireball.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     fireball.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(fireball);

//     setTimeout(function(){
//         fireball.remove();
//     },1000)

// });

// ========================
// #heart animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let heart = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     heart.style.left = x+"px";
//     heart.style.top = y+"px";

//     let size = Math.random() * 80;
//     heart.style.width = 20 + size+"px";
//     heart.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     heart.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(heart);

//     setTimeout(function(){
//         heart.remove();
//     },1000)

// });

/* ======================== 
// #leaf animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let leaf = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     leaf.style.left = x+"px";
//     leaf.style.top = y+"px";

//     let size = Math.random() * 80;
//     leaf.style.width = 20 + size+"px";
//     leaf.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     leaf.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(leaf);

//     setTimeout(function(){
//         leaf.remove();
//     },1000)

// });

/* ======================== 
// #moon animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let moon = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     moon.style.left = x+"px";
//     moon.style.top = y+"px";

//     let size = Math.random() * 80;
//     moon.style.width = 20 + size+"px";
//     moon.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     moon.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(moon);

//     setTimeout(function(){
//         moon.remove();
//     },1000)

// });

/* ======================== 
// #pokeball animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let pokeball = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     pokeball.style.left = x+"px";
//     pokeball.style.top = y+"px";

//     let size = Math.random() * 80;
//     pokeball.style.width = 20 + size+"px";
//     pokeball.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     pokeball.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(pokeball);

//     setTimeout(function(){
//         pokeball.remove();
//     },1000)
// });

/* ======================== */
// #snowflake animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let snowflake = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     snowflake.style.left = x+"px";
//     snowflake.style.top = y+"px";

//     let size = Math.random() * 80;
//     snowflake.style.width = 20 + size+"px";
//     snowflake.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     snowflake.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(snowflake);

//     setTimeout(function(){
//         snowflake.remove();
//     },1000)
// });

/* ======================== */
// #wheel animation script
// ========================
// document.addEventListener("mousemove", function(e){
//     let body = document.querySelector("body");
//     let wheel = document.createElement("span");
//     let x = e.offsetX;
//     let y = e.offsetY;
//     wheel.style.left = x+"px";
//     wheel.style.top = y+"px";

//     let size = Math.random() * 80;
//     wheel.style.width = 20 + size+"px";
//     wheel.style.height = 20 + size+"px";

//     let transformValue = Math.random() * 360;
//     wheel.style.transform = "rotate("+ transformValue +"deg)";
//     body.appendChild(wheel);

//     setTimeout(function(){
//         wheel.remove();
//     },1000)

// });