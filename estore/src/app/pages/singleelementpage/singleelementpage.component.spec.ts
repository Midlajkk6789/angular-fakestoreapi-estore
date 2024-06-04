import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleelementpageComponent } from './singleelementpage.component';

describe('SingleelementpageComponent', () => {
  let component: SingleelementpageComponent;
  let fixture: ComponentFixture<SingleelementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleelementpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleelementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
