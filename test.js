import fs from 'fs';
import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';
import nock from 'nock';

nock('https://nodejs.org')
  .get('/dist/')
  .reply(200, fs.readFileSync('fixtures.html'));

test('cli', async t => {
  const stdout = await pify(childProcess.execFile)('./cli.js', [], {cwd: __dirname});
  t.ok(stdout.includes('4.2.1'));
});
