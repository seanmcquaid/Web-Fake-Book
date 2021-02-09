/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import ChartsController from '../controllers/ChartsController';

const ChartsRouter = Router();

ChartsRouter.post('/add', ChartsController.postAddChart);

ChartsRouter.get('/all', ChartsController.getAllCharts);

ChartsRouter.put('/edit/:id', ChartsController.editChart);

ChartsRouter.delete('/delete/:id', ChartsController.deleteChart);

export default ChartsRouter;
