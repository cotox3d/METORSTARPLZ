import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisdebarComponent } from './sisdebar.component';

describe('SisdebarComponent', () => {
  let component: SisdebarComponent;
  let fixture: ComponentFixture<SisdebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisdebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisdebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
