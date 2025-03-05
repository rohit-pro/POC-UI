import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartingComponent } from './carting.component';

describe('CartingComponent', () => {
  let component: CartingComponent;
  let fixture: ComponentFixture<CartingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartingComponent]
    });
    fixture = TestBed.createComponent(CartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
