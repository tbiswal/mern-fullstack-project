import { describe, it, before, after } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import Event from '../src/models/eventModel.js';
import server from '../src/server.js';
import createSeeds from '../src/seeds.js';

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

before((done) => {
  console.log('Started Before');
  createSeeds()
    .then(() => {
      done();
    })
    .catch((e) => {
      console.log('There is an error while seeding the test DB!');
      console.log(e.message);
    });
});

after((done) => {
  Event.deleteMany({});
  done();
});

/**
 * Test the GET route
 */
describe('Test GET route /api/events', () => {
  console.log('Here 11111');
  it('It should return all events', (done) => {
    chai
      .request(server)
      .get('/api/events')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.not.be.eq(0);
        done();
      });
  });

  /**
   * Test the POST route
   */
  describe('POST /api/events', () => {
    console.log('Here 22222');
    it('It should POST a new event', (done) => {
      const event = {
        title: 'RapidFunnel Conference',
        description: 'This is going to be an awesome event!',
        date: '2023-03-24T00:00:00.000Z',
      };

      chai
        .request(server)
        .post('/api/events')
        .send(event)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have.property('pubId');
          response.body.should.have.property('title').eq(event.title);
          response.body.should.have
            .property('description')
            .eq(event.description);
          response.body.should.have.property('date').eq(event.date);
          done();
        });
    });

    it('It should NOT POST a new event without the title property', (done) => {
      console.log('Here 3333');
      const event = {
        description: 'This is going to be an awesome event!',
        date: '2023-03-24T00:00:00.000Z',
      };
      chai
        .request(server)
        .post('/api/events')
        .send(event)
        .end((err, response) => {
          response.should.have.status(401);
          response.text.should.be.eq('{"message":"title required"}');
          done();
        });
    });
  });
});
