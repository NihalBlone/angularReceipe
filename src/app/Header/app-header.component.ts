import { Component, Output , EventEmitter} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html'
    

})
export class AppHeaderComponent{
    @Output() feature = new EventEmitter<string>();

    onSelect(openTab: string){
        console.log("I am clicked: " + openTab);
        this.feature.emit(openTab);
    }

}