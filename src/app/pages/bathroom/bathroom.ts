import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bathroom',
  imports: [CommonModule,RouterLink],
  templateUrl: './bathroom.html',
  styleUrl: './bathroom.css',
})
export class Bathroom implements AfterViewInit{
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    //window.scrollTo(0, 0);
    this.titleService.setTitle('Bathroom Renovation Contractor in Long Island, NY | Ayala Construction');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Professional bathroom renovation contractor in Long Island, NY. We specialize in modern bathroom remodeling, tile installation, plumbing upgrades, and luxury finishes. Free estimates available.',
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        { threshold: 0.2 }
      );
      const fadeUpElements = document.querySelectorAll('.fade-up');
      fadeUpElements.forEach(el => observer.observe(el));
    }, 100);
  }
}
