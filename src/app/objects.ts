export class Startup {
    _id: number;
    name: string;
    secteur: string;
    representant: string;
    nbrCoFondateurs: number;
    description: string;
    adresse?: string;
    consultant?: Consultant

    constructor(_id: number, name: string, secteur: string, representant: string, nbrCoFondateurs: number, description: string, adresse?: string, consultant?: Consultant) {
        this._id = _id;
        this.name = name;
        this.secteur = secteur;
        this.representant = representant;
        this.nbrCoFondateurs = nbrCoFondateurs;
        this.description = description;
        this.adresse = adresse;
    }
}

export class Consultant {
    _id: number;
    name: string;
    lastName: string;
    description: string;

    constructor(_id: number, name: string, lastName: string, description: string){
        this._id = _id;
        this.name = name;
        this.lastName =lastName;
        this.description = description;
    }
}