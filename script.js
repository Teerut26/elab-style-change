let stateCheck = setInterval(() => {
  if (document.domain === "elab.cpe.ku.ac.th") {
    if (
      document.querySelector(
        "#header > h1 > a"
      ) !== null
    ) {
      //เลิกตรวจสอบ element
      clearInterval(stateCheck);
      console.log("ok");
        const menu = document.querySelector("#menu")
        //add element
        const newElement = document.createElement("a");
        newElement.innerHTML = `<a href="https://elab.cpe.ku.ac.th/grade/report/overview/index.php?id=1">Grade</a>`;
        menu.appendChild(newElement);
    }
  }
}, 100);
