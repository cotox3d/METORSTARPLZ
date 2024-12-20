import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlumnoComponent } from './admin-alumno.component';

describe('AdminAlumnoComponent', () => {
  let component: AdminAlumnoComponent;
  let fixture: ComponentFixture<AdminAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
