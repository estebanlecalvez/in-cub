import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform numbers of cofounders 
 * to String 
*/
@Pipe({ name: 'CoFoundersPipe' })
export class CoFoundersPipe implements PipeTransform {
    transform(value: number): String {
        if (value > 2) {
            return "GROUP";
        } else if (value == 2) {
            return "COUPLE";
        }else if (value == 1) {
            return "UNIQUE";
        }
    }
}

@Pipe({ name: 'AdressPipe' })
export class AdressPipe implements PipeTransform {
    transform(value: String): String {
        if (value == null || value == "") {
            return "No adress delivered.";
        }else{
            return value;
        }
    }
}


