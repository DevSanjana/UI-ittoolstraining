const plan1 = document.querySelector(".plan1");
const plan2 = document.querySelector(".plan2");

const switchPlan = () => {
  if (plan2.style.display === "none") {
    plan1.style.display === "none";
    plan2.style.display === "block";
  } else {
    plan1.style.display === "block";
    plan2.style.display === "none";
  }
};
