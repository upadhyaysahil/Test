import { Selector, t } from 'testcafe';

fixture('Login Tests')
  .page('https://dev.deepthought.education/login');

test('Validate Error Messages for Invalid Login Attempts', async () => {
    await t
      .typeText('#username.form-control', 'invalidUsername')
      .typeText('#password.form-control', 'invalidPassword')
      .click('#login.btn.btn-primary.btn-lg.btn-block.sdlms-text-white-16px.font-poppins.primary-background')
      .expect(Selector('#login-error-notify.alert.alert-danger').exists).ok(); 
     });
  