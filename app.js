// app.js

export function validarCamposPositivos(...campos) {
    return campos.every(valor => typeof valor === 'number' && valor > 0);
  }
  
  export function mostrarResultado(texto, color = 'green') {
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
    resultado.style.color = color;
  }
  