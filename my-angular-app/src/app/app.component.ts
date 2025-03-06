import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoPath: string = "./assets/BL_logo_square_jpg.jpg";   
  userName: string = "";
  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
