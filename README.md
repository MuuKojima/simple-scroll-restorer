# Simple Scroll Restorer

simple scroll restore for keeping scroll position

## Installation

```
$ npm install --save simple-state-management
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
