import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IloadingComponent} from './iloading.component';

describe('IloadingComponent', () => {
  let component: IloadingComponent;
  let fixture: ComponentFixture<IloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IloadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
