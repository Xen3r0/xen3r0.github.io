import { Component, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LangService } from '../../services/lang.service';
import { IconComponent } from '../icon/icon';
import { CV_LINKS } from '../../data/links';

const CV_HREFS: Record<'fr' | 'en', { href: string; value: string }> = {
  fr: { href: '/cv.pdf',    value: 'cv.pdf'    },
  en: { href: '/cv_en.pdf', value: 'cv_en.pdf' },
};

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  templateUrl: './hero.html'
})
export class HeroComponent {
  private lang = inject(LangService);
  private translate = inject(TranslateService);

  protected readonly heroMeta = toSignal(this.translate.stream('hero.meta'), { initialValue: [] as string[] });

  protected readonly links = computed(() => {
    const { href, value } = CV_HREFS[this.lang.lang()];
    return CV_LINKS.map(l => l.id === 'cv' ? { ...l, href, value } : l);
  });
}
