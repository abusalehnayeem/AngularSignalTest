import { Component, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratedService } from './generated-api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactFormDto } from './contact-fom-dto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'api-client';

  contactFormDto: ContactFormDto = {
    name: '',
    email: '',
    message: ''
  };

  private readonly restService = Inject(GeneratedService);

  //contactRecipients = toSignal(this.loadRecipient(), { initialValue: [] });

  constructor() {}

  loadRecipient() {
    this.restService.recipient();
  }

  onSubmit(frm: NgForm) {
    console.log(frm.value);
  }
}
