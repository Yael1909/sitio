function calcularTotal() {
    var marca = parseFloat(document.getElementById('pregunta1').value) || 0;
    var entrega = parseFloat(document.getElementById('pregunta3').value) || 0;
    var capacidad = parseFloat(document.getElementById('pregunta4').value) || 0;
    var tina = parseFloat(document.getElementById('pregunta5').value) || 0;
    var mantenimiento = parseFloat(document.getElementById('pregunta6').value) || 0;
    var garantia = parseFloat(document.getElementById('pregunta7').value) || 0;
    var tipoLavadora = parseFloat(document.getElementById('pregunta8').value) || 0;
  
    var totalSinIVA = marca + entrega + capacidad + tina + mantenimiento + garantia + tipoLavadora;
    var iva = totalSinIVA * 0.16;
    var totalConIVA = totalSinIVA + iva;
  
    var detallesHTML = 'Detalles de la Compra\n\n';
    detallesHTML += 'Marca: $' + marca.toFixed(2) + '\n';
    detallesHTML += 'Entrega: $' + entrega.toFixed(2) + '\n';
    detallesHTML += 'Capacidad: $' + capacidad.toFixed(2) + '\n';
    detallesHTML += 'Tina: $' + tina.toFixed(2) + '\n';
    detallesHTML += 'Mantenimiento: $' + mantenimiento.toFixed(2) + '\n';
    detallesHTML += 'Garantía: $' + garantia.toFixed(2) + '\n';
    detallesHTML += 'Tipo de lavadora: $' + tipoLavadora.toFixed(2) + '\n\n';
    detallesHTML += 'Subtotal: $' + totalSinIVA.toFixed(2) + '\n';
    detallesHTML += 'Total con IVA: $' + totalConIVA.toFixed(2);
  
    window.alert(detallesHTML);
  }
  