import mongoose, { Schema } from 'mongoose';

const chartSchema = new Schema({});

const Chart = mongoose.model('Chart', chartSchema);

export default Chart;
