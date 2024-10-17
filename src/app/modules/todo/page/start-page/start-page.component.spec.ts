import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('start page has logo', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img.start-container__logo')
    expect(img.src).toContain('images/to-do.png')
    expect(img.alt).toBe('todo-logo')
  })

  it('start page has link to todo widget', () => {
    const link: HTMLLinkElement = fixture.nativeElement.querySelector('a.start-link')
    expect(link).toBeTruthy()
    expect(link.getAttribute('routerLink')).toBe('/todo-page')
    expect(link.textContent).toContain('Start your')
  })
});
