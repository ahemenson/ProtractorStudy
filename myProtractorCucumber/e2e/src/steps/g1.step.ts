import { browser, protractor, ExpectedConditions } from 'protractor';
import { G1Page } from '../page-objects/g1.po';
import { Given, When, Then } from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Driver } from 'selenium-webdriver/chrome';
import { KeyEventsPlugin } from '@angular/platform-browser/src/dom/events/key_events';

const expect = chai.use(chaiAsPromised).expect;
const g1Page: G1Page = new G1Page();

browser.waitForAngularEnabled(false);

Given(/^que eu estou na tela de notícias de tecnologia$/, async () => {
    await g1Page.visit();
});

When(/^eu digito "([^"]*)" no campo de pesquisa$/, async (valor) => {
    await browser.wait(ExpectedConditions.visibilityOf(g1Page.search()), 5000).then(async () => {
        await g1Page.search().sendKeys(valor + protractor.Key.ENTER);
    });
});

Then('devo visualizar o título no resultado', async function () {
    // Write code here that turns the phrase above into concrete actions
    expect(await g1Page.getTitle()).to.equal('Invalid credentials!');
  });

