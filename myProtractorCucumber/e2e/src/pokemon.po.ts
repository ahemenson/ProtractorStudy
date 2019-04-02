import { browser, by, element } from 'protractor';

export class PokemonPage {



  inputValue(value) {
    element(by.id('input_0')).sendKeys(value);
  }

  visit() {
    return browser.get('/#!/list');
  }

  getPokemons() {
    return element.all(by.repeater('pokemon in vm.pokemons'));
  }
}

