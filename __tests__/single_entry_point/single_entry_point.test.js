/**
 * Copyright (c) 2016-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/* eslint func-names: 0 */
/* global describe: false, it: false */

const MemoryFileSystem = require('memory-fs');
const path = require('path');
const webpack = require('../../index');

describe('webpack', function () {
  it('should pack directories', function () {
    return webpack(__dirname, './modules/*.entry.js', {
      outputFileSystem: new MemoryFileSystem(),
    });
  });
});