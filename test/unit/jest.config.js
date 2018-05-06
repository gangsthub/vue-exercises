const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname, '../..'),
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js',
    },
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
    moduleFileExtensions: ['vue', 'js', 'json'],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    testPathIgnorePatterns: [
        '<rootDir>/test/e2e',
        '<rootDir>/components/*.vue',
        '<rootDir>/node_modules',
    ],
    transformIgnorePatterns: [
        '/node_modules/(?!(@storybook/.*\\.vue$))',
    ],
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
        'components/**/*.{js,ts,vue}',
        'layouts/**/*.{js,ts,vue}',
        'pages/**/*.{js,ts,vue}',
        '!**/node_modules/**',
        '!components/**/*.story.js',
    ],
};
