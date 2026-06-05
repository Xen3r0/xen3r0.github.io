import type { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LangService } from '../../services/lang.service';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  templateUrl: './header.html'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  protected lang = inject(LangService);
  protected theme = inject(ThemeService);

  protected readonly active = signal<string>('about');

  private observer?: IntersectionObserver;

  private readonly sectionIds = ['about', 'experience', 'education', 'skills', 'interests'];

  ngAfterViewInit(): void {
    setTimeout(() => this.setupScrollSpy());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupScrollSpy(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) this.active.set(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    this.sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  protected scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
  }

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
