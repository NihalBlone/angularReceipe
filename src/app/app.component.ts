import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cooking-app';
  loadedFeature = 'recipe'; 

  onNavigate(tab: string){
    this.loadedFeature = tab;
  }
}
