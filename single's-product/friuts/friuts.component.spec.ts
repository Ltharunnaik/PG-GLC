import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriutsComponent } from './friuts.component';

describe('FriutsComponent', () => {
  let component: FriutsComponent;
  let fixture: ComponentFixture<FriutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
