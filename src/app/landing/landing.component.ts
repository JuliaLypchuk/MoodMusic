import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {getBodyNode} from '@angular/animations/browser/src/render/shared';
import {withIdentifier} from 'codelyzer/util/astQuery';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MoodParamsModel } from '../models/mood-params.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {

  spotifyLink: string = '';
  trustedURLs: any[] = [];

  filters: any;
  moodParams: MoodParamsModel;

  moodParamsForm: FormGroup; // TODO finish

  leftText: string;

  moods: any = [
    'happy',
    'peaceful',
    'relaxing',
    'calm'
  ];
  emotion = 'happy';

  constructor(public sanitizer: DomSanitizer, private http: HttpClient) {

    this.moodParams = new MoodParamsModel();

    this.filters = [
      'danceability',
      'acousticness',
      'instrumentalness',
      'loudness'
    ];

    this.leftText = 'find your music';
  }

  ngOnInit() {
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
    this.moodParamsForm = new FormGroup({
      text: new FormControl('', Validators.required),
      danceability: new FormControl(''),
      acousticness: new FormControl(''),
      instrumentalness: new FormControl(''),
      loudness: new FormControl(''),
    });
  }

  prepareData() {
    this.http.post('https://demo-mood-music.herokuapp.com/', this.moodParams)
        .subscribe((res) => {
          if ( res ) {
            console.log(res);
          }
        }, error => {
          alert(error);
        });

  }

  onSubmit(data: any) {
    document.getElementById('divider').style.opacity = '1';
    const emotionEls = document.querySelectorAll('app-emotion');
    Array.from(emotionEls).forEach(el => el.classList.add('visible'));

    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth'
    });

    this.prepareData();
  }
}
