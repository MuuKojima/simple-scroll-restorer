# Simple Scroll Restorer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/simple-scroll-restorer.svg)](https://badge.fury.io/js/simple-scroll-restorer)

simple scroll restore for keeping scroll position

## Installation

```
$ npm install --save simple-scroll-restorer
```

## Demo

TODO:

## Usage

### Initialize library

app.js
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

router.js
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
