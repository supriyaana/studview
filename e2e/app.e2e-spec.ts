import { StudviewPage } from './app.po';

describe('studview App', () => {
  let page: StudviewPage;

  beforeEach(() => {
    page = new StudviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
