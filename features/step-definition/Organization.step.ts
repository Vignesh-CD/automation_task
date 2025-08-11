import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/CreateOrganization'; 
import { CustomWorld } from '../support/world';
import { generateRandomOrgName } from '../utils/generator';
import { generateRandomPincode } from '../utils/generator';

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

When('the user enters a name into the Organization Name field',{timeout:30000},async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  this.randomOrgName = generateRandomOrgName();
  await dashboardPage.fillOrganizationName(this.randomOrgName);
});

When('the user enters a address into the Address field',{timeout:30000},async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.fillAddress('5/111, Kamarajar street, Kalkurichi - Virudhunagar');
});

When('the user selects {string} from the country dropdown',{timeout:30000}, async function (this: CustomWorld, countryName: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectCountry(countryName);
});

When('the user selects {string} from the state dropdown',{timeout:30000}, async function (this: CustomWorld, StateName: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectState(StateName);
});

When('the user selects {string} from the city dropdown',{timeout:30000}, async function (this: CustomWorld, cityName: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectCity(cityName);
});

When('the user enters a random pincode into the Pincode field',{timeout:30000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  const randomPincode = generateRandomPincode();
  await dashboardPage.fillPincode(randomPincode);
});

When('the user selects a random assessment type checkbox from the Assessment Type section',{timeout:30000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectRandomAssessmentType();
});
When('the user selects a random assessment level checkbox from the Assessment Level section',{timeout:30000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectRandomAssessmentLevel();
});

When('the user clicks on the Create Button',{timeout:20000}, async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.submitOrganizationForm();
});

Then('no validation error should be shown for Organization Name', async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.expectNoOrgNameValidationError();
});
