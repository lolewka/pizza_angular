import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[collInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';


  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  private _backgroundColor: string = '';

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;

  @HostBinding('class.isOnFocus')
  get getOnFocus() {
    return this._isOnFocus;
  }

  ngOnInit() {
    this.changeElementBgColor(this.coolInputDefaultBgColor)
    this.rend.setAttribute(this.el.nativeElement, 'placeholder', this.el.nativeElement.getAttribute('placeholder') + '*');

  }

  @HostListener('focus')
  onFocus() {
    this.changeElementBgColor(this.coolInputFocusBgColor);
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(target);
    console.log(event);
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color

  }


}
