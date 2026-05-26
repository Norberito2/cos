function showPage2(){

  // ukrywa stronę logowania
  document
    .getElementById("page1")
    .classList.remove("active");

  // pokazuje stronę z życzeniami
  document
    .getElementById("page2")
    .classList.add("active");

  createHearts();
}

function createHearts(){

  const heartsContainer =
    document.getElementById("hearts");

  setInterval(()=>{

    const heart =
      document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
      Math.random()*100 + "vw";

    heart.style.fontSize =
      (Math.random()*20+20)+"px";

    heart.style.animationDuration =
      (Math.random()*3+3)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },6000);

  },300);
}