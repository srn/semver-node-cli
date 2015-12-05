# semver-node-cli [![Build Status](https://travis-ci.org/srn/semver-node-cli.svg?branch=master)](https://travis-ci.org/srn/semver-node-cli)

> cli for [semver-node](https://github.com/srn/semver-node)

## Install

```sh
$ npm i -g semver-node-cli
```

## Usage

```sh
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
```

## Related

- [semver-node](https://github.com/srn/semver-node)

## License

MIT © [Søren Brokær](http://srn.io)
