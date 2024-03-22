let toggler1 = document.getElementById("switch1");

toggler1.addEventListener("click", () => {
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  toggler1.checked === true
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
});
let toggler2 = document.getElementById("switch2");

toggler2.addEventListener("click", () => {
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  toggler2.checked === true
    ? (document.body.style.backgroundColor = "red")
    : (document.body.style.backgroundColor = "green");


  });
