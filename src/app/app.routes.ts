import { Routes } from '@angular/router';
import { Texto } from './texto/texto'; 
import {Inicio} from './inicio/inicio';

export const routes: Routes = [
    
    { path: '', component: Inicio }, 

    { path: 'texto', component: Texto },
    

    { path: '**', redirectTo: '' } 
];