import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faPhone,
  faLocationDot,
  faEnvelope,
  faCode,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected readonly title = signal('personalsite');
  faGithub = faGithub;
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faCode = faCode;
  faUser = faUser;
  faBriefCase = faBriefcase;
}
