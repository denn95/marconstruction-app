import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-kitchen',
  imports: [CommonModule, RouterLink],
  templateUrl: './kitchen.html',
  styleUrl: './kitchen.css',
})
export class Kitchen implements AfterViewInit {
constructor(private titleService: Title, private metaService: Meta) { }
ngOnInit() {
this.titleService.setTitle(
    'Kitchen Remodeling Contractor in NYC | Ayala Construction'
  );

  this.metaService.updateTag({
    name: 'description',
    content: 'Professional kitchen remodeling contractor in NYC. We specialize in custom cabinets, countertops, flooring, plumbing and electrical upgrades. Free estimates available.'
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
