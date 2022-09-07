const card = $("#card");
const imNewHereBtn = $("#imNewHereBtn");
const haveAnAccountBtn = $("#haveAnAccountBtn");
const signupBtn = $(".signupBtn");

haveAnAccountBtn.click(() => {
  card.css("transform", "rotateY(0deg)");
});

imNewHereBtn.click(() => {
  card.css("transform", "rotateY(180deg)");
});

signupBtn.click(() => {
  card.css("transform", "rotateY(180deg)");
});
