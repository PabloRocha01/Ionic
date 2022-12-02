import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SobrePage } from "./sobre.page";
import { SobrePageRoutingModule } from "./sobre.routing.module";

@NgModule({
    imports: [
        SobrePageRoutingModule,
        IonicModule,
        FormsModule,
        CommonModule
    ],
    declarations:[
        SobrePage
    ]
})

export class  SobrePageModule {}