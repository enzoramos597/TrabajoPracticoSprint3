//Define las rutas para cada operación del controlador.

import express from 'express';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller, 
    agregarSuperHeroesController, modificarSuperHeroesporIdController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/buscar-id/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

//Sprint 3 - TP1
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.post('/heroes/nuevo/agregarheroes', agregarSuperHeroesController);
router.put('/heroes/actualizar/:id', modificarSuperHeroesporIdController );
export default router;