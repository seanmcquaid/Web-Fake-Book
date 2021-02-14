import Axios from 'axios-observable';
import { ChartInfoTypes } from '../context/AddChartContext/types';

const apiUrl: string = process.env.REACT_APP_API_URL as string;

export const postAddChart = (chartInfo: ChartInfoTypes) =>
  Axios.post(`${apiUrl}/charts/add`, chartInfo);

export const getChartInfo = (id: string, key?: string) =>
  Axios.get(`${apiUrl}/charts/chart/${id}${key ? `/${key}` : ''}`);

export const deleteChart = (id: string) =>
  Axios.delete(`${apiUrl}/charts/delete/${id}`);
