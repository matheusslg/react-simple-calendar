const config = {
  rootDir: 'src',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>../jest.setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
};

module.exports = config;
