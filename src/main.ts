import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

// if (navigator && navigator.serviceWorker) {
//   navigator.serviceWorker.register('/sw.js');
// } own sw

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
