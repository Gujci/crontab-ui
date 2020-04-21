const {Docker} = require('node-docker-api');

module.exports = new Docker({ socketPath: '/var/run/docker.sock' });