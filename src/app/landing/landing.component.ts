import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getBodyNode } from '@angular/animations/browser/src/render/shared';
import { withIdentifier } from 'codelyzer/util/astQuery';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MoodParamsModel } from '../models/mood-params.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {

  spotifyLink = {};
  trustedURLs: any[] = [];
  spinner: boolean = false;

  filters: any;
  moodParams: MoodParamsModel;

  responseData: any;

  moodParamsForm: FormGroup;

  leftText: string;

  moods: any = [
    'happy',
    'peaceful',
    'relaxing',
    'calm'
  ];
  emotion: string;

  lorenIpsum: string;

  constructor(public sanitizer: DomSanitizer, private http: HttpClient) {

    this.moodParams = new MoodParamsModel();

    this.filters = [
      'danceability',
      'acousticness',
      'instrumentalness',
      'loudness'
    ];

    this.leftText = 'find your music';

    this.lorenIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
      'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }

  ngOnInit() {
    this.initForm();
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

  prepareData(form: any) {

    this.moodParams.text = form.text ? form.text : this.moodParams.text; // TODO set here smth more interest
    this.moodParams.danceability = form.danceability ? form.danceability / 100 : 0;
    this.moodParams.acousticness = form.acousticness ? form.acousticness / 100 : 0;
    this.moodParams.instrumentalness = form.instrumentalness ? form.instrumentalness / 100 : 0;
    this.moodParams.loudness = form.loudness ? form.loudness / 100 : 0;
  }

  onSubmit(data: any) {
    document.getElementById('divider').style.opacity = '1';

    this.prepareData(this.moodParamsForm.value);
    console.log(this.moodParamsForm.value);
    this.sendRequest();
  }

  sendRequest() {
    this.trustedURLs = [];
    this.spinner = true;
    this.http.post('https://demo-mood-music.herokuapp.com/', this.moodParams)
        .subscribe((res) => {
          if ( res ) {
            this.setResponseData(res);
            this.spinner = false;

            window.scrollTo({
              top: document.body.offsetHeight,
              behavior: 'smooth'
            });

          }
        }, error => {
          console.log(error);
          alert(error);
          this.spinner = false;
        });
  }

  setResponseData(res: any) {
    this.responseData = res;
    this.emotion = this.responseData.mood.toLowerCase()
                       .replace(/ .+/, '');

    setTimeout(() => {
      const emotionEls = document.querySelectorAll('app-emotion');
      Array.from(emotionEls)
           .forEach(el => el.classList.add('visible'));
    }, 1);
    this.responseData.tracks.forEach((track) => {
      this.getSpotifyLink(track);
    });
  }

  getSpotifyLink(track) {
    const link: string = track.external_urls.spotify;
    if ( link ) {
      const index = link.indexOf('track');
      const link1 = link.slice(0, index);
      const link2 = link.slice(index, link.length);
      const transformedLink = link1 + 'embed/' + link2;
      this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(transformedLink));
    } else {
      this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3;'));
    }
  }
}
