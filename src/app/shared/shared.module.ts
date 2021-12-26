import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    CommonModule,
  ],
  providers: []

})
  export class SharedModule{}
