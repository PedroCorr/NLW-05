import { Router } from 'express';
import { MessagesController } from './Controller/MessagesController';
import { SettingsController } from './Controller/SettingsController';
import { UsersController } from './Controller/UsersController';

const routes = Router();

const settingsController = new SettingsController();
const userController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post("/users", userController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };




/**
 * Tipos de parâmetros
 * Routes Params => Parametros de rotas
 *  http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => {
 * 
 * }
 */