export default class User {
    id: string;
    name: string;
    username: string;
    email: string;

    constructor(id: string, nom: string, prenom: string, email: string) {
        this.id = id;
        this.name = nom;
        this.username = prenom;
        this.email = email;
    }
}
