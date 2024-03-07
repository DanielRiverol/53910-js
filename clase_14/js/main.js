const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");

fechaActual.innerHTML = `<p>
                          Fecha: ${new Date().toLocaleDateString()}
                        </p>`;
