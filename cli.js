#!/usr/bin/env node
'use strict';

const semverNode = require('semver-node');
const meow = require('meow');
const updateNotifier = require('update-notifier');

const cli = meow(`
  Usage
    $ semver-node

  Options
    -s, --stable      Outputs the latest stable version
    -u, --unstable    Outputs the latest unstable version
    -r, --resolve     Resolves any range that node-semver can parse
    -m, --mirror      Useful if nodejs.org is unreachable

  Examples
    $ semver-node --stable
    5.1.1

    $ semver-node --resolve '>=0.8.5 <=0.8.14'
    0.8.14

    $ semver-node --stable --mirror 'https://npm.taobao.org/mirrors/node'
    5.1.1
`, {
  alias: {
    s: 'stable',
    u: 'unstable',
    r: 'resolve',
    m: 'mirror'
  }
});

updateNotifier({pkg: cli.pkg}).notify();

semverNode(cli.flags.mirror)
  .then((versions) => {
    if (cli.flags.stable) {
      return console.log(versions.stable);
    }

    if (cli.flags.unstable) {
      return console.log(versions.unstable);
    }

    if (cli.flags.resolve) {
      return console.log(semverNode.resolve(versions, cli.flags.resolve));
    }

    console.log(versions);
  })
  .catch(err => console.log(err));
