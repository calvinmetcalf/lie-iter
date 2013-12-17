
# lie-iter

## API

`npm install lie-iter`

`var cast = require('lie-iter');`

###cast

```javascript
iter(array of values or promises (or promise for such)[, function])
```

call the function on each value waiting for it to resolve before calling the next one.  Returns an array of the values produced or the first error.  If function is omitted it just resolves the promises sequentially (aka default function is `function(a){return a}`)

## License

  MIT
