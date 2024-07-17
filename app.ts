// Dio bank

import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"




const peopleAccount: PeopleAccount = new PeopleAccount(1, 'dez', 4)
console.log(peopleAccount)
peopleAccount.deposit()