import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeroImageComponent } from './subscription/hero-image/hero-image.component';
import { FormComponent } from './subscription/form/form.component';
import { DragAndDropDirective } from './core/directives/drag-and-drop.directive';
import { UploadComponent } from './core/components/upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    HeaderComponent,
    FooterComponent,
    HeroImageComponent,
    FormComponent,
    DragAndDropDirective,
    UploadComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
