import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchMailComponent } from './search-mail.component';
import { SEARCHMAIL_ROUTES } from './search-mail.routes';


@NgModule({
  declarations: [
    SearchMailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SEARCHMAIL_ROUTES),
  ],
  providers: [],
})
export class SearchMailModule { }
