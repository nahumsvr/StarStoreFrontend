import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GenreSectionComponent } from "../genre-section/genre-section.component";

@Component({
  selector: 'app-genres',
  imports: [GenreSectionComponent],
  templateUrl: './genres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenresComponent {

}
