const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");


btnSwal.addEventListener("click", () => {
  Swal.fire({
    title: "Estas seguro de guardar este producto?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor: "green",
    confirmButtonText: "Guardar",
    denyButtonText: `No quiero`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      //funcion de guardado
      Swal.fire("Producto guardado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Ok gracias", "", "info");
    }
  });
});

const prod= {
  nombre:"Arroz"
}
btnToast.addEventListener('click',()=>{
  Toastify({
    text: `${prod.nombre} agregado con éxito`,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    //  newWindow: true,
    // close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#00b09b",
    },
   // onClick: function () {}, // Callback after click
  }).showToast();
})

const DateTime = luxon.DateTime
const ahora = DateTime.now();
fechaActual.innerHTML = `<p>
             Fecha: ${ahora.setLocale("en").toLocaleString(DateTime.DATE_HUGE)}
                        </p>`;
console.log(ahora.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));
console.log(ahora.year);
console.log(ahora.month);
console.log(ahora.day);
console.log(ahora.weekday);

const btnCalcular = document.getElementById("calcular"),
  dates = document.querySelectorAll('input[type="date"]');

  let  inicio = DateTime.now().toFormat('yyyy-MM-dd')
let fin = DateTime.now().plus({months:4}).toFormat("yyyy-MM-dd");
  dates.forEach((element) => {
    element.setAttribute("min", inicio);
    element.setAttribute("max", fin);
  });
function calcularEstadia(checkIn, checkOut){
  let total= checkOut.diff(checkIn)
  return total.as("days")
}
btnCalcular.addEventListener("click",()=>{
  let checkIn= DateTime.fromISO(dates[0].value)
  let checkOut= DateTime.fromISO(dates[1].value)
  let estadia= calcularEstadia(checkIn,checkOut)

Swal.fire({
  title: `El precio de tu estadia por ${estadia} dias es : ${estadia * 8000}`,
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonColor: "green",
  confirmButtonText: "Guardar",
  denyButtonText: `No quiero`,
});
})
new Cleave("#card-number", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    console.log(type);
    switch (type) {
      case "visa":
        document.querySelector(".fa-cc-visa").classList.add("active");
        break;
      case "amex":
        document.querySelector(".fa-cc-amex").classList.add("active");
        break;
      case "diners":
        document.querySelector(".fa-cc-diners-club").classList.add("active");
        break;
      case "mastercard":
        document.querySelector(".fa-cc-mastercard").classList.add("active");
        break;
      default:
        if (type === "unknown") {
          icons.forEach((icon) => icon.classList.remove("active"));
        }
        break;
    }
  },
});
