import { Injectable } from "@angular/core";
import { Cosplay } from "../models/cosplay.model";

@Injectable({
    providedIn: 'root'
})

export class CosplayService {
    cosplay: Cosplay [] = [
        {
            id: 1,
            year: 2021,
            name: 'Robocop',
            description: 'Cosplay de Robocop, personnage iconique du cinéma des années 80 et de la pop culture.',
            thumbnail: 'assets/pictures/robocop/robocop-mini.jpg',
            display: true
        },
        {
            id: 2,
            year: 2022,
            name: 'Dohvakiin',
            description: 'Cosplay de Dohvakiin, figure iconique de TESV Skyrim.',
            thumbnail: 'assets/picture/dohvakiin/dohvakiin-mini.jpg',
            display: true
        }
    ]
    getAllCosplay(): Cosplay[] {
        
        return this.cosplay;
        
        
    }
}