import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestamenotrComponent } from './encuestamenotr.component';

describe('EncuestamenotrComponent', () => {
  let component: EncuestamenotrComponent;
  let fixture: ComponentFixture<EncuestamenotrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestamenotrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestamenotrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
