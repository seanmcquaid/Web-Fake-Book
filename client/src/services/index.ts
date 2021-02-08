import Axios from 'axios-observable';
import { ChartInfoTypes } from '../context/AddChartContext/types';

const apiUrl: string = process.env.REACT_APP_API_URL as string;

export const postAddChart = (chartInfo: ChartInfoTypes) =>
  Axios.post(`${apiUrl}/charts/addChart`, chartInfo);
