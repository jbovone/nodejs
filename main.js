#!/usr/bin/env node
//*** shebang ***
'use strict';

var username = process.argv[2];
if (!username) {
    var appName = process.argv[1].split(require('path').sep).pop();
    console.error('Missing argument! Example: %s YOUR_NAME', appName)
    process.exit(1);
} else {
    console.log('Hello %s!', username);
}

// Exit the app (success: 0, error: 1). 
// An error will stop the execution chain. For example: 
//   ./app.js && ls           -> won't execute ls 
//   ./app.js David && ls -> will execute ls 
// ****Read–eval–print loop*****

/*
 node --inspect-brk your-script.js
 [ 'assert',
    'buffer',
    'c/c++_addons',
    'child_process',
    'cluster',
    'console',
    'crypto',
    'deprecated_apis',
    'dns',
    'domain',
    'Events',
    'fs',
    'http',
    'https',
    'module',
    'net',
    'os',
    'path',
    'punycode'
    'querystring'
    'readline'
    'repl'
    'stream'
    'string_decoder'
    'timers'
    'tls_(ssl)'
    'tracing'
    'tty'
    'dgram'
    'url'
    'util'
    'v8'
    'vm'
    'zlib'
*/