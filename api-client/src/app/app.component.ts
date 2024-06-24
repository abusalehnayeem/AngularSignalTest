import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratedService } from './generated-api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactFormDto, Recipient } from './contact-fom-dto';
import { HttpClientModule } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  providers: [GeneratedService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'api-client';

  loading = signal(false);

  contactFormDto: ContactFormDto = {
    id: 0,
    email: '',
    message: '',
  };

  private readonly restService = inject(GeneratedService);

  recipients = toSignal(this.restService.recipient(), { initialValue: [] });

  constructor() {
    effect(() => {
      this.contactFormDto.id = this.contactRecipients()[0]?.id;
    });
  }
  loadRecipient(): Observable<Recipient[]> {
    return this.restService.recipient().pipe(
      map((recipients) => {
        return recipients as unknown as Recipient[];
      }),
      catchError((error) => {
        console.error('Error loading recipients:', error);
        return of([]);
      })
    );
  }

  contactRecipients = computed(() => {
    return this.recipients();
  });

  onSubmit(frm: NgForm) {
    console.log(frm.value);
  }
}
