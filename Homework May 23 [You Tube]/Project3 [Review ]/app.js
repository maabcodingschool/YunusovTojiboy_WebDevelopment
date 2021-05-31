// local reviews data
const reviews = [
  {
    id: 1,
    name: "Yunusov Tojiboy",
    job: "Programmer",
    img:
      "https://res.cloudinary.com/dq8icl9z6/image/upload/v1621881352/myself_uzajvs.jpg",
    text:
      "This is me. 17 Y.o , I have been learning IT and English for two years.My future plan is going to the USA and working as a programmer ! ",
  },
  {
    id: 2,
    name: "Nasurullayev Bahrom",
    job: "Student",
    img:
      "https://res.cloudinary.com/dq8icl9z6/image/upload/v1621882156/Bahrom_brulmf.jpg",
    text:
      "Nasurullayev Bahrom. 16 years old.Programmer.He has been learning IT for 2 years.He is master at Web-designing now ",
  },
  {
    id: 3,
    name: "Satimboyev Sanjar",
    job: "BI Master",
    img:
      "https://res.cloudinary.com/dq8icl9z6/image/upload/v1621882602/Sanjar_yihvtt.jpg",
    text:
      "Satimboyev Sanjar. 16 years old.Student,BI developer. He has a great logic to solve SQL problems",
  },
  {
    id: 4,
    name: "Nurmatov Rahmatjon",
    job: "Student",
    img:
      "https://res.cloudinary.com/dq8icl9z6/image/upload/v1621883259/Rahmatjon_omb6bo.jpg",
    text:
      "He is Nurmatov Rahmatjon. 17 years old. He is master of JavaScript programming language",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
