console.log("Dynamic card design is initializing.......");
let displayviews = document.createElement("div");
  displayviews.setAttribute("class", "views");
  displayviews.setAttribute("id", "yt-views");
  document.querySelector(".container").append(displayviews);

  title = document.createElement("div");
  title.setAttribute("class", "title");
  title.setAttribute("id", "titles");
  document.querySelector(".container").append(title);

  cName = document.createElement("div");
  cName.setAttribute("class", "cName");
  cName.setAttribute("id", "yt-name");
  document.querySelector(".container").append(cName);

  date = document.createElement("div");
  date.setAttribute("class", "date");
  date.setAttribute("id", "yt-upload-date");
  document.querySelector(".container").append(date);

  duration = document.createElement("div");
  duration.setAttribute("class", "duration");
  duration.innerHTML ='33.33'
  duration.setAttribute("id", "yt-duration");
  document.querySelector(".container").append(duration);

  thumbnail = document.createElement("div");
  thumbnail.setAttribute("class", "thumbnail");
  thumbnail.setAttribute("id", "yt-thumbnail");
  document.querySelector(".container").append(thumbnail);




function createCard(title, cName, views, Date, duration, thumbnail) {
    
}
createCard();

// createCard("Introduction to Backend | Sigma Development Course", "CodeWithHarry", 560000, "31:61", "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g")
