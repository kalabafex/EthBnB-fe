import { Component,input} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgClass],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

imageUrl = input<string>();
avatarSize = input<"avatar-sm" | "avatar-xl">();
}
