import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminiMentoresComponent } from './admini-mentores.component';

describe('AdminiMentoresComponent', () => {
  let component: AdminiMentoresComponent;
  let fixture: ComponentFixture<AdminiMentoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminiMentoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminiMentoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
