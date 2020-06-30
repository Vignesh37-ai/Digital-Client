import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSignatureComponent } from './document-signature.component';

describe('DocumentSignatureComponent', () => {
  let component: DocumentSignatureComponent;
  let fixture: ComponentFixture<DocumentSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
