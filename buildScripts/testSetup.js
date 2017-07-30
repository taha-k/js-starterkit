/**
 * Created by taha on 7/31/17.
 */
// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to trsnapile before our tests run.
require('babel-register');

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
