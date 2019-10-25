import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SmpSharedModule } from 'app/shared/shared.module';
import { SmpCoreModule } from 'app/core/core.module';
import { SmpAppRoutingModule } from './app-routing.module';
import { SmpHomeModule } from './home/home.module';
import { SmpEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SmpSharedModule,
    SmpCoreModule,
    SmpHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SmpEntityModule,
    SmpAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class SmpAppModule {}
