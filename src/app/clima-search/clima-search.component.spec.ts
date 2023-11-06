import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaSearchComponent } from './clima-search.component';

describe('ClimaSearchComponent', () => {
  let component: ClimaSearchComponent;
  let fixture: ComponentFixture<ClimaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimaSearchComponent]
    });
    fixture = TestBed.createComponent(ClimaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
