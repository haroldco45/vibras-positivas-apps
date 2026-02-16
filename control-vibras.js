// ==========================================
// VIBRAS POSITIVAS - SISTEMA DE CONTROL CENTRAL
// Infraestructura Digital © 2026
// ==========================================

const controlVibras = {
    // DISTRIBUCIÓN Y LOGÍSTICA
    "distrileco": "activo",
    "bodega-la-central": "activo",
    "distribuciones-jm": "activo",
    "edogra-distribuciones": "activo",

    // GASTRONOMÍA
    "estos-burgers": "activo",
    "deleitesaludable": "activo",
    "polloharana": "activo",

    // TIENDAS Y MERCADOS
    "tienda-azul": "activo",
    "tienda-mall-el-triangulo": "activo",
    "mercafacil": "activo",
    "fruver-lacentral": "activo",
    "tienda-cielo": "activo",
    "tienda-yire": "activo",
    "miniprecios": "activo",

    // TECNOLOGÍA
    "creadoraqr": "activo",
    "celumaster": "activo",

    // BIENESTAR Y SALUD
    "yeraldin-belleza": "activo",
    "drogueria-inglesa": "activo",
    "odontologia--estetica-bocas": "activo",
    "luzmar": "activo",

    // SERVICIOS
    "alejo-mecanico": "activo",
    "ferreteria-la-hacienda": "activo",
    "labarberia": "activo",
    "atarrayas": "activo",
    "paula-areiza": "activo",
    "nelson-servicios": "activo",

    // TRANSPORTE E INVERSIONES
    "sotracor-caucasia": "activo",
    "inversiones-charlotte": "activo",
    "santuariolaprimera": "activo"
};

// Función para verificar estado (Harold, no tocar esta parte)
function getEstadoApp(nombreApp) {
    return controlVibras[nombreApp] || "activo";
}
  
