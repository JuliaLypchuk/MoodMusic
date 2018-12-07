import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {

  spotifyLink: string = '';
  trustedURL: any;

  filters: any = [
    'f1',
    'f2',
    'f3',
    'f4',
  ];

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getSpotifyLink();
  }

  getSpotifyLink() {
    this.spotifyLink = 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3;';
    this.trustedURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink);
  }
}
