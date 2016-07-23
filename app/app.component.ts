import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HeroService }        from './hero.service';
import  {HeroSearchComponent} from './hero-search.component';
import './rxjs-extensions';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeroSearchComponent],
  providers: [
    HeroService,
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
