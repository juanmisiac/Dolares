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

//EVENT LISTENERS
const btnOficial = document.querySelectorAll('.btn-oficial'),
      btnBlue = document.querySelectorAll('.btn-blue'),
      btnBolsa = document.querySelectorAll('.btn-bolsa'),
      btnCcl = document.querySelectorAll('.btn-ccl'),
      btnMayorista = document.querySelectorAll('.btn-mayorista'),
      btnCripto = document.querySelectorAll('.btn-cripto'),
      btnTarjeta = document.querySelectorAll('.btn-tarjeta'),
      btnExchange = document.querySelectorAll('.exchange'),
      btnCambiarConv = document.querySelectorAll('.arrow-conv');

const conversorArsUsd = document.querySelector('.conversor-ars-usd'),
      conversorUsdArs = document.querySelector('.conversor-usd-ars');

btnCambiarConv.forEach(btn => {
    btn.addEventListener('click', () => {

        if (conversorArsUsd.classList.contains('conversor-oculto')) {
            
            conversorArsUsd.classList.remove('conversor-oculto');
            conversorUsdArs.classList.add('conversor-oculto');

        } else if (conversorUsdArs.classList.contains('conversor-oculto')) {
            
            conversorUsdArs.classList.remove('conversor-oculto');
            conversorArsUsd.classList.add('conversor-oculto');

        }

        console.log("Conversor cambiado");
    });
});

//Event Listeners de los botones selectores de cotizaciónes
btnOficial.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("oficial")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

btnBlue.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("blue")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

btnBolsa.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("bolsa")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

btnCcl.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("ccl")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

btnMayorista.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("mayorista")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

btnCripto.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("cripto")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

btnTarjeta.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`$${cotizacionesData[monedas.indexOf("tarjeta")].venta}`);

        const botones = document.querySelectorAll('.boton-conversor');
        botones.forEach(boton => boton.classList.remove('boton-seleccionado'));

        btn.classList.add('boton-seleccionado');
    });
});

let inpPeso = document.querySelector('.cant-peso'),   //Modificar los nombres y hacerlos id diferentes para c/ conversor
    inpDolar = document.querySelector('.cant-dolar'), //Modificar los nombres y hacerlos id diferentes para c/ conversor
    valorDolarSeleccionado,
    valorDolarConvertido;
   
btnExchange.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('exc-animation');
        setTimeout(function() {
            btn.classList.remove('exc-animation');
        }, 500);

        const btnSeleccionado = document.querySelector('.boton-seleccionado');
        const monedaSeleccionada = btnSeleccionado.classList[0].replace('btn-', '');

        valorDolarSeleccionado = cotizacionesData[monedas.indexOf(monedaSeleccionada)].venta;
        valorDolarConvertido = parseFloat((inpPeso.value / valorDolarSeleccionado).toFixed(2));
        inpDolar.value = valorDolarConvertido;
    });
});


