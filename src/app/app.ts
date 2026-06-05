import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { SkillsComponent } from './components/skills/skills';
import { InterestsComponent } from './components/interests/interests';
import { IconComponent } from './components/icon/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslatePipe,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    IconComponent,
  ],
  templateUrl: './app.html'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
