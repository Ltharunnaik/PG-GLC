import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewComponent } from './gridview.component';

describe('GridviewComponent', () => {
  let component: GridviewComponent;
  let fixture: ComponentFixture<GridviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
