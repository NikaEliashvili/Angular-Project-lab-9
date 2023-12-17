// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/photos/:id', component: PhotoGalleryComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }, // Redirect any unmatched route to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
