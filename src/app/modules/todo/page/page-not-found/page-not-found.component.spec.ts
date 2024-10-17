import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The page is marked "Page not found"', () => {
    const headingElems = fixture.nativeElement.querySelector('h2');
    expect((headingElems.textContent as string).trim()).toBe('Page not found')
  })

  it('class .page-not-found__title exist', () => {
    const element = fixture.nativeElement.querySelector('.page-not-found__title')
    expect(element).toBeTruthy()
  })
});
