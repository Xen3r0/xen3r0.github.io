import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import type { EducationItem } from '../../types';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './education.html'
})
export class EducationComponent {
  private translate = inject(TranslateService);
  protected readonly items = toSignal(this.translate.stream('education.items'), { initialValue: [] as EducationItem[] });
}
