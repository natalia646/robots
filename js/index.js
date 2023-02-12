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
      h2.innerText = robot.firstName + " " + robot.lastName;

      let p = document.createElement("p");
      p.innerText = `Hi! I'm ${robot.firstName}. I am ${robot.age} years old. 
       I was born in ${robot.birthDate}.
       Read detailed information about me 
       and collect it!`;

      let img = document.createElement("img");
      img.src = robot.image;
      
      let btnDetailed = document.createElement("button");
      btnDetailed.onclick = function () {

      };
      btnDetailed.innerText = "Detailed";

      let btnCollect = document.createElement("button");
      btnCollect.onclick = function () {

      };
      btnCollect.innerText = "Collect";


      article.append(h2, img, p, btnDetailed,btnCollect);
      div.appendChild(article);
    }
    document.body.append(div);
  });
