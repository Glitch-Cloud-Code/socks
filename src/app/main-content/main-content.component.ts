import { Component, OnInit } from "@angular/core";
import { Image, GalleryService, PlainGalleryConfig, DotsConfig, PreviewConfig } from "@ks89/angular-modal-gallery";
import { isNullOrUndefined } from 'util';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"],
})
export class MainContentComponent implements OnInit {
  constructor(private galleryService: GalleryService) {

  }

  ngOnInit(): void {}

  public plainGalleryConfig: PlainGalleryConfig = {strategy: 4,  layout: {hideDefaultPlainGallery: true}}
  public dotsConfig: DotsConfig = {visible: false};
  public previewConfig: PreviewConfig = {visible: false};
  public description = null;

  public images: Image[] = [
    new Image(0, {
      img: "../assets/images/all-in.jpg",
      description: "smems",
      title: "smems"
    }),
    // new Image(1, {
    //   img: "../assets/images/socks-teenagers.jpg",
    //   extUrl: "http://www.google.com",
    //   description: "pepoga"
    // })
  ];

  public openGallery(id: number) {
    if (!isNullOrUndefined(id)) {
     this.galleryService.openGallery(id, 0);
     this.showDescription(id);
    }
  }

  private showDescription(id: number) {
    this.description = this.images[id].modal.description;
  }

  private hideDescription() {
    this.description = null;
  }

  public onModalClosed(event) {
    this.hideDescription();
  }
}
