import { test, expect } from "@playwright/test";

test.describe("check toggling languages", () => {
    test("should contain english describe", async ({ page }) => {
        //Arange
        const urlPage = "https://party-card.vercel.app/";
        const nameButton = "EN";
        const englishDescribe = `Be original when it comes to greetings.
        Create an online greeting card for your loved ones
        - for birthdays or other occasions!`;
        //Act
        await page.goto(urlPage);
        await page.getByRole("button", { name: nameButton }).dblclick();

        //Assert
        await expect(page.getByTestId("homeDescribe")).toHaveText(englishDescribe);
    });
});
