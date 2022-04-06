const crypto = require("crypto");

global.fetch = require("jest-fetch-mock");
global.crypto = { getRandomValues: arr => crypto.randomBytes(arr.length) };
