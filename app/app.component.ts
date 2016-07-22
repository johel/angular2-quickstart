import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector:'my-app',
	templateUrl:'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives:[ROUTER_DIRECTIVES, HeroesComponent],
	providers:[HeroService]
})
export class AppComponent{
	title = 'Tour of Heroes'
}