import { Component, inject, input, computed } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const STROKE = (size: number) =>
  `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"`;

const FILL = (size: number) =>
  `width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"`;

function getSvg(name: string, size: number): string {
  const s = STROKE(size);
  const f = FILL(size);
  const svgs: Record<string, string> = {
    mail: `<svg ${s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    github: `<svg ${f}><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>`,
    x: `<svg ${f}><path d="M17.53 3H20.5l-6.49 7.41L21.75 21h-5.97l-4.68-6.12L5.73 21H2.75l6.94-7.93L2.25 3h6.12l4.23 5.6L17.53 3Zm-1.05 16.2h1.65L7.6 4.71H5.83L16.48 19.2Z"/></svg>`,
    linkedin: `<svg ${f}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21H9V9Z"/></svg>`,
    location: `<svg ${s}><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    cv: `<svg ${s}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>`,
    download: `<svg ${s}><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>`,
    arrow: `<svg ${s}><path d="M12 5v14M6 13l6 6 6-6"/></svg>`,
    up: `<svg ${s}><path d="M12 19V5M6 11l6-6 6 6"/></svg>`,
    sun: `<svg ${s}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
    moon: `<svg ${s}><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z"/></svg>`,
  };
  return svgs[name] ?? '';
}

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span style="display:contents" [innerHTML]="svg()"></span>`,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input<number>(18);

  private sanitizer = inject(DomSanitizer);

  protected readonly svg = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(getSvg(this.name(), this.size()))
  );
}
