import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import type { InterestItem } from '../../types';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './interests.html'
})
export class InterestsComponent {
  private translate = inject(TranslateService);
  protected readonly items = toSignal(this.translate.stream('interests.items'), { initialValue: [] as InterestItem[] });

  protected readonly glyphs: Record<string, string> = {
    outdoor: '△',
    cooking: '◇',
    tech: '○',
  };
}
