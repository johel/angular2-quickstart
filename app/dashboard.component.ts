import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import Hero from './hero';

@Component({
	selector:'my-dashboard',
	templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit{
	heroes:Hero[];
	
	constructor(private heroService:HeroService){
		
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

	gotoDetail() { /* not implemented yet */}
}