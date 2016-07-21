import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector:'my-app',
	template: `
  <h1>{{title}}</h1>
  <a [routerLink]="['/']" routerLinkActive="active">Dashboard</a>
  <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  <router-outlet></router-outlet>
`,
	directives:[ROUTER_DIRECTIVES, HeroesComponent],
	providers:[HeroService]
})
export class AppComponent{
	title = 'Tour of Heroes'
}