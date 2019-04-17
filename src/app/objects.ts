export class Startup {
    id: number;
    nom: string;
    secteur: string;
    representant: string;
    cofondateurs: number;
    description: string;
    adresse?: string;
    consultant?: Consultant

    constructor(id: number, nom: string, secteur: string, representant: string, cofondateurs: number, description: string, adresse?: string, consultant?: Consultant) {
        this.id = id;
        this.nom = nom;
        this.secteur = secteur;
        this.representant = representant;
        this.cofondateurs = cofondateurs;
        this.description = description;
        this.adresse = adresse;
        this.consultant = consultant;
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