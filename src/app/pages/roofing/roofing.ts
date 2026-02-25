import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roofing',
  imports: [RouterLink, CommonModule],
  templateUrl: './roofing.html',
  styleUrl: './roofing.css',
})
export class Roofing implements AfterViewInit {

  constructor(private titleService: Title, private metaService: Meta) { }
  ngOnInit() {
    this.titleService.setTitle('Licensed Roofing Contractor in Long Island, NY | Ayala Construction');
    this.metaService.updateTag({ name: 'description', content: 'Professional roof installation, replacement, and repair services in Long Island, NY. We provide reliable roofing solutions for residential properties.' });
  }

  ngAfterViewInit(): void {
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
