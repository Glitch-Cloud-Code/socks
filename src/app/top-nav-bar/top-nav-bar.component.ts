import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  languageList = [    { code: 'en', label: 'EN' },    { code: 'de', label: 'GER' },    { code: 'RU', label: 'RU' }  ];
  constructor() { }

  ngOnInit(): void {
  }


  public scrollToServices() {
    document.querySelector('#main-services-container').scrollIntoView({
      behavior: 'smooth'
    });
  }

  public scrollToAboutUs() {
    document.querySelector('#about-us-container').scrollIntoView({
      behavior: 'smooth'
    });
  }

  public scrollToBottomHero() {
    document.querySelector('#bottom-hero-container').scrollIntoView({
      behavior: 'smooth'
    });
  }

}
