# lookly-preset-webpack

Wrapper around webpack for ease of use and zero configuration.

# usage

You can easily attach webpack checker to your gulpfile.

```JavaScript
const gulp = require('gulp');
const webpack = require('lookly-preset-webpack');

gulp.task('webpack', function gulpWebpackTask() {
  return webpack([
    './web_modules/index.entry.js'
  ]);
});
```
