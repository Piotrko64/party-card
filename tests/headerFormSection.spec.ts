import { test, expect } from "@playwright/test";

test.describe("checking header form section", () => {
    test.beforeEach(async ({ page }) => {
        const urlPage = "https://party-card.vercel.app/";
        await page.goto(urlPage);
    });

    test.only("should change name", async ({ page }) => {
        const newName = "Adam";
        const whiteColor = "rgb(255, 255, 255)";

        await page.getByRole("button", { name: "EN" }).click();
        await page.getByRole("link", { name: "Create new card" }).click();
        await page.getByRole("button", { name: "Skip" }).click();
        await page.getByPlaceholder("Name").click();
        await page.getByPlaceholder("Name").fill(newName);

        await page.getByText("Select own color").fill(whiteColor);
        await page.getByRole("link", { name: "View preview" }).click();
        await page.getByText("Adam").click();
        const color = await page.getByText("Adam").evaluate((btn) => {
            return window.getComputedStyle(btn).getPropertyValue("color");
        });

        expect(color).toBe(whiteColor);
    });
});
