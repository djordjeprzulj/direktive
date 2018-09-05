import { Directive, OnInit, ElementRef, HostListener, Renderer2, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[dirCardHover]'
})
export class CardHoverDirective implements OnInit {
    @Input() defaultColor: string = 'gray';
    @Input('dirCardHover') highlightedColor: string = 'yellow';

    @HostBinding('style.backgroundColor') backgroundColor;
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {    
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseIn(eventData: Event) {
        this.backgroundColor = this.highlightedColor;
    }

    @HostListener('mouseleave') mouseOut(eventData: Event) {
        this.backgroundColor = this.defaultColor;
    }
}