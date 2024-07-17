import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNuber: number){
        super(name, accountNuber)
    }

    getLoan = ():void => {
        console.log('Voce pegou um emprestimo')
    }

    deposit = ():void => {
        console.log('A empresa depositou')
    }
}

