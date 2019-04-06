import { TestBed, async, ComponentFixture, inject, tick, fakeAsync, RouterTestingModule  } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { ElementListComponent } from './element-list.component';

describe('ElementListComponent', () => {

  let component: ElementListComponent;
  let fixture: ComponentFixture<ElementListComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        ElementListComponent
      ],
      imports: [HttpClientModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should creat', () => {
    expect(component).toBeTruthy();
  });
});
