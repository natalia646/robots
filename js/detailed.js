let url = new URL(location.href);
let dataJSON = url.searchParams.get("data");
let robot = JSON.parse(dataJSON);


const title = document.getElementById('title')
const h1 = document.createElement("h1");
h1.textContent = `More about ${robot.firstName} ${robot.maidenName} ${robot.lastName}`;
title.append(h1);


let text = document.getElementById('text');
let p = document.createElement("p");
p.innerText = `
age: ${robot.age},
gender:  ${robot.gender},
email: ${robot.email},
phone: ${robot.phone},
birth date: ${robot.birthDate},
height:  ${robot.height},
weight: ${robot.weight},
eye color: ${robot.eyeColor},
domain: ${robot.domain},
address: ${robot.address.address},
university: ${robot.university},
company: ${robot.company.name},
`;

let addToColection = document.getElementById('addToColection');
let btnCollect = document.createElement("button");
btnCollect.onclick = function () {
  let colectRobotFromLS = localStorage.getItem("colection");
  if (colectRobotFromLS === null) {
    localStorage.setItem("colection", JSON.stringify([robot]));
  }
  
  let colectRobotArray = JSON.parse(colectRobotFromLS);
  colectRobotArray.push(robot);
  let stringify = JSON.stringify(colectRobotArray);
  localStorage.setItem("colection", stringify);
  
  if (colectRobotArray.includes(robot)) {
    let img = document.createElement("img");
    img.src = "img/added.svg";
    img.id = "added";
    addToColection.append(img);
  }
};
btnCollect.innerText = "Add to collection";
addToColection.append(btnCollect)
text.append(p, addToColection)


let photo = document.getElementById('photo')
let img = document.createElement("img");
img.src = robot.image;
photo.append(img)
description.append(text, photo);

document.body.append(description);
