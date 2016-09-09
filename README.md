# jest-ava-api

[![Unix Build status](https://img.shields.io/travis/MoOx/js-boilerplate/master.svg?branch=master&label=unix%20build)](https://travis-ci.org/MoOx/js-boilerplate)
[![Version](https://img.shields.io/npm/v/jest-ava-api.svg)](https://github.com/MoOx/jest-ava-api/blob/master/CHANGELOG.md)

[![Repo on GitHub](https://img.shields.io/badge/repo-GitHub-3D76C2.svg)](https://github.com/MoOx/jest-ava-api)
[![Repo on GitLab](https://img.shields.io/badge/repo-GitLab-6C488A.svg)](https://gitlab.com/MoOx/jest-ava-api)
[![Repo on BitBucket](https://img.shields.io/badge/repo-BitBucket-1F5081.svg)](https://bitbucket.org/MoOx/jest-ava-api)

> AVA API for Jest

Very simple & stupid proxy API.
** ⚠️ Not everything is mapped yet.**

_Take a look at the UNTESTED file._

## Installation

```console
$ npm install --save-dev jest babel-jest jest-ava-api
```

## Usage

```js
// VERY EASY, JUST REPLACE "ava" by "jest-ava-api" and you are done.
import test from "jest-ava-api"

test("message", (t) => {
  t.truthy(value)
})
```

## ⚠️ Notes

Jest provides a "window" object, unlike AVA.

By default, Jest try to preprocess ``node_modules``, so you might need this:

```js
  "jest": {
    "preprocessorIgnorePatterns": [
      "node_modules"
    ],
  },
```

Not also that AVA try to test ``**/__tests__/*.js``,
while Jest try to test ``**/__tests__/**/*.js``
so you might need to ignore fixtures if you have some, like this

```js
    "testPathIgnorePatterns": [
      "/fixtures/"
    ]
```

---

## CONTRIBUTING

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull/Merge requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
