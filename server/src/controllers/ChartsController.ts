import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import ChartDao from '@daos/Chart/ChartDao';
import { chartAlreadyExistsError, noChartExistsError } from '@shared/constants';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

class ChartsController {
  public static postAddChart = async (req: Request, res: Response) => {
    const { chartInfo } = req.body;
    const chartExists = await ChartDao.findOne({ name: chartInfo.name });
    if (chartExists) {
      return res.status(BAD_REQUEST).json({
        error: chartAlreadyExistsError,
      });
    }
    await ChartDao.create(chartInfo);
    res.status(CREATED).end();
  };

  public static getAllCharts = async (req: Request, res: Response) => {
    const charts = await ChartDao.find({});
    res.status(OK).json({ charts });
  };

  public static deleteChart = async (req: Request, res: Response) => {
    const { id } = req.params;
    await ChartDao.findByIdAndDelete(id);
    res.status(OK).end();
  };

  public static editChart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { chartInfo } = req.body;
    const chartExists = await ChartDao.findOne({ id });
    if (!chartExists) {
      return res.status(BAD_REQUEST).json({
        error: noChartExistsError,
      });
    }
    const filter = { id };

    await ChartDao.findOneAndUpdate(filter, chartInfo);
    res.status(OK).end();
  };
}

export default ChartsController;
