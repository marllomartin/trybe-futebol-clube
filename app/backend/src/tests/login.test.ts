import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('[POST] Login', () => {
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

  it('Status 200 is returned when login request is successful', async () => {
    const res = await chai
      .request(app).post('/login')
      .send({
        email: "admin@admin.com",
        password: "secret_admin",
      });

    expect(res.status).to.be.equal(200);
  });
  it('A Token is returned when login request is successful', async () => {
    const res = await chai
      .request(app).post('/login')
      .send({
        email: "admin@admin.com",
        password: "secret_admin",
      });

    expect(res.body).to.be.an('Object');
    expect(res.body).to.have.key('token');
  });
  it('Status 401 is returned when given wrong credentials', async () => {
    const res = await chai
      .request(app).post('/login')
      .send({
        email: "error@error.com",
        password: "error.password",
      });

      expect(res.status).to.be.equal(401);
  });
  it('An error message is returned when given wrong credentials', async () => {
    const res = await chai
      .request(app).post('/login')
      .send({
        email: "error@error.com",
        password: "error.password",
      });

      expect(res.body.message).to.be.equal('Incorrect email or password');
  });
  it('Status 400 is returned when a field is missing', async () => {
    const res = await chai
      .request(app).post('/login')
      .send({
        email: "missing@missing.com",
      });

      expect(res.status).to.be.equal(400);
  });
  it('A warning message is returned when a field is missing', async () => {
    const res = await chai
      .request(app).post('/login')
      .send({
        email: "missing@missing.com",
      });

      expect(res.body.message).to.be.equal('All fields must be filled');
  });

});
