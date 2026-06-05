import type { ApplicationConfig} from '@angular/core';
import { inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideTranslateService({ fallbackLang: 'fr' }),
    provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
    provideAppInitializer(() => {
      const translate = inject(TranslateService);
      const saved = localStorage.getItem('cv-lang') as 'fr' | 'en' | null;
      const lang = saved === 'fr' || saved === 'en'
        ? saved
        : navigator.language.startsWith('fr') ? 'fr' : 'en';
      return firstValueFrom(translate.use(lang));
    }),
  ],
};
