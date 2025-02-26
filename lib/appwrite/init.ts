import { Account, Client } from 'appwrite';

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67bf5a880000dda02a7a');

const account = new Account(client);

export default account;