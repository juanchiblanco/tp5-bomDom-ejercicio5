let contador = 1;

const iniciarCronometro = () => {
  const idSetInterval = setInterval(() => {
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

const btnIniciar = document.querySelector(".btn-primary");

btnIniciar.addEventListener("click", iniciarCronometro);
