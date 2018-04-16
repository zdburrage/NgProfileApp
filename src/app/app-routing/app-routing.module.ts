import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from '../home-body/home-body.component';
import { MyStoryComponent } from '../my-story/my-story.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeBodyComponent
  },
  {
    path: 'mystory',
    component: MyStoryComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
