const request = require('supertest');

const { createHash } = require('crypto');

// import our web app

// Import database operations
const dbLib = require('./dbOperations');
const webapp = require('./server');

let db;

const uri = 'mongodb+srv://350debut:350debut@cluster0.itb3d.mongodb.net/debut?retryWrites=true&w=majority';
describe('Server Test 1', () => {
  beforeAll(async () => {
    webapp.listen();
    db = await dbLib.connect(uri);
    await db.collection('users')
      .deleteMany({});
  });

  describe('/login endpoint tests', () => {
    test('/login register', () => request(webapp)
      .post('/login')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luvluv')
          .digest('hex'),
      })
      .expect(201));

    test('/login register no password', () => request(webapp)
      .post('/login')
      .send({
        user: 'claire',
      })
      .expect(400));

    test('/login login', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luvluv')
          .digest('hex'),
      })
      .expect(200));
  });

  describe('login failed attempt', () => {
    it('should fail with 401 - first fail', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luv')
          .digest('hex'),
      })
      .expect(401)
      // eslint-disable-next-line no-unused-vars
      .then(async (_response) => {
        db = await dbLib.connect(uri);
        const users = await db.collection('users')
          .find({ name: 'claire' })
          .toArray();

        const claireInfo = users[0];
        expect(claireInfo.lastFailed.length)
          .toBeGreaterThanOrEqual(1);
      }));

    it('should fail with 401 - second fail', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luv')
          .digest('hex'),
      })
      .expect(401)
      // eslint-disable-next-line no-unused-vars
      .then(async (_response) => {
        db = await dbLib.connect(uri);
        const users = await db.collection('users')
          .find({ name: 'claire' })
          .toArray();

        const claireInfo = users[0];
        expect(claireInfo.lastFailed.length)
          .toBeGreaterThanOrEqual(2);
      }));

    it('should fail with 401 - third fail', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luv')
          .digest('hex'),
      })
      .expect(401)
      // eslint-disable-next-line no-unused-vars
      .then(async (_response) => {
        db = await dbLib.connect(uri);
        const users = await db.collection('users')
          .find({ name: 'claire' })
          .toArray();

        const claireInfo = users[0];
        expect(claireInfo.lastFailed.length)
          .toBeGreaterThanOrEqual(3);
      }));

    it('should fail with 401 - fourth fail (lock account)', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luv')
          .digest('hex'),
      })
      .expect(401)
      // eslint-disable-next-line no-unused-vars
      .then(async (_response) => {
        db = await dbLib.connect(uri);
        const users = await db.collection('users')
          .find({ name: 'claire' })
          .toArray();

        const claireInfo = users[0];
        expect(claireInfo.lastFailed.length)
          .toBeGreaterThanOrEqual(3);

        expect(claireInfo.locked)
          .not
          .toBeTruthy();
      }));
  });
});

describe('Server Test 2', () => {
  beforeAll(async () => {
    webapp.listen();
    db = await dbLib.connect(uri);
    await db.collection('users')
      .deleteMany({});
  });

  describe('/login endpoint tests', () => {
    test('/login register', () => request(webapp)
      .post('/login')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luvluv')
          .digest('hex'),
      })
      .expect(201));

    test('change password should be ok', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luvluv')
          .digest('hex'),
      })
      .expect(200));

    test('change', () => request(webapp)
      .put('/login')
      .send({
        user: 'claire',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTIxMDcxMDcsImV4cCI6MTY1MjExMDcwN30.l5cyIuey7tFLsE9br15EPGQpmVwOb8mzTy-VU24nKdQ',
        new: createHash('sha256')
          .update('newpassword')
          .digest('hex'),
      })
      .expect(200));

    test('/login with old password would fail', () => request(webapp)
      .post('/users')
      .send({
        user: 'claire',
        password: createHash('sha256')
          .update('luvluv')
          .digest('hex'),
      })
      .expect(401));
  });
});

describe('Server Test 3', () => {
  beforeAll(async () => {
    webapp.listen();
    db = await dbLib.connect(uri);
    await db.collection('users')
      .deleteMany({});
  });

  test('/verify on correct token', () => request(webapp)
    .post('/verify')
    .send({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTIxMDcxMDcsImV4cCI6MTY1MjExMDcwN30.l5cyIuey7tFLsE9br15EPGQpmVwOb8mzTy-VU24nKdQ',
    })
    .expect(200));
});

describe('Server Test 4', () => {
  beforeAll(async () => {
    webapp.listen();
    db = await dbLib.connect(uri);
    await db.collection('users')
      .deleteMany({});
  });

  test('/leave on correct return', () => request(webapp)
    .post('/leave')
    .send({
      username: 'claire',
    })
    .expect(200));

  test('/message file in correct message', () => request(webapp)
    .post('/message')
    .send({
      to: 'claire',
      from: 'james',
      message: 'you are the queen',
    })
    .expect(200));
});
