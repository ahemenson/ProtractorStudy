import { browser, protractor, ExpectedConditions } from 'protractor';
import { G1Page } from '../page-objects/g1.po';
import { Given, When, Then } from 'cucumber';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Driver } from 'selenium-webdriver/chrome';

const expect = chai.use(chaiAsPromised).expect;
const g1Page: G1Page = new G1Page();

browser.waitForAngularEnabled(false);

Given(/^que eu estou na tela de notícias de tecnologia$/, async () => {
    await g1Page.visit();
});

When(/^eu digito "([^"]*)" no campo de pesquisa$/, {timeout: 2 * 5000}, async (valor) => {
   // await browser.wait(ExpectedConditions.visibilityOf(g1Page.search()), 1000).then(async () => {
        await g1Page.search().sendKeys(valor);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        
   // });
});


// When(/^Fill Product Name with "([^"]*)"$/, async (productName) => {
//     await browser.wait(ExpectedConditions.visibilityOf(productPage.getProductName()), 1000).then(async () => {
//         await productPage.fillProductName(productName);
//     });
// });

