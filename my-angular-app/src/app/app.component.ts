import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoPath: string = "./assets/BL_logo_square_jpg.jpg";   

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
