import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorksComponent } from './pages/works/works.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { RecentPostsComponent } from './pages/recent-posts/recent-posts.component';
import { FeaturedWorksComponent } from './pages/featured-works/featured-works.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FooterComponent,
      NavbarComponent,
      WorksComponent,
      BlogComponent,
      ContactsComponent,
      RecentPostsComponent,
      FeaturedWorksComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
