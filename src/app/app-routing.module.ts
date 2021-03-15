import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'hackton', pathMatch: 'full'
  },
  {
    path: 'hackton',
    loadChildren: () => import('./components/challenge/challenge.module').then(m => m.ChallengeModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users/user.module').then(m => m.UserModule),
  },
  // {
  //   path: 'classrooms',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./components/classroom/classroom.module').then(m => m.ClassroomModule),
  // },
  // {
  //   path: 'classrooms/:id/contents',
  //   loadChildren: () => import('./components/content/content.module').then(m => m.ContentModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
