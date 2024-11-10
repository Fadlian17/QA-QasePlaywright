const config = {
    use: {
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    reporter: [
      ['list'],
      [
        'playwright-qase-reporter',
        {
          debug: true,
          mode: 'testops',
          debug: false,
          testops: {
            api: {
              token: '29bd418a9280af512bc01743d71e35beed3612703b046e37580c72c8972b57ca',
            },
  
            project: 'DEWP',
            uploadAttachments: true,
  
            run: {
              complete: true,
            },
          },
        },
      ],
    ],
  };
  
  module.exports= config;