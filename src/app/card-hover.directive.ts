import { Directive, OnInit, ElementRef, HostListener, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector: '[dirCardHover]'
})
export class CardHoverDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {    
    }

    @HostListener('mouseenter') mouseIn(eventData: Event) {
        this.backgroundColor = 'green';
    }

    @HostListener('mouseleave') mouseOut(eventData: Event) {
        this.backgroundColor = 'transparent';
    }
}