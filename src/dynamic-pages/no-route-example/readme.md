### To view this example:

1. Start JSDA server: 

```
npx jsda serve
```

2. Open in browser: 

`http://localhost:3000/no-route-example/index.html.js`

> In this case, assets are served directly from the JSDA endpoints (without `route` defined).

Requests for page resources are also made to `*.*.js` files directly. Example:
```html
<link rel="stylesheet" href="./styles.css.js">
```

The page contains interactive client-only component `<client-counter>`.