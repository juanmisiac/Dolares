const monedas = ["oficial", "blue", "bolsa", "ccl", "mayorista", "cripto", "tarjeta"];
let cotizacionesData;

function getCotizaciones() {
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {

            cotizacionesData = data;

            monedas.forEach(m => {
                const elementoDesktop = document.querySelector(`#${m}`);
                const elementoMobile = document.querySelector(`#${m}-mobile`);
                
                elementoDesktop.innerHTML = `Compra: $${data[monedas.indexOf(m)].compra} <br> Venta: $${data[monedas.indexOf(m)].venta}`;
                
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
      btnTarjeta = document.querySelector('#btn-tarjeta'),
      btnExchange = document.querySelector('#exchange');

//EVENT LISTENERS
btnOficial.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("oficial")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnOficial.classList.add('boton-seleccionado');
});

btnBlue.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("blue")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnBlue.classList.add('boton-seleccionado');
});

btnBolsa.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("bolsa")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnBolsa.classList.add('boton-seleccionado');
});

btnCcl.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("ccl")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnCcl.classList.add('boton-seleccionado');
});

btnMayorista.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("mayorista")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnMayorista.classList.add('boton-seleccionado');
});

btnCripto.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("cripto")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnCripto.classList.add('boton-seleccionado');
});

btnTarjeta.addEventListener('click', () => {
    console.log(`$${cotizacionesData[monedas.indexOf("tarjeta")].compra}`);

    const botones = document.querySelectorAll('.boton-conversor');
    botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

    btnTarjeta.classList.add('boton-seleccionado');
});

btnExchange.addEventListener('click', () => {
    btnExchange.classList.add('exc-animation');
    setTimeout(function() {
        btnExchange.classList.remove('exc-animation');
    }, 1000);
})

