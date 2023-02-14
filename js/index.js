fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((robotsObj) => {
    const robots = robotsObj.users;

    let div = document.createElement("div");
    const classDiv = document.createAttribute("class");
    classDiv.value = "all-robors";
    div.setAttributeNode(classDiv);

    for (let robot of robots) {
      let article = document.createElement("article");
      let h2 = document.createElement("h2");
      h2.textContent = robot.firstName + " " + robot.lastName;

      let p = document.createElement("p");
      p.innerText = `Hi! I'm ${robot.firstName}. I am ${robot.age} years old. 
       I was born in ${robot.birthDate}.
       Read detailed information about me and collect it!`;

      let img = document.createElement("img");
      img.src = robot.image;

      let contButton = document.createElement("div");
      const classButton = document.createAttribute("class");
      classButton.value = "button";
      contButton.setAttributeNode(classButton);
      let btnDetailed = document.createElement("button");
      btnDetailed.onclick = function () {
        window.location.href = "detailed.html?data=" + JSON.stringify(robot);
      };
      btnDetailed.innerText = "Detailed";

      let btnCollect = document.createElement("button");
      btnCollect.onclick = function () {
        window.location.href = "colection.html";
      };
      btnCollect.innerText = "Collect";
      contButton.append(btnDetailed, btnCollect);

      article.append(h2, img, p, contButton);
      div.appendChild(article);
    }
    document.body.append(div);
  });
