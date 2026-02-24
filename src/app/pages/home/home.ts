import { AfterViewInit, Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Services } from '../../sections/services/services';
import { About } from '../../sections/about/about';
import { Cta } from '../../sections/cta/cta';
import { WhyUs } from '../../sections/why-us/why-us';
import { Projects } from '../../sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero,Services,About,  Projects, WhyUs, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
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
