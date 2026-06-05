import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import type { ExperienceItem } from '../../types';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience.html'
})
export class ExperienceComponent {
  private translate = inject(TranslateService);
  protected readonly items = toSignal(this.translate.stream('experience.items'), { initialValue: [] as ExperienceItem[] });
}
