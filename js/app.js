let button = document.querySelectorAll(".slide-btn");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let activebtn = document.querySelector(".active").className[0];
 
    document.querySelector(".active").classList.remove("active");
    button[i].classList.add("active");
    let new_activebtn = button[i].className[0];

    let shift = -(activebtn - new_activebtn) * 325;
    console.log(shift);
    document.querySelector("#slide-grp").scrollLeft += shift;
  });
}

let button1 = document.querySelectorAll(".slide-btn2");

for (let i = 0; i < button.length; i++) {
  button1[i].addEventListener("click", function () {
    let activebtn1 = document.querySelector(".active1").className[0];

    document.querySelector(".active1").classList.remove("active1");
    button1[i].classList.add("active1");
    let new_activebtn1 = button1[i].className[0];
    let shift1 = -(activebtn1 - new_activebtn1) * 325;
    document.querySelector("#slide-grp2").scrollLeft += shift1;
  });
}
