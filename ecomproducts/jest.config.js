const config = {
  verbose: true,
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  moduleNameMapper: {
    // https://alexjover.com/blog/enhance-jest-configuration-with-module-aliases/
    "@/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>jest.setup.js"],
  testURL: "http://localhost/"
};

module.exports = config;