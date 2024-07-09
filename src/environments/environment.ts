// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from "@abp/ng.core";

const baseUrl = window.location.origin;

export const environment: Environment = {
  production: true,
  domain: 'https://localhost:44360/api',
  // domain: 'https://apiv1.sszzz.me/api'
  apis: {
    default: {
      url: 'https://localhost:44360',
      rootNamespace: 'Davrat.Cloud'
    }
  },
  application: {
    baseUrl,
    name: 'Cloud',
    logoUrl: ''
  },
  oAuthConfig: {
    issuer: 'https://localhost:44360/',
    redirectUri: baseUrl,
    clientId: 'Cloud_App',
    responseType: 'code',
    scope: 'offline_access Cloud',
    requireHttps: false
  },

};
// export const environment = {
//   production: false,
//   domain: 'http://34.107.187.153/api'
// };
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
