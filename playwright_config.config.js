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
              token: '{your token playwright on qase.io}',
            },
  
            project: '{your project code qase.io}',
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