import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.html'
})
export class AboutComponent {
  private translate = inject(TranslateService);
  protected readonly body = toSignal(this.translate.stream('about.body'), { initialValue: [] as string[] });
}
