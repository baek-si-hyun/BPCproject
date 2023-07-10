module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  snapshotSerializers: ['jest-image-snapshot/serializer'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
