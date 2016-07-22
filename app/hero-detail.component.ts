import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Hero from './hero';
import {HeroService} from './hero.service';


@Component({
    selector:'my-hero-detail',
    templateUrl:'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit, OnDestroy{
    @Input()
    hero:Hero;
    constructor(private heroService:HeroService, private activatedRoute:ActivatedRoute){

    }
    ngOnInit(){
    	this.getHero();
    }

    ngOnDestroy(){
    	this.sub.unsubscribe();
    }

    goBack() {
		  window.history.back();
		}

    getHero(){
    	this.sub = this.activatedRoute.params.subscribe(params=>{
    		let id = +params['id'];
    		console.log(id);
    		this.heroService.getHeroById(id)
	    		.then(hero => {
	    			this.hero = hero;
	    		}, error => {
	    			alert(error);
	    		})
    	})
    }
    
}