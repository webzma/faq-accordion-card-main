const cardsContainer = document.querySelector(".cards-container");
const card = document.querySelectorAll(".card");


document.addEventListener("click", (e) => {
  const d1 = document.querySelector(".description1");
  const d2 = document.querySelector(".description2");
  const d3 = document.querySelector(".description3");
  const d4 = document.querySelector(".description4");
  const d5 = document.querySelector(".description5");

  const st1 = document.querySelector(".p1");
  const st2 = document.querySelector(".p2");
  const st3 = document.querySelector(".p3");
  const st4 = document.querySelector(".p4");
  const st5 = document.querySelector(".p5");

  const icon1 = document.querySelector(".icon1");
  const icon2 = document.querySelector(".icon2");
  const icon3 = document.querySelector(".icon3");
  const icon4 = document.querySelector(".icon4");
  const icon5 = document.querySelector(".icon5");



  console.log(e)

  if (e.target.classList.contains("p1")) {
    addDescription(d1, st1, icon1);
  } else if(!e.target.classList.contains("p1") && e.target.localName == "p") {
    removeDescription(d1, st1, icon1);
  }

  if (e.target.classList.contains("p2")) {
    addDescription(d2, st2, icon2);
  } else if(!e.target.classList.contains("p2") && e.target.localName == "p") {
    removeDescription(d2, st2, icon2);
  }

  if (e.target.classList.contains("p3")) {
    addDescription(d3, st3, icon3);
  } else if(!e.target.classList.contains("p3") && e.target.localName == "p") {
    removeDescription(d3, st3, icon3);
  }

  if (e.target.classList.contains("p4")) {
    addDescription(d4, st4, icon4);
  } else if(!e.target.classList.contains("p4") && e.target.localName == "p") {
    removeDescription(d4, st4, icon4);
  }

  if (e.target.classList.contains("p5")) {
    addDescription(d5, st5, icon5);
  } else if(!e.target.classList.contains("p5") && e.target.localName == "p") {
    removeDescription(d5, st5, icon5);
  }
});

const addDescription = (elem, subtitle, icon) => {
  elem.classList.toggle("active");
  subtitle.classList.toggle("bold");
  icon.classList.toggle("icon-active");
}

const removeDescription = (elem, subtitle, icon) => {
  elem.classList.remove("active");
  subtitle.classList.remove("bold");
  icon.classList.remove("icon-active");
}