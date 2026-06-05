import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import type { SkillGroup } from '../../types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.html'
})
export class SkillsComponent {
  private translate = inject(TranslateService);
  protected readonly groups = toSignal(this.translate.stream('skills.groups'), { initialValue: [] as SkillGroup[] });
}
