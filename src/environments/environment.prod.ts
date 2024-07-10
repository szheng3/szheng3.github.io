const baseUrl = "https://szheng3.github.io";

export const environment = {
  production: true,
  domain: 'https://apiv1.sszzz.me/api',
  application: {
    baseUrl,
    name: 'Cloud',
    logoUrl: ''
  },
  oAuthConfig: {
    issuer: 'https://api.cloud.sszzz.me/',
    redirectUri: baseUrl,
    responseType: 'password',
    clientId: 'Cloud_App',
    // dummyClientSecret: '1q2w3e*',
    scope: 'offline_access Cloud'
    // requireHttps: false,

  },
  apis: {
    default: {
      url: 'https://api.cloud.sszzz.me',
      rootNamespace: 'Davrat.Cloud'
    }
  }
};

// export const environment = {
//   production: true,
//   domain: 'http://34.107.187.153/api'
// };
