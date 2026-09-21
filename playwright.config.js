const { defineConfig, devices } = require('@playwright/test');
const env = require('./config/env.prod.json');
const expectTimeout = Number(process.env.PLAYWRIGHT_EXPECT_TIMEOUT) || 60000;
module.exports = defineConfig({


    testDir: './tests',
    fullyParallel: true,        
    // Number of parallel workers to use for running tests.
    workers: 4,
    // retry on test failure
    //retries: 1,
    //test timeout
    timeout: 200 * 1000,
    // Assertion timeout
    expect: {
        timeout: expectTimeout
    },

    //Reporters
    reporter: [
        ['list'],
        ['html', { outputFolder: 'reports.html' }],
        // ['json', { open: 'never', outputFile: 'reports/reports.json' }],
        ['allure-playwright', { outputFolder: 'allure-results' }]
    ],



    use: {
        baseURL: env.baseUrl,
        headless: false,
        screenshot: 'only-on-failure', outputFolder: './screenshots',
        video: 'retain-on-failure', outputFolder: './videos',
        trace: 'retain-on-failure', outputFolder: './traces',
        actionTimeout: 60000,
        navigationTimeout: 120000,
    },

    projects: [
        {
            name: 'chromium',
            use: {
                viewport: { width: 1920, height: 1200 },
                launchOptions: {
                    args: ['--window-size=1920,1200']
                }
            },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        }
    ]


});