import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoPath: string = "./assets/BL_logo_square_jpg.jpg";   
  userName: string = "";
  errorMessage: string = ""; 
  validateName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; 

    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Invalid name! Must start with a capital letter & have at least 3 letters.";
    } else {
      this.errorMessage = ""; 
    }
  }

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
