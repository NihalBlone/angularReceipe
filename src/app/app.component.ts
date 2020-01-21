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
    console.log("I am clicked: "+ tab);
    this.loadedFeature = tab;
  }
}
