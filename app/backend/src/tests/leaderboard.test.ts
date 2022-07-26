import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('[GET] Leaderboard Home', () => {
  it('Status 200 is returned get leaderboard home request is successful', async () => {
    const res = await chai.request(app).get('/leaderboard/home');

    expect(res.status).to.be.equal(200);
  });
  it('Leaderboard Home is returned when get leaderboard home request is successful', async () => {
    const res = await chai.request(app).get('/leaderboard/home');

    expect(res.body).to.be.an('Array');
    expect(res.body[0]).to.have.keys(
      'name',
      'totalPoints',
      'totalGames',
      'totalVictories',
      'totalDraws',
      'totalLosses',
      'goalsFavor',
      'goalsOwn',
      'goalsBalance',
      'efficiency'
    );
  });
});

describe('[GET] Leaderboard Away', () => {
  it('Status 200 is returned get leaderboard away request is successful', async () => {
    const res = await chai.request(app).get('/leaderboard/away');

    expect(res.status).to.be.equal(200);
  });
  it('Leaderboard Away is returned when get leaderboard away request is successful', async () => {
    const res = await chai.request(app).get('/leaderboard/away');

    expect(res.body).to.be.an('Array');
    expect(res.body[0]).to.have.keys(
      'name',
      'totalPoints',
      'totalGames',
      'totalVictories',
      'totalDraws',
      'totalLosses',
      'goalsFavor',
      'goalsOwn',
      'goalsBalance',
      'efficiency'
    );
  });
});

describe('[GET] Leaderboard General', () => {
  it('Status 200 is returned get leaderboard general request is successful', async () => {
    const res = await chai.request(app).get('/leaderboard');

    expect(res.status).to.be.equal(200);
  });
  it('Leaderboard General is returned when get leaderboard general request is successful', async () => {
    const res = await chai.request(app).get('/leaderboard');

    expect(res.body).to.be.an('Array');
    expect(res.body[0]).to.have.keys(
      'name',
      'totalPoints',
      'totalGames',
      'totalVictories',
      'totalDraws',
      'totalLosses',
      'goalsFavor',
      'goalsOwn',
      'goalsBalance',
      'efficiency'
    );
  });
});