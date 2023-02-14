let button = document.createElement("button");
button.innerText = "Clear colection list ";
button.onclick = function () {
  localStorage.clear();
};
document.body.appendChild(button);

let colection = localStorage.getItem("colection");
let colectionArray = JSON.parse(colection);
let allColection = document.createElement("div");
allColection.id = 'allColect'
for (let robot of colectionArray) {
  let div = document.createElement("div");
  div.classList.add('toColect');

  let h2 = document.createElement("h2");
  h2.textContent = robot.firstName + " " + robot.lastName;

  let img = document.createElement("img");
  img.src = robot.image;
  div.append(h2, img);
  allColection.append(div);
  document.body.append(allColection);
}
