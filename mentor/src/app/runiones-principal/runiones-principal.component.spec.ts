import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunionesPrincipalComponent } from './runiones-principal.component';

describe('RunionesPrincipalComponent', () => {
  let component: RunionesPrincipalComponent;
  let fixture: ComponentFixture<RunionesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunionesPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunionesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
