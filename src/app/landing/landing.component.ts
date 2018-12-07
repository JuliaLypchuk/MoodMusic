import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {

  spotifyLink: string = '';
  trustedURLs: any[] = [];

  filters: any = [
    'danceability',
    'acousticness',
    'instrumentalness',
    'loudness'
  ];

  f1 = new FormControl(''); // TODO finish

  leftText: string;
  rightText: string;


  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.leftText = 'find your music';
    this.rightText = 'and be happy';

    this.getSpotifyLink();
    this.initForm();
  }

  getSpotifyLink() {
    // TODO finish
    this.spotifyLink = 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3;';
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
  }

  initForm() {
// TODO finish
  }

  onSubmit(data: any) {
    this.rightText = 'you click on button';
    console.log(data);
  }
}
