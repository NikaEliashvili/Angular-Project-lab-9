import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(
        (data) => {
          this.albums = data;
        },
        (error) => {
          console.error('Error fetching albums', error);
        }
      );
  }

  viewPhotos(albumId: number): void {
    this.router.navigate([`/albums/${albumId}/photos`]);
  }
}
