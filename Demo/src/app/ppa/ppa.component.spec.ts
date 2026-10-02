import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaComponent } from './ppa.component';

describe('PpaComponent', () => {
  let component: PpaComponent;
  let fixture: ComponentFixture<PpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
