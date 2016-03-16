autoform-blackbox
========

A simple blackbox preview using jorisroling:eyes

Usage
-----

Add a custom template in your Schema

```
Schemas.Info = new SimpleSchema({
  title: {
    type: String
  },
  info: {
    type: Object,
    optional: true,
    blackbox: true,
    autoform: {
      type: 'blackbox'
    }
  }
});
```

