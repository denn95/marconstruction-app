import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
 selectedProject: any = null;
  currentImageIndex = 0;

  projects = [
    {
      title: 'Residential Living Room Drywall Installation',
      description: 'Complete drywall installation and finishing for a modern living room renovation in NYC.',
      cover: 'assets/projects/sala_remodelacion.jpg',
      images: [
        'assets/projects/sala_remodelacion.jpg',
        'assets/projects/sala_remodelation_2.jpg',
        'assets/projects/sala_remodelation_3.jpg'
      ]
    },
    {
      title: 'Bathroom Ceiling & Wall Repair',
      description: 'Modern bathroom upgrades with custom tile work, plumbing, lighting and premium finishes.',
      cover: 'assets/projects/diseño_banio.jpg',
      images: [
        'assets/projects/diseño_banio.jpg',
        'assets/projects/diseño_banio1.jpg',
        'assets/projects/diseño_banio2.jpg',
        'assets/projects/diseño_banio3.jpg',
        'assets/projects/diseño_banio4.jpg'
      ]
    },
    {
      title: 'Kitchen Remodeling Project',
      description: 'High-end kitchen and bathroom renovation including plumbing, tile work and premium finishes.',
      cover: 'assets/projects/remodelacion_cocina.jpg',
      images: [
        'assets/projects/remodelacion_cocina.jpg',
        'assets/projects/kitchen_project_1.jpg',
        'assets/projects/kitchen_project_2.jpg',
        'assets/projects/kitchen_project_3.jpg',
        'assets/projects/kitchen_project_4.jpg'
      ]
    }
  ];

  openProject(project: any) {
    this.selectedProject = project;
    this.currentImageIndex = 0;
  }

  closeProject() {
    this.selectedProject = null;
  }

  nextImage() {
    if (this.currentImageIndex < this.selectedProject.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
