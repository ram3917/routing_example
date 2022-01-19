import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavcomponentComponent,
    NotFoundComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot([      
      {
        path: 'archive/:year/:month',
        component: ArchiveComponent
      },
      {
        path: '',
        component: NavcomponentComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
