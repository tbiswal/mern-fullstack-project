import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server.js';

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

describe('Test GET route /api/events', () => {
  it('It should return all events', (done) => {
    chai
      .request(server)
      .get('/api/events')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
