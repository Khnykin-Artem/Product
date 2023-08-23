import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAboutPageComponent } from './product-about-page.component';

describe('ProductAboutPageComponent', () => {
  let component: ProductAboutPageComponent;
  let fixture: ComponentFixture<ProductAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAboutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
