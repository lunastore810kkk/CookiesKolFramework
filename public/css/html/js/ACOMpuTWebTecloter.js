
 function print(printin,addstylename,addclassname,typeElement,putidlement) {
    // Create element:

    const para = document.createElement(typeElement);
    para.innerHTML = printin;
    var Couter = 0;
    Couter++
    para.setAttribute("id",`${addstylename}`)

    para.classList.add(`${addclassname}`)
   
    // Append to another element:
    document.getElementById(putidlement).appendChild(para);
    
    
} 
function Draw(printin,addstylename,addclassname,typeElement,putidlement) {
    // Create element:

    const para = document.createElement(typeElement);
    para.innerHTML = printin;
    var Couter = 0;
    Couter++
    para.setAttribute("id",`${addstylename}`)

    para.classList.add(`${addclassname}`)
   
    // Append to another element:
    document.getElementById(putidlement).appendChild(para);
    
    
} 
 var r = document;
 var onclick = document;
 var fun = function() {

};
 function printout (ele){
    console.log(ele)
}
 function printin (ele){
    printout(ele)
    console.log("comming soon")
}

function routerdom(Routername,ok) {
    var counter = 0
    counter++
    print(Routername,`Router-Dom${counter}`,`Router-Dom${counter}`,"div",ok)
    
    document.getElementById("Router-Dom1").style.top = "0px"
    setTimeout(function () {
        document.getElementById("Router-Dom1").style.top = "-500px"
    },1500)
    document.getElementById("Router-Dom1").innerHTML = Routername
    if (Routername === "undefined") {
        Routername = ""
    }
    
}

 function AlarmSet(holj) {
  print(`<div class="wrapper">
  <img id="dfsf" src="./clock.svg" alt="clock">
  <h1 id="dsffd">00:00:00 PM</h1>
  <div class="content">
    <div class="column">
      <select id="dsff">
        <option id="dfsc" value="Hour" selected disabled hidden>Hour</option>
      </select>
    </div>
    <div id="sdf" class="column">
      <select id="kolo">
        <option id="dfdfs" value="Minute" selected disabled hidden>Minute</option>
      </select>
    </div>
    <div id="lopkd" class="column">
      <select id="polim">
        <option id="kold" value="AM/PM" selected disabled hidden>AM/PM</option>
      </select>
    </div>
  </div>
  <button id="basicone">Set Alarm</button>
</div>`,"ok","jk","div",holj)
 
const currentTime = document.getElementById("dsffd"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("#basicone");

let alarmTime, isAlarmSet,
ringtone = new Audio("./ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);
 

}

function RemoveAllPrintstags() {
    setTimeout(function () {
        document.getElementById("ACOMpuTWebTecloter").style.display = "none"
    },2000)
}
function RemoveAllPrintstagsFixed() {
    setTimeout(function () {
        document.getElementById("ACOMpuTWebTecloter").style.display = "none"
    },1000)
}
function RemoveAllPrintstagsFixedAll() {
    setTimeout(function () {
        document.getElementById("ACOMpuTWebTecloter").style.display = "none"
    },500)
}
function RemoveAllPrintstagsFixedAllStrings() {
    setTimeout(function () {
        document.getElementById("ACOMpuTWebTecloter").style.display = "none"
    },100)
}
function addbrtag(place) {
    const para = document.createElement("br");
    para.innerHTML = "";
    // Append to another element:
    document.getElementById(place).appendChild(para);
}
var onClick = document;
var r = document;
function DrawCanvas(a,b,c) {
    const para = document.createElement("canvas");
    para.innerHTML = printin;
    var Couter = 0;
    Couter++
    para.setAttribute("id",`${a}`)
    para.classList.add(`${b}`)
    // Append to another element:
    document.getElementById(c).appendChild(para);
}
var color = ""
function Rect(a,b,c,d,id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
  
    context.rect(a, b, c, d); 
    context.fillStyle = color;
    context.fill();
 
    
}
function fillStyle(Fillcolor) {
    color = Fillcolor;
    console.log(color)
}

var color2 = ""
function drawline(x,y,a,b,j) {
    var canvas = document.getElementById(j);
    var context = canvas.getContext("2d");
    context.moveTo(x, y);
    context.lineTo(a, b);
    context.strokeStyle = color2
    context.stroke(); 
}

function strokeStyle(color2d) {
    color2 = color2d;
    console.log(color2d)
}

function TickScound(run,time) {
    setInterval(run,time);
}
function ReadElementGET(get,ids,classs) {
    const para2 = document.createElement("div");
    para2.innerHTML = get;
    var Couter = 0;
    Couter++
    para2.setAttribute("id",`${ids}`)

    para2.classList.add(`${classs}`)
   
    // Append to another element:
    document.getElementById("based").appendChild(para2);
    
}
function PutScript(scriptsrrc) {
    
    const para3 = document.createElement("script");
    para3.src = scriptsrrc;
    para3.crossorigin = "anonymous"
    // Append to another element:
    document.body.appendChild(para3);
}
function Putlink(linksrrc) {
    
    const para3 = document.createElement("link");
    para3.href = linksrrc;
    para3.rel = "stylesheet";
    para3.crossorigin = "anonymous"
    // Append to another element:
    document.head.appendChild(para3);
}


function GetNotification(notification,ok,icons) {
  
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
        new Notification(notification,{
            body:ok,
            icon: icons
        })
    }
    })
}

//if else condtion cookiskol


// function $Cif(cif,cifdo) {
//     cif = false
//     if (cif === true) {
//         if (cif) {
//             cifdo
            
//         }
//     }
    
    
// }




export{    
    print,
    printout, 
    printin,
    AlarmSet,
    routerdom,
    addbrtag,
    onClick,
    DrawCanvas,
    Rect,
    fillStyle,
    Draw,
    drawline,
    strokeStyle,
    TickScound,
    RemoveAllPrintstags,
    RemoveAllPrintstagsFixed,
    RemoveAllPrintstagsFixedAll,
    RemoveAllPrintstagsFixedAllStrings,
    r,
    ReadElementGET,
    PutScript,
    Putlink,
    GetNotification,
};