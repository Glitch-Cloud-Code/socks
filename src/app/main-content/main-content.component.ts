import { Component} from "@angular/core";
import { Image, GalleryService, PlainGalleryConfig, DotsConfig, PreviewConfig } from "@ks89/angular-modal-gallery";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"],
})
export class MainContentComponent {
  constructor(private galleryService: GalleryService) {
}

  public torus;
  public plainGalleryConfig: PlainGalleryConfig = {strategy: 4,  layout: {hideDefaultPlainGallery: true}}
  public dotsConfig: DotsConfig = {visible: false};
  public previewConfig: PreviewConfig = {visible: false};
  public description = null;

  swiperConfig: any = {
    spaceBetween: 20,
    breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  };
  public breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  };

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
    if (!id) {
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

  public scrollToElement(elementName: string) {
    document.querySelector('#' + elementName).scrollIntoView({
      behavior: 'smooth'
    });
  }
}
