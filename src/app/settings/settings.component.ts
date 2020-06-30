import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  signature = new FormControl();
  signatureList: string[] = ['Text Signature', 'Image Signature', 'Digital Signature', 'QR Code Signature', 'Bar Code Signature', 'Stamp Signature','Hand Signature'];
  constructor() { }

  ngOnInit() {
  }

}
