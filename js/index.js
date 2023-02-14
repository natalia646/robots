fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((robotsObj) => {
    const robots = robotsObj.users;

    let div = document.createElement("div");
    div.id = "all-robors";

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
      contButton.id = "button";
      let btnDetailed = document.createElement("button");
      btnDetailed.onclick = function () {
        window.location.href = "detailed.html?data=" + JSON.stringify(robot);
      };
      btnDetailed.innerText = "Detailed";

      let btnCollect = document.createElement("button");
      btnCollect.onclick = function () {
        let colectRobotFromLS = localStorage.getItem("colection");
        let img = document.createElement("img");
        img.src = "img/added.svg";
        img.id = "added";

        if (colectRobotFromLS === null) {
          localStorage.setItem("colection", JSON.stringify([robot])) &&
            contButton.append(img);
        }
        let colectRobotArray = JSON.parse(colectRobotFromLS);
        colectRobotArray.push(robot);
        let stringify = JSON.stringify(colectRobotArray);
        localStorage.setItem("colection", stringify);

        if (colectRobotArray.includes(robot)) {
          contButton.append(img);
        }
      };

      btnCollect.innerText = "Add to collection";
      contButton.append(btnDetailed, btnCollect);

      article.append(h2, img, p, contButton);
      div.appendChild(article);
    }
    document.body.append(div);
  });
