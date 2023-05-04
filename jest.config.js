/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {

    // if your using tsconfig.paths thers is no harm in telling jest
    '@components/(.*)$': `${__dirname}/src/components/$1`,
    '@/(.*)$': `${__dirname}/src/$1`,

    // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      `${__dirname}/tests/mocks/fileMock.ts`,
    /* mock models and services folder */
    '(assets|models|services)': `${__dirname}/tests/mocks/fileMock.ts`,
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ['./tests/setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: [`${__dirname}`],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.scss$': ['jest-transform-stub', { modules: true }]
  }
};