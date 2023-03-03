import { Client, Account } from 'appwrite';
const client = new Client();


client
    .setEndpoint('http://localhost/v1')
    .setProject('6391f2ae06f40acb1a3f');

export const account = new Account(client);