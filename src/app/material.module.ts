import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule
  ]
})

export class MaterialModule { }