const container = document.querySelector(".container");


  // const rands = Math.floor(Math.random()* 5);
  // console.log(rands);
  


const hecking = async () => {
  setTimeout(() => {
    let first = document.createElement("div");
    first.setAttribute("id", "blink");
    first.innerHTML = "initializing hacking <strong>. . . . . . .</strong> ";
    container.appendChild(first);
    first.rands
  }, 0);
  setTimeout(() => {
    let first = document.createElement("div");
    first.setAttribute("id", "blink");
    first.innerHTML = "reading your files <strong>. . . . . . .</strong> ";
    container.appendChild(first);
  }, 2000);
  setTimeout(() => {
    let first = document.createElement("div");
    first.setAttribute("id", "blink");
    first.innerHTML = "password files decteded <strong>. . . . . . .</strong> ";
    container.appendChild(first);
  }, 4000);
  setTimeout(() => {
    let first = document.createElement("div");
    first.setAttribute("id", "blink");
    first.innerHTML = "sending all passwords and personal files to server <strong>. . . . . . .</strong> ";
    container.appendChild(first);
  }, 6000);
  setTimeout(() => {
    let first = document.createElement("div");
    first.setAttribute("id", "blink");
    first.innerHTML = "cleaning up <strong>. . . . . . .</strong> ";
    container.appendChild(first);
  }, 8000);
};
