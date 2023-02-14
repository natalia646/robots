let url = new URL(location.href);
let dataJSON = url.searchParams.get("data");
let robot = JSON.parse(dataJSON);

let div1 = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = `More about ${robot.firstName} ${robot.maidenName} ${robot.lastName}`;
const classDiv = document.createAttribute("class");
classDiv.value = "title";
div1.setAttributeNode(classDiv);
div1.append(h1);

let article = document.createElement("article");

let div2 = document.createElement("div"); //! first block
let description = document.createElement("p");
description.innerText = `
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

let contButton = document.createElement('div');
contButton.id = 'addToColection'
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
  console.log(colectRobotArray.includes(robot));
  
  if (colectRobotArray.includes(robot)) {
    let img = document.createElement("img");
    img.src = "img/added.svg";
    img.id = "added";
    contButton.append(img);
  }
 


};
btnCollect.innerText = "Add to collection";
contButton.append(btnCollect)

div2.append(description, contButton);

let div3 = document.createElement("div"); //! second block
let img = document.createElement("img");
img.src = robot.image;

div3.append(img);
article.append(div2, div3);

document.body.append(div1, article);
