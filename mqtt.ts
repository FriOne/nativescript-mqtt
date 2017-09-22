global.window = {
  setTimeout: setTimeout,
  clearTimeout: clearTimeout
};
global.localStorage = new Map();

export * from 'paho-mqtt';
