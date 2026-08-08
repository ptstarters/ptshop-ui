import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent {

  acceptedTerms: boolean = false;

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigateByUrl('/register');
  }

  acceptTerms(): void {
    if (!this.acceptedTerms) {
      return;
    }

    this.router.navigateByUrl('/empty-cart');
  }
}
