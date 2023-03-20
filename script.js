let work = document.getElementsByClassName("Java")[0];
let javascript = document.getElementsByClassName("JavaScript")[0];
let skill = document.getElementById("skill");
let percentage = [
  { name: "Javascript", percent: "70%" },
  { name: "Java", percent: "70%" },
  { name: "HTML", percent: "80%" },
  { name: "Css", percent: "75%" },
  { name: "MYSQL", percent: "50%" },
];
let javaProject = [
  {
    name: "Project Management System",
    link: "https://github.com/RanjiniC2003/ProjectManagementJava1",
    img: 'url("zohoProjectManagement.png")',
  },
  {
    name: "Stationary",
    link: "https://github.com/RanjiniC2003/stationeryJava",
    img: 'url("stationary.jpeg")',
  },
  {
    name: "CsvDataVisualizer",
    link: "https://github.com/RanjiniC2003/csvDataVisual",
    img: 'url("assignament.jpg")',
  },
  {
    name: "hashSetArray",
    link: "https://github.com/RanjiniC2003/hashArray",
    img: 'url("assignament.jpg")',
  },
  {
    name: "Assignment",
    link: "https://github.com/RanjiniC2003?tab=repositories",
    img: 'url("assignament.jpg")',
  },
];
let jSProject = [
  {
    name: "YoutubeMusic",
    link: "https://github.com/RanjiniC2003/youtube",
    img: 'url("youTubeMusic.jpeg")',
  },
  {
    name: "Tic Tak Toe",
    link: "https://tik-tak-toe.070-ranjiniranj.repl.co/",
    img: 'url("ticTakToe.jpg")',
  },
  {
    name: "Rock paper scissor",
    link: "https://rock-paper.070-ranjiniranj.repl.co/",
    img: 'url("rockPaperScissors.jpg")',
  },
  {
    name: "Memory game",
    link: "https://memory-game.070-ranjiniranj.repl.co/",
    img: 'url("memoryGame.jpeg")',
  },
  {
    name: "Todo list",
    link: "https://todolist-assignment-11.070-ranjiniranj.repl.co/",
    img: 'url("totoList.png")',
  },
  {
    name: "Simple calculater",
    link: "https://simple-calculator.070-ranjiniranj.repl.co/",
    img: 'url("calculator.jpeg")',
  },
];
// skill object and work object
// model = {"img":"path","projectname":""}
for (let i = 0; i < javaProject.length; i++) {
  let parent = document.createElement("div");
  let project = document.createElement("div");
  let aTagParent = document.createElement("div");
  let proName = document.createElement("h1");
  let aTag = document.createElement("a");
  work.appendChild(parent).setAttribute("class", "parent");
  parent.appendChild(aTagParent).setAttribute("class", "aTagParent");
  aTagParent.appendChild(aTag).setAttribute("target", "_blank");
  aTag.setAttribute("class", "aTag");
  aTag.appendChild(project).setAttribute("class", "project");
  aTag.href = javaProject[i].link;
  parent.appendChild(proName).setAttribute("class", "proName");

  project.style.backgroundImage = javaProject[i].img;
  proName.innerHTML = javaProject[i].name;
}
for (let i = 0; i < jSProject.length; i++) {
  let parent = document.createElement("div");
  let project = document.createElement("div");
  let proName = document.createElement("h1");
  let aTagParent = document.createElement("div");
  let aTag = document.createElement("a");
  javascript.appendChild(parent).setAttribute("class", "parent");
  parent.appendChild(aTagParent).setAttribute("class", "aTagParent");
  aTagParent.appendChild(aTag).setAttribute("target", "_blank");
  aTag.setAttribute("class", "aTag");
  aTag.appendChild(project).setAttribute("class", "project");
  aTag.href = jSProject[i].link;
  parent.appendChild(proName).setAttribute("class", "proName");
  project.style.backgroundImage = jSProject[i].img;
  proName.innerHTML = jSProject[i].name;
}
for(let i = 0; i < percentage.length; i++) {
  let parent = document.createElement("div");
  let percentageParent = document.createElement("div");
  let percentDiv = document.createElement("div");
  let h3tag = document.createElement('h3');

  let h2Tag = document.createElement("h2");
  skill.appendChild(percentageParent).setAttribute("class","percentageParent");
  percentageParent.appendChild(parent).setAttribute("class", "percentParent");
  percentageParent.appendChild(h3tag).setAttribute('class','h3Tag');
  h3tag.innerHTML=percentage[i].name;
  parent.appendChild(percentDiv).setAttribute("class", "percentDiv")
  percentDiv.style.width=`${percentage[i].percent}`;
  parent.appendChild(h2Tag).setAttribute("class", "percentText");
  h2Tag.innerHTML = percentage[i].percent;
}
