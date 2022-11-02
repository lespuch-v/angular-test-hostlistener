import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective {
  @Input('appInputDirective') format: any;
  key:any;
  constructor(private  element: ElementRef) { }

  // @HostListener('load') onLoad(){
  //   this.element.nativeElement.classList.add('super-dark')
  // }
  @HostListener('blur') onBlur(){
    let value: string = this.element.nativeElement.value;
    if(this.format == 'lowerCase'){
      this.element.nativeElement.value = value.toLowerCase();
      // this.element.nativeElement.classList.add('super-dark')
    }else{
      this.element.nativeElement.value = value.toUpperCase();
    }
  }

  @HostListener('window:load',['$event'])
  onPageLoad(event: Event) {
    if(this.format === 'darkMode'){
      this.element.nativeElement.classList.add('super-dark')
      this.element.nativeElement.classList.add('super-dark-text')
    }

    console.log('loaded',event);
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    console.log(event)
  }

}
