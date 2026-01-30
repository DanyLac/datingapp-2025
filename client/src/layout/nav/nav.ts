import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/service/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected creds:any= {}

  login(){
    this.accountService.login(this.creds).subscribe({
      next: result => {
        console.log(result);
        // une fois logged reinitialise le form
        this.creds={}
      } ,
      error: error => alert(error.message)
    });
  }

  logout(){
    this.accountService.logout();
  }
}
