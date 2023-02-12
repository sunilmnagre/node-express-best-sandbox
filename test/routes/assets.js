'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server');

chai.use(chaiHttp);
chai.use(require('chai-sorted'));

const [expect, BASE_URL] = [chai.expect, '/api/users'];

describe('REST APIs for User model', () => {
  it('should return a list of all users (/api/users/)', async () => {
    const result = await chai.request(app).get(BASE_URL);
    expect(result).to.have.status(200);
    expect(result).to.be.json;
    expect(result.body).to.be.an('object').to.have.property('data');
    expect(result.body.data).to.be.an('array');
    expect(result.body).to.have.nested.property('data[0]._id');
  });

  it('should return a list of users with usernames (/api/users?fields=username)', async () => {
    const result = await chai.request(app).get(BASE_URL + '?fields=username');
    expect(result).to.have.status(200);
    expect(result).to.be.json;
    expect(result.body).to.be.an('object').to.have.property('data');
    expect(result.body.data).to.be.an('array');
    expect(result.body).to.have.nested.property('data[0].username');
  });

  it('should return users order by name assending (/api/users?sort=firstname)', async () => {
    const result = await chai.request(app).get(BASE_URL + '?sort=firstname');
    expect(result).to.have.status(200);
    expect(result).to.be.json;
    expect(result.body).to.be.an('object').to.have.property('data');
    expect(result.body.data).to.be.an('array');
    expect(result.body.data).to.be.sortedBy('firstname');
  });

  it('should return only 2 users (/api/users/10)', async () => {
    const result = await chai.request(app).delete(BASE_URL + '?offset=0&limit=2');
    expect(result).to.have.status(200);
    expect(result).to.be.json;
    expect(result.body).to.be.an('object').to.have.property('data');
    expect(result.body.data).to.be.an('array');
    expect(result.body.data).to.have.length(2);
  });

  it('should return only 1 user with only name field and where active must be true (/api/users?active=true&offset=0&limit=1)', async () => {
    const result = await chai
      .request(app)
      .get(BASE_URL + '?status=1&offset=0&limit=1');
    expect(result).to.have.status(200);
    expect(result).to.be.json;
    expect(result.body).to.be.an('object').to.have.property('data');
    expect(result.body.data).to.be.an('array');
    expect(result.body.data).to.have.length(1);
    expect(result.body.data[0].status).to.equal(1);
  });

  it('should return required missing parameters', async () => {
    const result = await chai
      .request(app)
      .post(BASE_URL)
      .send({ name: 'FooBar' });
    expect(result).to.have.status(400);
    expect(result).to.be.json;
    expect(result.body.status).to.equal('fail');
    expect(result.body.data[0].param).to.equal('username');
  });
});

describe('Unexpected Usage', () => {
  it('should not crash the server when asking for a bad user id data (/api/users/2-is-the-Id)', async () => {
    const result = await chai.request(app).get(BASE_URL + '/2-is-the-Id/');
    expect(result).to.have.status(500);
    expect(result).to.be.json;
    expect(result.body.status).to.equal('fail');
  });
});
