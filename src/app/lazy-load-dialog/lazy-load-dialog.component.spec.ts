import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadDialogComponent } from './lazy-load-dialog.component';

describe('LazyLoadDialogComponent', () => {
  let component: LazyLoadDialogComponent;
  let fixture: ComponentFixture<LazyLoadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
