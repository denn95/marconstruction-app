import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
scrolled = false;
menuOpen = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
