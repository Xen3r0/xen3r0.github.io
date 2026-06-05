import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LangService {
  private translate = inject(TranslateService);

  private readonly _lang = signal<'fr' | 'en'>(this.getInitialLang());
  lang = this._lang.asReadonly();

  setLang(l: 'fr' | 'en'): void {
    this._lang.set(l);
    this.translate.use(l);
    localStorage.setItem('cv-lang', l);
  }

  toggle(): void {
    this.setLang(this._lang() === 'fr' ? 'en' : 'fr');
  }

  private getInitialLang(): 'fr' | 'en' {
    const saved = localStorage.getItem('cv-lang') as 'fr' | 'en' | null;
    if (saved === 'fr' || saved === 'en') return saved;
    return navigator.language.startsWith('fr') ? 'fr' : 'en';
  }
}
