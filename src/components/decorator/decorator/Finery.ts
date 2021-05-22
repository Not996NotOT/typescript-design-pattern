import Person from "../class/Person";

export default class Finery extends Person {
    protected Person: Person | undefined;
    public Decorate(person: Person) {
        this.Person = person;
    }

    Show() {
        if (this.Person !== undefined) {
            this.Person.Show();
        }
    }
}