import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[app-dropdown]'
})
export class Dropdown{
    @HostBinding('class.open') isOpen : boolean = false;

    @HostListener('click') onClick(){
        this.isOpen = !this.isOpen;
    }

}