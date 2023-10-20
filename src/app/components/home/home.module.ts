import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { HotshotComponent } from './header/hotshot/hotshot.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BlogSectionPostsComponent } from './blog-section/blog-section-posts/blog-section-posts.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { BestsellersListComponent } from './bestsellers/bestsellers-list/bestsellers-list.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { StatsComponent } from './stats/stats.component';
import { TeamComponent } from './team/team.component';
import { MembersComponent } from './members/members.component';
import { ShopSectionComponent } from './shop-section/shop-section.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HotshotComponent,
    BlogSectionComponent,
    BlogSectionPostsComponent,
    BestsellersComponent,
    BestsellersListComponent,
    AdvantagesComponent,
    StatsComponent,
    TeamComponent,
    MembersComponent,
    ShopSectionComponent,
    ContactComponent,
    ContactFormComponent,
    HomeComponent,
  ],
  imports: [SharedModule, AppRoutingModule],
  exports: [
    HeaderComponent,
    HotshotComponent,
    BlogSectionComponent,
    BlogSectionPostsComponent,
    BestsellersComponent,
    AdvantagesComponent,
    StatsComponent,
    TeamComponent,
    MembersComponent,
    ShopSectionComponent,
    ContactComponent,
    ContactFormComponent,
    HomeComponent,
  ],
})
export class HomeModule {}
