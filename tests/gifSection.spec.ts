import { test, expect } from "@playwright/test";

test.describe("checking header form section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.getByRole("button", { name: "EN" }).click();
        await page.getByRole("link", { name: "Create new card" }).click();
        await page.getByRole("button", { name: "Skip" }).click();
        await page.getByText("Add funny gif?").getByRole("checkbox").click({ force: true });
        await page.getByRole("button", { name: "Trending GIFs" }).click();
    });

    test("gif url should be empty string", async ({ page }) => {
        const nameTestingAttribute = "src";

        await page.getByRole("link", { name: "View preview" }).click();

        expect(await page.getByRole("img", { name: "gif" }).getAttribute(nameTestingAttribute)).toBe("");
    });

    test("gif url should not to be empty string", async ({ page }) => {
        const nameTestingAttribute = "src";

        await page.locator(".gpr-gif-list-column > button").first().click();
        await page.getByRole("link", { name: "View preview" }).click();

        expect(await page.getByRole("img", { name: "gif" }).getAttribute(nameTestingAttribute)).not.toBe("");
    });

    test("gif should contain alt text - 'gif '", async ({ page }) => {
        const nameTestingAttribute = "alt";

        await page.locator(".gpr-gif-list-column > button").first().click();
        await page.getByRole("link", { name: "View preview" }).click();

        expect(await page.getByRole("img", { name: "gif" }).getAttribute(nameTestingAttribute)).toBe("gif");
    });
});
