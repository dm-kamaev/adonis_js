module.exports = {
  bail: 1,
  verbose: true,
  testEnvironment: 'node',
  automock: false,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  //setupFilesAfterEnv: [ './test/jest-setup.js' ]
};


