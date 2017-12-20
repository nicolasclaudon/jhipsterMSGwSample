import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterMsGwSampleSharedModule, UserRouteAccessService } from './shared';
import { JhipsterMsGwSampleAppRoutingModule} from './app-routing.module';
import { JhipsterMsGwSampleHomeModule } from './home/home.module';
import { JhipsterMsGwSampleAdminModule } from './admin/admin.module';
import { JhipsterMsGwSampleAccountModule } from './account/account.module';
import { JhipsterMsGwSampleEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterMsGwSampleAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterMsGwSampleSharedModule,
        JhipsterMsGwSampleHomeModule,
        JhipsterMsGwSampleAdminModule,
        JhipsterMsGwSampleAccountModule,
        JhipsterMsGwSampleEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterMsGwSampleAppModule {}
