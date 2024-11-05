import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReunionesComponent } from './admin-reuniones.component';

describe('AdminReunionesComponent', () => {
  let component: AdminReunionesComponent;
  let fixture: ComponentFixture<AdminReunionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReunionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
