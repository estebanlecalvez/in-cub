export class Startup {
    id: number;
    name: string;
    secteur: string;
    representant: string;
    nbrCoFondateurs: number;
    description: string;
    adresse?: string;
    consultant?: Consultant

    constructor(id: number, name: string, secteur: string, representant: string, nbrCoFondateurs: number, description: string, adresse?: string, consultant?: Consultant) {
        this.id = id;
        this.name = name;
        this.secteur = secteur;
        this.representant = representant;
        this.nbrCoFondateurs = nbrCoFondateurs;
        this.description = description;
        this.adresse = adresse;
    }
}

export class Consultant {
    id: number;
    name: string;
    lastName: string;
    description: string;

    constructor(id: number, name: string, lastName: string, description: string){
        this.id = id;
        this.name = name;
        this.lastName =lastName;
        this.description = description;
    }
}