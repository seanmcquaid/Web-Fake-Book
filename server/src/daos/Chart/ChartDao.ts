import mongoose, { Schema } from 'mongoose';

const chartSchema = new Schema({
  name: String,
  defaultKey: String,
  numberOfBars: Number,
  bars: [
    {
      chords: {
        functionalNumber: Schema.Types.Mixed,
        isSeventhChord: Boolean,
        chordQuality: String,
      },
    },
  ],
  beatsPerMeasure: Number,
  noteValuePerBeat: Number,
  genre: String,
});

const ChartDao = mongoose.model('Chart', chartSchema);

export default ChartDao;
