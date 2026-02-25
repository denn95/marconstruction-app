import { AfterViewInit, Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Services } from '../../sections/services/services';
import { About } from '../../sections/about/about';
import { Cta } from '../../sections/cta/cta';
import { WhyUs } from '../../sections/why-us/why-us';
import { Projects } from '../../sections/projects/projects';
import { Meta, Title } from '@angular/platform-browser';
import { AreaService } from "../../sections/area-service/area-service";

@Component({
  selector: 'app-home',
  imports: [Hero, Services, About, Projects, WhyUs, Cta, AreaService],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('General Contractor in Long Island, NY | Ayala Construction');
    this.metaService.addTags([
      { name: 'description', content: 'Licensed home remodeling and general construction contractor serving Nassau and Suffolk County, Long Island. Free estimates available.' },
      { name: 'keywords', content: 'Licensed general contractor serving Nassau and Suffolk County, Long Island. Residential construction, remodeling, roofing, plumbing and more. Free estimates.' },
    ]);
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
