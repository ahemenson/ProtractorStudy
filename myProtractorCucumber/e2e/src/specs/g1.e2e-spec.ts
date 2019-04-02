import { G1Page } from '../page-objects/g1.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let g1Page: G1Page;

  beforeEach(() => {
    g1Page = new G1Page();
  });

  it('should display welcome message', () => {
    g1Page.visit();   
  });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
});
