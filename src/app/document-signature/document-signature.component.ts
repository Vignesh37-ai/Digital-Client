import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-document-signature',
  templateUrl: './document-signature.component.html',
  styleUrls: ['./document-signature.component.css']
})
export class DocumentSignatureComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  filename:string = 'Uploaded Filename';

  constructor(private _formBuilder: FormBuilder) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      recipient: this._formBuilder.array([
         this.getrecipient() 
      ])
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  private getrecipient() {
    return this._formBuilder.group({
      RecipientName: ['', Validators.required],
      RecipientEmail:['', Validators.required],
    });
  }
  // add new row
private addRecipient() {
  const control = <FormArray>this.secondFormGroup.get('recipient');
  control.push(this.getrecipient());
}

// remove row
private removeRecipient(i: number) {
  const control = <FormArray>this.secondFormGroup.get('recipient');
  control.removeAt(i);
}
}