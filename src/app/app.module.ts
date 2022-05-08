import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopNavBarComponent } from "./top-nav-bar/top-nav-bar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { GalleryModule } from "@ks89/angular-modal-gallery";
import { SwiperModule } from "swiper/angular";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TopNavBarComponent, MainContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    GalleryModule.forRoot(),
    SwiperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {    return new TranslateHttpLoader(http);}
