import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('[GET] Teams', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Status 200 is returned when get teams request is successful', async () => {
    const res = await chai.request(app).get('/teams');

    expect(res.status).to.be.equal(200);
  });
  it('Teams are returned when get teams request is successful', async () => {
    const res = await chai.request(app).get('/teams');

    expect(res.body).to.be.an('Array');
    expect(res.body[0]).to.have.keys('id', 'teamName');
  });
  it('Specific team is returned when get by id team request is successfull', async () => {
    const id = 5;
    const res = await chai.request(app).get(`/teams/${id}`);

    expect(res.body).to.have.keys('id', 'teamName');
    expect(res.body.id).to.be.equal(id);
  });
});
