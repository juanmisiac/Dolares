const monedas = ["oficial", "blue", "bolsa", "ccl", "mayorista", "cripto", "tarjeta"];

function getCotizaciones() {
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {

            monedas.forEach(m => {
                const elementoDesktop = document.querySelector(`#${m}`);
                const elementoMobile = document.querySelector(`#${m}-mobile`);
                
                elementoDesktop.innerHTML = `<td>Compra: $${data[monedas.indexOf(m)].compra} <br> Venta: $${data[monedas.indexOf(m)].venta}</td>`;
                
                elementoMobile.textContent = `Compra: $${data[monedas.indexOf(m)].compra} ----- Venta: $${data[monedas.indexOf(m)].venta}`;
            });
        
        })
        .catch(error => {
            console.error('Se produjo un error al obtener los datos de cotización:', error);
        });
}

getCotizaciones();

setInterval(getCotizaciones, 1 * 60 * 1000); // Actualiza los datos cada 1 minuto (expresado en milisegundos)

const btnOficial = document.querySelector('#btn-oficial'),
      btnBlue = document.querySelector('#btn-blue'),
      btnBolsa = document.querySelector('#btn-bolsa'),
      btnCcl = document.querySelector('#btn-ccl'),
      btnMayorista = document.querySelector('#btn-mayorista'),
      btnCripto = document.querySelector('#btn-cripto'),
      btnTarjeta = document.querySelector('#btn-tarjeta');

/*
btnOficial.addEventListener('click', () => {
    console.log('$${data[monedas.indexOf("oficial")].compra}');
});
*/

