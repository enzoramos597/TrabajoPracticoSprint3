
//Repositorio centralizado que implementa los métodos definidos en la interfáz,
//realizando operaciones de datos uniformes y controladas con MongoDB

import { set } from 'mongoose';
import superHero from '../models/SuperHero.mjs';
import IRepository from '../repositories/IRepository.mjs';

const nuevoSuperHeroe = {
    nombreSuperHeroe: "Black Widow",
    nombreReal: "Natasha Romanoff",
    edad: 33,
    planetaOrigen: "Tierra",
    debilidad: "Ninguna conocida",
    poderes: ["Maestría en combate", "Espionaje"],
    aliados: "Hawkeye",
    enemigos: "Taskmaster",
    creador: "Enzocreador1",
};

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {;  //Funciona
        return await superHero.findById(id)
    }

    async obtenerTodos() {  //Funciona
        return await superHero.find();
    }

    async agregarNuevoSuperHeroeEnzo() {
        const hero = new superHero(nuevoSuperHeroe);
        console.log(hero);
        return await hero.save();
    }
    
    async modificarSuperHeroeporEdad (id){
        return await superHero.updateOne(
            { _id: id},
            { $set : { edad: 20}}
        );       
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({
            [ atributo ]: valor
        });
    }

    async obtenerMayoresDe30() {
        return await superHero.find({
            edad: { $gt: 30 },
            planetaOrigen: "Tierra",
            poderes: { $exists: true, $not: { $size: 1 } }
        });
    }
};

export default new SuperHeroRepository();