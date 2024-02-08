fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        const monedas = ["oficial", "blue", "bolsa", "ccl", "mayorista", "cripto", "tarjeta"];

        monedas.forEach(m => {
            const elemento = document.querySelector(`#${m}`);
            elemento.innerHTML = `<td>Compra: $${data[monedas.indexOf(m)].compra} <br> Venta: $${data[monedas.indexOf(m)].venta}</td>`;
        });
    });
