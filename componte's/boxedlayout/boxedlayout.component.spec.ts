import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedlayoutComponent } from './boxedlayout.component';

describe('BoxedlayoutComponent', () => {
  let component: BoxedlayoutComponent;
  let fixture: ComponentFixture<BoxedlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxedlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxedlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
