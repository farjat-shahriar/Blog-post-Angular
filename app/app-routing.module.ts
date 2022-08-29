import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './Admin/dashboard/comments/comments.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { PagesComponent } from './Admin/dashboard/pages/pages.component';
import { PostsComponent } from './Admin/dashboard/posts/posts.component';
import { SettingsComponent } from './Admin/dashboard/settings/settings.component';
import { HomeComponent } from './Admin/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
