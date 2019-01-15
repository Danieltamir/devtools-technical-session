import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDebuggingComponent } from './js-debugging.component';

describe('JsDebuggingComponent', () => {
  let component: JsDebuggingComponent;
  let fixture: ComponentFixture<JsDebuggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDebuggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDebuggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
