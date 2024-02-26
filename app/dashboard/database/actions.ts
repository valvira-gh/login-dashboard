import { createKysely } from "@vercel/postgres-kysely";

interface Database {
    person: PersonTable;
    pet: PetTable;
    movie: MovieTable;
}