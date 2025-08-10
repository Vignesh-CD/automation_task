import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../step-definitions/LoginPage';
import { DashboardPage } from '../step-definitions/CreateOrganization'; // ✅ Corrected
import { CustomWorld } from '../support/world';

Given('the user is on the dashboard page',{timeout:30000}, async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const dashboardPage = new DashboardPage(this.page);

  await loginPage.goto();
  await loginPage.fillEmail('vignesh.ponraj@crystaldelta.com');
  await loginPage.fillPassword('Vignesh@2701');
  await loginPage.clickLogin();
  await dashboardPage.waitForDashboard(); 

});

When('the user clicks on the Organization button',{timeout:20000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.goToOrganization();
});

Then('the Create Organization form should be visible',{timeout:30000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickCreateOrganization();
});

When('the user click on the Create Button without entering any details',{timeout:20000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.submitEmptyOrgForm();
});

Then('validation message should be displayed for all required fields',{timeout:20000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.expectOrgNameRequiredError();
});
