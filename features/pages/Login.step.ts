import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../step-definitions/LoginPage';
import { DashboardPage } from '../step-definitions/CreateOrganization';
import { CustomWorld } from '../support/world';

Given('the user is on the login page', {timeout:10000}, async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('the user clicks on the login button without entering email and password', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLogin();
});

Then('an error message should be display', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.expectEmailRequiredError();
  await loginPage.expectPasswordRequiredError();
});

When('the user enters a valid email', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.fillEmail('vignesh.ponraj@crystaldelta.com');
});

When('clicks on the login button', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLogin();
});

Then('an error message should be displayed for missing password', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.expectPasswordRequiredError();
});

When('the user enters a valid email and password', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.fillEmail('vignesh.ponraj@crystaldelta.com');
  await loginPage.fillPassword('Vignesh@2701');
});

When('click on the login button', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLogin();
});

Then('the user should be redirected to the dashboard',{timeout:20000}, async function (this: CustomWorld) {
  const dashboard = new DashboardPage(this.page);
  await dashboard.waitForDashboard(); 
});
