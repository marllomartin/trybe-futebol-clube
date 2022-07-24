import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('[GET] Matches', () => {
  it('Status 200 is returned when get matches request is successful', async () => {
    const res = await chai.request(app).get('/matches');

    expect(res.status).to.be.equal(200);
  });
  it('All Matches are returned when get matches request is successful', async () => {
    const res = await chai.request(app).get('/matches');

    expect(res.body).to.be.an('Array');
  });
});

describe('[GET] Finished Matches', () => {
  it('Status 200 is returned when get matches request is successful', async () => {
    const res = await chai.request(app).get('/matches?inProgress=false');

    expect(res.status).to.be.equal(200);
  });
  it('Finished Matches are returned when get matches request is successful', async () => {
    const res = await chai.request(app).get('/matches?inProgress=false');

    expect(res.body).to.be.an('Array');
    expect(res.body[0].inProgress).to.be.equal(0);
  });
});

describe('[GET] In Progress Matches', () => {
  it('Status 200 is returned when get matches request is successful', async () => {
    const res = await chai.request(app).get('/matches?inProgress=true');

    expect(res.status).to.be.equal(200);
  });
  it('In Progress Matches are returned when get matches request is successful', async () => {
    const res = await chai.request(app).get('/matches?inProgress=true');

    expect(res.body).to.be.an('Array');
    expect(res.body[0].inProgress).to.be.equal(1);
  });
});

describe('[PATCH] Finish Match', () => {
  it('Status 200 is returned when PATCH finish specific match request is successful', async () => {
    const res = await chai.request(app).patch('/matches/1/finish');

    expect(res.status).to.be.equal(200);
  });
  it('Match is finished when PATCH finish specific match request is successful', async () => {
    const res = await chai.request(app).patch('/matches/1/finish');

    expect(res.body.message).to.be.equal('Finished');
  });
});

describe('[PATCH] Edit In Progress Match', () => {
  it('Status 200 is returned when PATCH edit in progress specific match request is successful', async () => {
    const res = await chai.request(app).patch('/matches/1')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      });

    expect(res.status).to.be.equal(200);
  });
  it('Match is updated when PATCH edit in progress specific match request is successful', async () => {
    const res = await chai.request(app).patch('/matches/1');

    expect(res.body.message).to.be.equal('Match updated');
  });
});

