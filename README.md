# Simple Scroll Restorer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/simple-scroll-restorer.svg)](https://badge.fury.io/js/simple-scroll-restorer)

simple scroll restoration for keeping scroll position

## Installation

```
$ npm install --save simple-scroll-restorer
```

## Demo

https://simple-scroll-restorer.netlify.app/

```
$ cd demo
$ npm install .
$ npm run start
-> localhost:8080
```

## Real Application Demo

https://hostile-architecture.org/


## Usage

### Initialize library

Your `app.js` somthing like this
```
import ScrollRestoreManager from 'simple-scroll-restorer';

mount() {
  ScrollRestoreManager.observe();
}

unmount() {
  ScrollRestoreManager.unobserve();
}
```

### Restore scroll position

Your `router.js` somthing like this
```
import ScrollRestoreManager from 'simple-scroll-restorer';

onAfter() {
  const savedPosisiton = ScrollRestoreManager.getSavedPostion();
  if (!savedPosisiton) {
    window.scrollTo(0, 0);
    return;
  }
  window.scrollTo(savedPosisiton.x, savedPosisiton.y);
}
```
