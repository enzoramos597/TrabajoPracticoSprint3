//Define las funciones de presentación de datos.
//Organiza la información de los superhéroes en un formato estructurado.

export function renderizarSuperheroe(superheroe) {
    return {
        "id": superheroe._id,
        "Nombre": superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        "Edad": superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        "Debilidad": superheroe.debilidad,
        "Poderes": superheroe.poderes,
        "Aliados": superheroe.aliados,
        "Enemigos": superheroe.enemigos
    };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}