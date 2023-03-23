import { test, expect } from "@playwright/test";

test.describe("check toggling languages", () => {
    const englishDescribe = `Be original when it comes to greetings.
        Create an online greeting card for your loved ones
        - for birthdays or other occasions!`;

    test("should contain english describe", async ({ page }) => {
        //Arange
        const nameButton = "EN";

        //Act
        await page.goto("/");
        await page.getByRole("button", { name: nameButton }).dblclick();

        //Assert
        await expect(page.getByTestId("homeDescribe")).toHaveText(englishDescribe);
    });

    test("button should have white color after click", async ({ page }) => {
        //Arange
        const nameButton = "PL";
        const plButton = page.getByRole("button", { name: nameButton });
        const whiteColor = "rgb(255, 255, 255)";

        //Act
        await page.goto("/");
        await plButton.dblclick();
        const color = await plButton.evaluate((btn) => {
            return window.getComputedStyle(btn).getPropertyValue("background-color");
        });

        //Assert
        expect(color).toBe(whiteColor);
    });
});

test.describe("checking routing starting from homepage", () => {
    test("url of website should contain 'examples/2'", async ({ page }) => {
        //Arange
        const urlFragment = "examples/2";

        //Act
        await page.goto("/");
        await page.getByRole("button", { name: "EN" }).click();
        await page.getByRole("link", { name: "See examples" }).click();
        await page.getByRole("link", { name: "2" }).click();
        const actualUrl = page.url();

        //Assert
        expect(actualUrl).toContain(urlFragment);
    });

    test("url of website should contain 'previewCard'", async ({ page }) => {
        //Arange
        const urlFragment = "previewCard";

        //Act
        await page.goto("/");
        await page.getByRole("link", { name: "Create new card" }).click();
        await page.getByRole("button", { name: "Next" }).click();
        await page.getByRole("button", { name: "Skip" }).click();
        await page.getByRole("link", { name: "View preview" }).click();
        const actualUrl = page.url();

        //Assert
        expect(actualUrl).toContain(urlFragment);
    });
});
