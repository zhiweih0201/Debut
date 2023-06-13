/* eslint-disable no-promise-executor-return */
import {
  leave, login, register, sendMessage, verifyToken,
} from '../backend-api/backend-api';
import { connectToSocket } from './socket';

jest.setTimeout(3000000);

test.skip('renders learn react link', async () => {
  const jamesIn = await register('james', 'tang');
  expect(jamesIn)
    .toEqual(201);

  const claireIn = await register('claire', 'wang');
  expect(claireIn)
    .toEqual(201);

  const tokenJames = await login('james', 'tang');
  expect(tokenJames)
    .not
    .toBeUndefined();
  const tokenClaire = await login('claire', 'wang');
  expect(tokenClaire)
    .not
    .toBeUndefined();

  expect(await verifyToken(tokenJames))
    .toEqual(200);
  expect(await verifyToken(tokenClaire))
    .toEqual(200);

  connectToSocket(tokenJames);
  connectToSocket(tokenClaire);

  await new Promise((res) => setTimeout(res, 1000));

  await sendMessage('claire', 'james', 'did you finish backend?');
  await sendMessage('claire', 'james', 'demo is 3 pm');

  await new Promise((res) => setTimeout(res, 1000));

  await leave('claire');

  await new Promise((res) => setTimeout(res, 1000));

  await sendMessage('james', 'claire', 'cool ofc');
  await sendMessage('james', 'claire', 'see you there');

  await new Promise((res) => setTimeout(res, 1000));

  connectToSocket(tokenClaire);

  await new Promise((res) => setTimeout(res, 1000));
});
