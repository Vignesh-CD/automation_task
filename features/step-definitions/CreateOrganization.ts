import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async waitForDashboard() {
    await this.page.waitForURL(/.*dashboard/, { timeout: 20000 });
    await expect(this.page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  }

  async goToOrganization() {
    const orgLink = this.page.getByRole('link', { name: 'Organization' });
    await expect(orgLink).toBeVisible();
    await orgLink.click();
  }

  async clickCreateOrganization() {
    const button = this.page.getByRole('button', { name: 'Create Organization' });
    await expect(button).toBeVisible();
    await button.click();
  }

  async submitEmptyOrgForm() {
    const createBtn = this.page.getByRole('button', { name: 'Create' });
    await expect(createBtn).toBeVisible();
    await createBtn.click();
  }

  async expectOrgNameRequiredError() {
    await expect(this.page.getByText('Organization Name is required')).toBeVisible();
  }
}
