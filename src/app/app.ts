import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Services } from './sections/services/services';
import { About } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Footer } from "./layout/footer/footer";
import { WhyUs } from "./sections/why-us/why-us";
import { Cta } from "./sections/cta/cta";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'construction-web';
  showWhatsapp = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 300) {
      this.showWhatsapp = true;
    } else {
      this.showWhatsapp = false;
    }
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

      const elements = document.querySelectorAll('.fade-up');
      elements.forEach(el => observer.observe(el)); 

    }, 100);

  }
}
