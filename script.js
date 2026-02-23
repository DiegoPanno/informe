// 1. Base de Datos del Informe (Sin tecnicismos y sin CITEs)
const detalles = {
    estatus: {
        titulo: "Evolución de la Plataforma",
        cuerpo: "La unidad de Mercado Libre dejó de ser un simple canal de despacho para convertirse en una Sucursal Digital de Alto Rendimiento. Somos reconocidos oficialmente como 'Página Modelo' por nuestra calidad visual y estructura. La plataforma evolucionó de un sitio de búsqueda de precios a un ecosistema que exige atención integral en marketing y comunidad para concretar la venta."
    },
    crecimiento: {
        titulo: "Resultados en Mercado Recesivo",
        cuerpo: "Mientras el mercado general de pinturas cayó entre un 34% y 53%, nosotros logramos un crecimiento contracíclico del 8,6% en facturación y un 37,4% en unidades vendidas durante enero."
    },
    comunidad: {
        titulo: "Activo Diferencial: Clientes Fieles",
        cuerpo: "Transformamos el canal en una comunidad activa de 1.726 seguidores. Logramos un 7% de tasa de recompra, un indicador que valida la confianza total en nuestro asesoramiento técnico."
    },
    ranking: {
        titulo: "Potencial de Crecimiento",
        cuerpo: "Actualmente ocupamos el puesto 90 a nivel nacional. El objetivo estratégico es capturar los $12 millones de diferencia que nos separan del Top 10 para ganar volumen y poder de negociación."
    },
    top10: {
        titulo: "Radiografía del Mercado (Top 10)",
        cuerpo: "El gráfico muestra la jerarquía actual. Del puesto 2 al 10 la brecha es mínima. Ámbito tiene la estructura para desplazar al puesto 10 (Giannoni) ajustando la competitividad comercial."
    },
    fuga: {
        titulo: "Comparativa con Sagitario",
        cuerpo: "Se toma como referencia directa a Sagitario (Puesto 7) por vender el mismo catálogo de productos. La diferencia de precios de hasta el 25% genera que nuestras 59.364 visitas mensuales terminen comprando en la competencia."
    }
};

let miGraficoCompleto = null;

// 2. Función para mostrar la ventana emergente
function mostrarDetalle(tipo) {
    // Rellenar textos
    document.getElementById('tituloVentana').innerText = detalles[tipo].titulo;
    document.getElementById('cuerpoVentana').innerText = detalles[tipo].cuerpo;
    
    const contenedorCanvas = document.getElementById('canvas-container');
    
    // Si el usuario toca la sección del ranking, dibujamos el gráfico de los 10
    if (tipo === 'top10') {
        contenedorCanvas.style.display = 'block';
        setTimeout(() => {
            dibujarGraficoMercado();
        }, 100); // Pequeño retraso para asegurar que el modal sea visible
    } else {
        contenedorCanvas.style.display = 'none';
    }
    
    // Mostrar el modal
    document.getElementById('ventanaInfo').classList.remove('oculto');
}

// 3. Función para cerrar la ventana
function cerrarVentana() {
    document.getElementById('ventanaInfo').classList.add('oculto');
    // Destruir el gráfico al cerrar para que no use recursos
    if (miGraficoCompleto) {
        miGraficoCompleto.destroy();
        miGraficoCompleto = null;
    }
}

// 4. Lógica del Gráfico de Barras del Top 10 (Se activa al hacer clic)
function dibujarGraficoMercado() {
    const ctx = document.getElementById('graficoCompleto').getContext('2d');
    
    // Si ya existe, lo borramos antes de crear uno nuevo
    if (miGraficoCompleto) {
        miGraficoCompleto.destroy();
    }
    
    miGraficoCompleto = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '1. MM', '2. Alto Impacto', '3. Tecza', '4. Migliore', 
                '5. Kromacolor', '6. Miguel', '7. Sagitario', 
                '8. Prestigio', '9. Coparaso', '10. Giannoni', 'ÁMBITO'
            ],
            datasets: [{
                data: [431.2, 106.6, 105.8, 97.9, 88.0, 85.3, 78.4, 74.9, 73.6, 62.8, 50.1],
                backgroundColor: [
                    '#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', 
                    '#cbd5e1', '#3483fa', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#e91e63'
                ],
                borderRadius: 5
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { 
                    beginAtZero: true,
                    title: { display: true, text: 'Millones de Pesos ($)' }
                },
                y: { 
                    grid: { display: false },
                    ticks: { font: { weight: 'bold' } }
                }
            }
        }
    });
}

// 5. Botón de Acción Final
document.getElementById('botonAccion').onclick = function() {
    this.style.display = 'none';
    document.getElementById('resultadoAccion').classList.remove('oculto');
};

// LÓGICA DEL CONTADOR DE FUGA - ESCENARIO LÍDER ABSOLUTO (MM)
// Brecha mensual: $381,090,074 / 30 días / 24 hs / 3600 seg = $146.56 por segundo
let totalFugaMM = 0;
const incrementoMM = 146.56; 

function actualizarContadorLider() {
    totalFugaMM += incrementoMM;
    document.getElementById('contador-fuga').innerText = 
        '$ ' + totalFugaMM.toLocaleString('es-AR', { minimumFractionDigits: 2 });
}

// Actualiza cada 1 segundo (el salto de números será mucho más rápido)
setInterval(actualizarContadorLider, 1000);