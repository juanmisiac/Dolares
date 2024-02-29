function getCotizaciones() {
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            const monedas = ["oficial", "blue", "bolsa", "ccl", "mayorista", "cripto", "tarjeta"];

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


