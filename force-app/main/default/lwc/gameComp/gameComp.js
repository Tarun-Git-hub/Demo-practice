import { LightningElement } from 'lwc';
import { checkGuess } from './gameDaa';
export default class GameComp extends LightningElement {
    gameResult='';
    userInput='';
    connectedCallback(){
         checkGuess;
    }
    handleResult(event){
        this.gameResult = this.template.getElementById("gameResult");
        this.userInput = this.template.getElementById("userInput");
        let randomNumber = Math.ceil(Math.random() * 100);

    }
    
}