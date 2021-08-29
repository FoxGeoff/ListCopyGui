import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBuilderComponent } from './account-builder.component';

describe('AccountBuilderComponent', () => {
  let component: AccountBuilderComponent;
  let fixture: ComponentFixture<AccountBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
