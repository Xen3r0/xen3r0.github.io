import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<'light' | 'dark'>(this.getInitialTheme());

  theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this._theme();
      const root = document.documentElement;
      root.classList.add('no-transition');
      root.setAttribute('data-theme', theme);
      root.setAttribute('data-glow', theme === 'light' ? 'off' : 'on');
      void root.offsetWidth; // sync reflow — forces var()-based transitioned props to recompute
      root.classList.remove('no-transition');
      localStorage.setItem('cv-theme', theme);
    });
  }

  toggle(): void {
    this._theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): 'light' | 'dark' {
    const saved = localStorage.getItem('cv-theme') as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
