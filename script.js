// 1. Base de Datos del Informe (Sin tecnicismos y sin CITEs)
// 1. Base de Datos del Informe Actualizada
const detalles = {
    estatus: {
        titulo: "Evolución y Tecnología (GoBots)",
        cuerpo: "La unidad de Mercado Libre evolucionó a una Sucursal Digital de Alto Rendimiento. Implementamos GoBots para automatizar respuestas de preventa y posventa con IA, garantizando atención 24/7. Esto permite que nuestro equipo humano se enfoque en cerrar ventas técnicas complejas, manteniendo un tiempo de respuesta óptimo."
    },
    crecimiento: {
        titulo: "Resultados en Mercado Recesivo",
        cuerpo: "Mientras el mercado general de pinturas cayó entre un 34% y 53%, nosotros logramos un crecimiento contracíclico del 8,6% en facturación y un 37,4% en unidades vendidas durante enero."
    },
    comunidad: {
        titulo: "Activo Diferencial: Clientes Fieles",
        cuerpo: "Transformamos el canal en una comunidad activa de 1.726 seguidores. Logramos un 7% de tasa de recompra, un indicador que valida la confianza total en nuestro asesoramiento técnico."
    },
    costos: {
        titulo: "Estrategia de Costo",
        cuerpo: "Utilizamos un Simulador de Rentabilidad Dinámico que integra el Costo de Reposición Real y las variables logísticas de Mercado Libre. Esto nos permite ajustar márgenes en tiempo real frente a la competencia sin descapitalizar la empresa, asegurando que cada venta genere el flujo necesario para recomprar stock a precios actualizados y proteger el patrimonio."
    },
    ranking: {
        titulo: "Potencial de Crecimiento",
        cuerpo: "Actualmente ocupamos el puesto 90 nacional. El objetivo es capturar los $12 millones de diferencia que nos separan del Top 10 para ganar volumen y mayor poder de negociación con proveedores."
    },
    top10: {
        titulo: "Radiografía del Mercado (Top 10)",
        cuerpo: "El gráfico muestra la jerarquía actual. Ámbito tiene la estructura técnica para desplazar al puesto 10 (Giannoni) si logramos mayor competitividad comercial en productos clave."
    },
    fuga: {
        titulo: "Comparativa con Sagitario",
        cuerpo: "Se toma como referencia a Sagitario (Puesto 7) por catálogo idéntico. La diferencia de precios de hasta el 25% provoca que nuestras visitas terminen comprando en su tienda."
    }
};

let miGraficoCompleto = null;

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

// 3. Función para mostrar detalles y el gráfico
function mostrarDetalle(tipo) {
    document.getElementById('tituloVentana').innerText = detalles[tipo].titulo;
    document.getElementById('cuerpoVentana').innerText = detalles[tipo].cuerpo;
    
    const contenedorCanvas = document.getElementById('canvas-container');
    
    if (tipo === 'top10') {
        contenedorCanvas.style.display = 'block';
        setTimeout(() => {
            dibujarGraficoMercado();
        }, 100);
    } else {
        contenedorCanvas.style.display = 'none';
    }
    
    document.getElementById('ventanaInfo').classList.remove('oculto');
}

// 4. Función para cerrar ventana y limpiar gráfico
function cerrarVentana() {
    document.getElementById('ventanaInfo').classList.add('oculto');
    if (miGraficoCompleto) {
        miGraficoCompleto.destroy();
        miGraficoCompleto = null;
    }
}

// 5. Dibujar Gráfico del Mercado
function dibujarGraficoMercado() {
    const ctx = document.getElementById('graficoCompleto').getContext('2d');
    if (miGraficoCompleto) { miGraficoCompleto.destroy(); }
    
    miGraficoCompleto = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1. MM', '2. Alto Impacto', '3. Tecza', '4. Migliore', '5. Kromacolor', '6. Miguel', '7. Sagitario', '8. Prestigio', '9. Coparaso', '10. Giannoni', 'ÁMBITO'],
            datasets: [{
                data: [431.2, 106.6, 105.8, 97.9, 88.0, 85.3, 78.4, 74.9, 73.6, 62.8, 50.1],
                backgroundColor: ['#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#3483fa', '#cbd5e1', '#cbd5e1', '#cbd5e1', '#e91e63'],
                borderRadius: 5
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, title: { display: true, text: 'Millones de Pesos ($)' } },
                y: { grid: { display: false }, ticks: { font: { weight: 'bold' } } }
            }
        }
    });
}

// 6. Botón de Acción Final
document.getElementById('botonAccion').onclick = function() {
    this.style.display = 'none';
    document.getElementById('resultadoAccion').classList.remove('oculto');
};