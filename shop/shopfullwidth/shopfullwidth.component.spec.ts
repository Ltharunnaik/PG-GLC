import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfullwidthComponent } from './shopfullwidth.component';

describe('ShopfullwidthComponent', () => {
  let component: ShopfullwidthComponent;
  let fixture: ComponentFixture<ShopfullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopfullwidthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopfullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
