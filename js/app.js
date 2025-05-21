let contador = 1;
let idSetInterval = null;

const iniciarCronometro = () => {
  if (idSetInterval !== null) return;
  idSetInterval = setInterval(() => {
    const cronometro = document.querySelector(".display-3");
    if (contador < 10) {
      contador = `0${contador}`;
    } else {
      contador = contador;
    }
    cronometro.textContent = `${contador}`;
    contador++;
  }, 1000);
};

const pausarCronometro = () => {
  clearInterval(idSetInterval);
  idSetInterval = null;
};

const reiniciarCronometro = () => {
  const cronometro = document.querySelector(".display-3");
  cronometro.textContent = "00:00";
  contador = 1;
};

const btnIniciar = document.querySelector(".btn-success");
const btnPausar = document.querySelector(".btn-primary");
const btnReiniciar = document.querySelector(".btn-danger");

btnIniciar.addEventListener("click", iniciarCronometro);
btnPausar.addEventListener("click", pausarCronometro);
btnReiniciar.addEventListener("click", reiniciarCronometro);
