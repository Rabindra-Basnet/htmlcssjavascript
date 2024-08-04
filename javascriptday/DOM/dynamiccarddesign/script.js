function createCard(title, cName, views, monthold, duration, thumbnail) {
  let viewStr;
  if (views < 1000000) {
    viewStr = views / 1000 + "K";
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }
  let html = `<div class="card">
  <div class="image">
    <img src="${thumbnail}" alt="">
     <div class="capsule">${duration}</div>
  </div>
  <div class="txt">
    <h1>${title}</h1>
    <p>${cName} . ${viewStr} views . ${monthold} months ago</p>
  </div>
</div>`;
  setInterval(() => {
    document.querySelector(".container").innerHTML =
      document.querySelector(".container").innerHTML + html;
  }, 1000);
}

let create =  createCard(
  "Introduction to Backend | Sigma Development Course `${num}`",
  "CodeWithHarry",
  560000,
  2,
  "31:61",
  "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g"
);
