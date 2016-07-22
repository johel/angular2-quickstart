import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HeroService} from './hero.service';
import Hero from './hero';

@Component({
	selector:'my-dashboard',
	templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit{
	heroes:Hero[];
	
	constructor(private heroService:HeroService, private router:Router){
		
	}

	ngOnInit(){
		this.getHeroes();
	}

	getHeroes(){
		var vm = this;
		vm.heroService.getHeroes().then(function(heroes){
			vm.heroes =[].concat(heroes).slice(0,4);
		})
	}

	gotoDetail(hero: Hero) {
	  let link = ['/heroes', hero.id];
	  this.router.navigate(link);
	}

}