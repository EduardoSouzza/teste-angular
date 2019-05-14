import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../services/appSettings.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {

  constructor(private appSettings: AppSettingsService) { 
  }

  ngOnInit() {
  }

}
