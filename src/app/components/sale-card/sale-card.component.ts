import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlbumCard } from '../../interfaces/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-card',
  imports: [],
  templateUrl: './sale-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleCardComponent {
  public album = input.required<AlbumCard>();
  
  constructor(
    private router: Router
  ) {}
  
  goToAlbumArticle() {
    this.router.navigate(['/article'])
  }

}
