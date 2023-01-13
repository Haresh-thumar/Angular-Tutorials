import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadDialogComponent } from './lazy-load-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LazyLoadDialogComponent', () => {
  let component: LazyLoadDialogComponent;
  let fixture: ComponentFixture<LazyLoadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyLoadDialogComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
