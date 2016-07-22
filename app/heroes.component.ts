import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Hero from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HEROES} from './mock-heroes';

@Component({
	selector:'my-heroes',
	templateUrl:'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    selectedHero:Hero;
    heroes:Hero[];
    isLoading:boolean = true;
    constructor(private heroService:HeroService, private router:Router){
        
    }
    ngOnInit(){
        this.getHeroes();
    }

    getHeroes(){
        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = [].concat(heroes);
                this.isLoading = false;
            });
    }
    onSelect(hero:Hero){
        this.selectedHero = hero;
    }

    gotoDetail(){
      this.router.navigate(['/heroes', this.selectedHero.id]);
    }
}


