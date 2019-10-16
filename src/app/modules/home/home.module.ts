import { NgModule } from '@angular/core';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { BlackComponent } from 'src/app/components/black/black.component';
import { WhiteComponent } from 'src/app/components/white/white.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { TotalContainer } from 'src/app/containers/total/total.container';
import { CommonModule } from '@angular/common';
import { DemoservComponent } from '../../components/demoserv/demoserv.component';
import { DemoservService } from 'src/app/components/demoserv/demoserv.service';

@NgModule({
    declarations: [

        NavComponent,
        BannerComponent,
        BlackComponent,
        WhiteComponent,
        FooterComponent,
        TotalContainer,
        DemoservComponent

    ],
    imports: [
        CommonModule,
    ],
    providers: [DemoservService]
})
export class HomeModule {}
