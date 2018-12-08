import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})



export class EmotionComponent implements OnInit {


  @Input() emotion: string;
  imgEmotion: string;
  emotions: any = [
    'happy':
  ];

  constructor() { }

  ngOnInit() {

  }

}
