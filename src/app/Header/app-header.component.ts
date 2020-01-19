import { Component, Output , EventEmitter} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html'
    

})
export class AppHeaderComponent{
    @Output() feature = new EventEmitter<string>();

    onSelect(feature: string){
        this.feature.emit(feature);
    }

}