import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SalesComponent } from "../sales/sales.component";
import { GenresComponent } from "../genres/genres.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard',
  imports: [SalesComponent, GenresComponent, NavBarComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
