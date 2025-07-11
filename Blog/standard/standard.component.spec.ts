import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardComponent } from './standard.component';

describe('StandardComponent', () => {
  let component: StandardComponent;
  let fixture: ComponentFixture<StandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
