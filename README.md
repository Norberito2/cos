<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logowanie</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- STRONA 1 -->
  <div class="page active" id="page1">

    <div class="login-box">

      <h1>Logowanie</h1>

      <input type="text" placeholder="Login">

      <input type="password" placeholder="Hasło">

      <button onclick="showPage2()">
        Zaloguj
      </button>

    </div>

  </div>

  <!-- STRONA 2 -->
  <div class="page" id="page2">

    <div class="hearts" id="hearts"></div>

    <div class="wish-box">

      <h2>🌸 Kochana Mamo 🌸</h2>

      <p>
        z całego serca życzymy Ci wszystkiego, co najpiękniejsze.Niech każdy dzień przynosi Ci radość,a każdy poranek zaczyna się uśmiechem.❤️<br><br>

        Dziękujemy Ci za miłość, którą nas otaczasz,za ciepło, które zawsze do nas wraca,i za siłę, którą nam dajesz, nawet gdy o nią nie prosimy. 💖

        <br><br>

       Dziękujemy Ci za miłość, którą nas otaczasz,za ciepło, które zawsze do nas wraca, i za siłę, którą nam dajesz, nawet gdy o nią nie prosimy. 🌷

        <br><br>

      Kochamy Cię najmocniej na świecie.  ❤️
      </p>

    </div>

  </div>

  <script src="script.js"></script>

</body>
</html>
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
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial,sans-serif;
}

body{
  overflow:hidden;
}

/* STRONY */

.page{
  width:100%;
  height:100vh;
  display:none;
  justify-content:center;
  align-items:center;
}

.page.active{
  display:flex;
}

/* STRONA 1 */

#page1{
  background:#f2f2f2;
}

.login-box{
  width:350px;
  background:white;
  padding:40px;
  border-radius:20px;
  box-shadow:0 10px 30px rgba(0,0,0,0.1);
  text-align:center;
}

.login-box h1{
  margin-bottom:25px;
  color:#333;
}

.login-box input{
  width:100%;
  padding:15px;
  margin-bottom:15px;
  border:1px solid #ddd;
  border-radius:10px;
  font-size:16px;
}

.login-box button{
  width:100%;
  padding:15px;
  border:none;
  border-radius:10px;
  background:#333;
  color:white;
  font-size:16px;
  cursor:pointer;
}

/* STRONA 2 */

#page2{
  background:linear-gradient(135deg,#ff758c,#ff7eb3);
  position:relative;
}

.wish-box{
  text-align:center;
  color:white;
  background:rgba(255,255,255,0.2);
  backdrop-filter:blur(10px);
  padding:40px;
  border-radius:25px;
  width:90%;
  max-width:600px;
  animation:fadeIn 2s ease;
}

.wish-box h2{
  font-size:3rem;
  margin-bottom:20px;
}

.wish-box p{
  font-size:1.4rem;
  line-height:1.7;
}

@keyframes fadeIn{
  from{
    opacity:0;
    transform:scale(0.8);
  }

  to{
    opacity:1;
    transform:scale(1);
  }
}

/* SERCA */

.hearts{
  position:absolute;
  width:100%;
  height:100%;
  overflow:hidden;
  pointer-events:none;
}

.heart{
  position:absolute;
  font-size:24px;
  animation:float 6s linear infinite;
}

@keyframes float{
  from{
    transform:translateY(100vh) scale(0.5);
    opacity:1;
  }

  to{
    transform:translateY(-10vh) scale(1.5);
    opacity:0;
  }
}
