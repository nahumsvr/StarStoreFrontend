import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface AlbumCard {
  id: string,
  name: string,
  artist: string,
  price: number,
  cover: string,
}

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  public album = input.required<AlbumCard>()
}
