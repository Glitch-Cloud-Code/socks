import { Component, Input, OnInit } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

  images: Image[] = [];

}
