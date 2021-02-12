import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';
import app from '@server';
import ChartDao from '@daos/Chart/ChartDao';
import { pErr } from '@shared/functions';
import { paramMissingError } from '@shared/constants';
import { IReqBody, IResponse } from '../support/types';
import { Document, Query } from 'mongoose';

describe('Charts Routes', () => {
  const { BAD_REQUEST, CREATED, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe('POST - /charts/add', () => {
    it('chartExists already returns bad status code', (done) => {
      const body = {
        name: 'Tune Name Here',
        defaultKey: 'F',
        numberOfBars: 1,
        bars: [
          {
            chords: [
              {
                functionalNumber: 'b2',
                chordQuality: 'Major',
                isSeventhChord: true,
              },
              {
                functionalNumber: '1',
                chordQuality: 'Minor',
                isSeventhChord: true,
              },
              {
                functionalNumber: '%',
                chordQuality: '%',
                isSeventhChord: false,
              },
              {
                functionalNumber: '%',
                chordQuality: '%',
                isSeventhChord: false,
              },
            ],
          },
        ],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      };

      spyOn(ChartDao, 'findOne').and.returnValue(Promise.resolve(true) as any);

      spyOn(ChartDao, 'create').and.returnValue();

      agent
        .post('/charts/add')
        .type('form')
        .send(body)
        .end((err: Error, res: IResponse) => {
          pErr(err);
          expect(res.status).toBe(BAD_REQUEST);
          expect(res.body.error).toEqual('This chart already exists!');
          done();
        });
    });

    it('Chart is created successfully', (done) => {
      const body = {
        name: 'Tune Name Here',
        defaultKey: 'F',
        numberOfBars: 1,
        bars: [
          {
            chords: [
              {
                functionalNumber: 'b2',
                chordQuality: 'Major',
                isSeventhChord: true,
              },
              {
                functionalNumber: '1',
                chordQuality: 'Minor',
                isSeventhChord: true,
              },
              {
                functionalNumber: '%',
                chordQuality: '%',
                isSeventhChord: false,
              },
              {
                functionalNumber: '%',
                chordQuality: '%',
                isSeventhChord: false,
              },
            ],
          },
        ],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      };

      spyOn(ChartDao, 'findOne').and.returnValue(Promise.resolve(false) as any);

      spyOn(ChartDao, 'create').and.returnValue();

      agent
        .post('/charts/add')
        .type('form')
        .send(body)
        .end((err: Error, res: IResponse) => {
          pErr(err);
          expect(res.status).toBe(CREATED);
          expect(res.body.error).toBeUndefined();
          done();
        });
    });
  });

  // describe('GET - /charts/all', () => {
  //   it('All charts return', (done) => {
  //     agent.get('/charts/all').end((err: Error, res: IResponse) => {
  //       pErr(err);
  //       expect(res.status).toBe(OK);
  //       done();
  //     });
  //   });
  // });

  // describe('GET - /chart/:id/:key*?', () => {
  //   it('', (done) => {
  //     agent.get('/charts/all').end((err: Error, res: IResponse) => {
  //       pErr(err);
  //       expect(res.status).toBe(OK);
  //       done();
  //     });
  //   });

  //   it('', (done) => {
  //     agent.get('/charts/all').end((err: Error, res: IResponse) => {
  //       pErr(err);
  //       expect(res.status).toBe(OK);
  //       done();
  //     });
  //   });
  // });

  // describe('PUT - /edit/:id', () => {
  //   it('', (done) => {
  //     agent.get('/charts/all').end((err: Error, res: IResponse) => {
  //       pErr(err);
  //       expect(res.status).toBe(OK);
  //       done();
  //     });
  //   });
  // });

  // describe('DELETE - /delete/:id', () => {
  //   it('', (done) => {
  //     agent.get('/charts/all').end((err: Error, res: IResponse) => {
  //       pErr(err);
  //       expect(res.status).toBe(OK);
  //       done();
  //     });
  //   });
  // });
});
