import { browser } from 'protractor';
import { PokemonPage } from '../../pokemon.po';  //e2e/src/pokemon.po.ts
import { Given, When, Then } from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;
const pokemonPage: PokemonPage = new PokemonPage();

browser.waitForAngularEnabled(false);

Given('que eu estou na tela de listagem de pokémons', async function () {
    await pokemonPage.visit();

});

When('eu digito {valor} no campo de pesquisa', async function (valor) {
    await pokemonPage.inputValue(valor);
});

Then('devo visualizar três pokémons no resultado', async function () {
    expect(await pokemonPage.getPokemons.length).to.equal('3');
});

