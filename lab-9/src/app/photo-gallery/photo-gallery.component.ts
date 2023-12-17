// photo-gallery.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
})
export class PhotoGalleryComponent implements OnInit {
  albumId?: number;
  photos: any[] = [];
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumIdParam = params?.get('id');
      if (albumIdParam !== null && albumIdParam !== undefined) {
        this.albumId = +albumIdParam;
      }
      this.loadPhotos();
    });
  }

  loadPhotos(): void {
    this.isLoading = true;
    this.http
      .get<any[]>(
        `https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`
      )
      .subscribe(
        (data) => {
          this.photos = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching photos', error);
          this.isLoading = false;
        }
      );
  }
}
