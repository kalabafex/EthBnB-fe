import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button'
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { fontAwesomeIcons } from './shared/font-awesome-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initFontAwesome();
  }
  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  faIconLibrary = inject(FaIconLibrary)
}
