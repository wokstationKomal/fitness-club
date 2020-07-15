import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BenefitsCardsComponent } from './Components/benefits-cards/benefits-cards.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { GalleryComponent } from './Components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BenefitsCardsComponent,
    FooterComponent,
    TestimonialsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
