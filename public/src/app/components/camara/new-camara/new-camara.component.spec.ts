import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCamaraComponent } from './new-camara.component';

describe('NewCamaraComponent', () => {
  let component: NewCamaraComponent;
  let fixture: ComponentFixture<NewCamaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCamaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
