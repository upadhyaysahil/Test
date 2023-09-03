import { Selector, t } from 'testcafe';

fixture('Login Tests')
  .page('https://dev.deepthought.education/login');

test('Successful Login Redirects to Dashboard', async () => {
    await t
      .typeText('#username.form-control', 'Sahil123')
      .typeText('#password.form-control', 'WQki@g7QuiPrfK7')
      .click('#login.btn.btn-primary.btn-lg.btn-block.sdlms-text-white-16px.font-poppins.primary-background')
      .expect(Selector('#content.sdlms-container').exists).ok()
      .expect(Selector('#content.sdlms-container').visible).ok();
  });
  