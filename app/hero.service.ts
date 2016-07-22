import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(){
        return new Promise(function(resolve, reject){
            setTimeout(() => resolve(HEROES), 1000);
        })
    }

    getHeroById(id){
    	let hero = HEROES.find(hero=>hero.id===id);
    	return new Promise(function(resolve, reject){
    		setTimeout( ()=>{
    			if(!hero){
    				reject('nenhum herói com esse id');
    			}
    			resolve(hero);
    		}, 1000 );
    	})
    }
}