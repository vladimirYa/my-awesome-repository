import { AwesomeFrontendPage } from './app.po';

describe('awesome-frontend App', () => {
  let page: AwesomeFrontendPage;

  beforeEach(() => {
    page = new AwesomeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
