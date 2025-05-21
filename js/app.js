let contador = 1;
let idSetInterval = null

const iniciarCronometro = () => {
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
    clearInterval(idSetInterval)
    idSetInterval = null
}

const btnIniciar = document.querySelector(".btn-success");
const btnPausar = document.querySelector(".btn-primary");

btnIniciar.addEventListener("click", iniciarCronometro);
btnPausar.addEventListener("click", pausarCronometro);
