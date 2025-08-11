import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async waitForDashboard() {
    await this.page.waitForURL(/.*dashboard/, { timeout: 30000 });
    await expect(this.page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  }

  async goToOrganization() {
    const orgLink = this.page.getByRole('link', { name: 'Organization' });
    await expect(orgLink).toBeVisible();
    await orgLink.click();
  }

  async clickCreateOrganization() {
   await this.page.getByRole('button', { name: 'Create Organization' }).click();
  }

  async submitEmptyOrgForm() {
    const createBtn = this.page.getByRole('button', { name: 'Create' });
    await expect(createBtn).toBeVisible();
    await createBtn.click();
  }

  async expectOrgNameRequiredError() {
    await expect(this.page.getByText('Organization Name is required')).toBeVisible();
  }

async fillOrganizationName(name: string) {
  const input = this.page.getByPlaceholder('Organisation Name');
  await expect(input).toBeVisible({ timeout: 30000 }); 
  await input.fill(name);
}
  async fillAddress(address: string) {
  await this.page.locator('textarea[name="address"]').fill(address);
  }

async selectCountry(countryName: string) {
  const option = `//li[@role="option" and text()="${countryName}"]`;
  await this.page.locator(option).click();
}

async selectState(StateName: string) {
  const option = `//li[@role="option" and text()="${StateName}"]`;
  await this.page.locator(option).click();
}

async selectCity(cityName: string) {
  const option = `//li[@role="option" and text()="${cityName}"]`;
  await this.page.locator(option).click();
}

  async fillPincode(pincode: string) {
  const pin = this.page.getByPlaceholder('XXXXXX');
  await expect(pin).toBeVisible({timeout:20000});
  await pin.fill(pincode);
  }
async selectRandomAssessmentType() {
    const options = ['aptitude+', 'AI-powered Communication', 'coding'];

    const randomOption = options[Math.floor(Math.random() * options.length)];
    const checkbox = this.page.locator(`//p[text()='${options}']//parent::div//child::input[@type="${randomOption}"]`
    );

    await checkbox.waitFor({ state: 'visible' });

    const isChecked = await checkbox.getAttribute('aria-checked');
    if (isChecked !== 'true') {
      await checkbox.click();
    }

    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  }

  async selectRandomAssessmentLevel() {
    const options = ['practice', 'graded', 'interview'];

    const randomOption = options[Math.floor(Math.random() * options.length)];

    const checkbox = this.page.locator(`//p[text()='${options}']//parent::div//child::input[@type="${randomOption}"]`
    );
    await checkbox.waitFor({ state: 'visible' });

    const isChecked = await checkbox.getAttribute('aria-checked');
    if (isChecked !== 'true') {
      await checkbox.click();
    }

    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  }

  async submitOrganizationForm() {
    await this.page.getByRole('button', { name: 'Create Organization' }).click();
  }

  async expectNoOrgNameValidationError() {
    const error = this.page.locator('text=Organization Name is required'); 
    await expect(error).toHaveCount(0); 
  }
}
