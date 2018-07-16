// jest.config.js
module.exports = {
    moduleNameMapper: {
        '^vue$': 'vue/dist/vue.common.js',
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1'
    },
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
    },
    /* collectCoverage: true, */
    collectCoverageFrom: [
        '**/*.{js,vue}',
        '!**/node_modules/**'
    ],
    coverageReporters: ['html', 'text-summary']
};
