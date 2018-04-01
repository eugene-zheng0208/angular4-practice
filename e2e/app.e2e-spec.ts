import { MyAppLearningPage } from './app.po';

describe('my-app-learning App', () => {
  let page: MyAppLearningPage;

  beforeEach(() => {
    page = new MyAppLearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
