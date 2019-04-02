import { browser, by, element } from 'protractor';
import { async } from 'q';

export class G1Page {

  search (){
    //return  element(by.id('busca-campo'));
    return element(by.xpath('//*[@id="busca-campo"]'));
    //console.log("asdfasdf");
  }

  visit() {
    browser.get('https://g1.globo.com/');
  }

  getNoticia(){
    return element(by.css('body > div.glb-grid > main > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > a'));
  }

  getTitle() {
    return element(by.css('body > div.glb-grid > main > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > a'));
  }

  
}

