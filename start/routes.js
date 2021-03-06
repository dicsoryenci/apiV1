'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { mensaje: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.post('usuario/registro','UsuarioController.store');
  Route.post('usuario/login','UsuarioController.login');
  //Rutas proyectos
  Route.get('proyecto','ProyectoController.index').middleware('auth'); // para proter rutas se puede agregar directamente al grupo
  Route.post('proyecto','ProyectoController.create').middleware('auth');
  Route.delete('proyecto/:id','ProyectoController.destroy').middleware('auth');
  Route.patch('proyecto/:id','ProyectoController.update').middleware('auth');

  //Rutas Tareas
  Route.post('proyecto/:id/tarea','TareaController.create').middleware('auth');
  Route.get('proyecto/:id/tarea','TareaController.index').middleware('auth');
  Route.delete('tarea/:id','TareaController.destroy').middleware('auth');
  Route.patch('tarea/:id','TareaController.update').middleware('auth');
}).prefix('api/v1/'); //para agr|upar rutas
