export class Startup {
    
    public static fromJson(json: Object): Startup {
        return new Startup(
            json['uuid'],
            json['name'],
            json['secteur'],
            json['representant'],
            json['nbrCoFondateurs'],
            json['description'],
            json['adresse'],
        );
    }

    constructor(public uuid: String,
                public name: string,
                public secteur: string,
                public representant: string,
                public nbrCoFondateurs: string,
                public description: string,
                public adresse: string) {
    }
}