import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CutStringPipe } from './pipes/cut-string.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    
    HeaderComponent,
         CutStringPipe,
         SpinnerComponent,
         SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports: [
    HeaderComponent,
    CutStringPipe,
    SpinnerComponent,
    SelectComponent
  ]
})
export class SharedModule { }
