const {LOGIN_USERS, PAGES} = require('../e2eConstants');
const SwagOverviewPage = require('../page-objects/SwagOverviewPage');
const SwagDetailsPage = require('../page-objects/SwagDetailsPage');
const {setTestContext} = require('../helpers');

describe('Swag items list', () => {
    it('should validate that all products are present', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsDisplayed();

        // Actual test starts here
        expect(await SwagOverviewPage.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    it('should validate that the details of a product can be opened', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsDisplayed();

        // Actual test starts here
        const product = 'Sauce Labs Backpack';

        await SwagOverviewPage.openSwagDetails(product);

        expect(await SwagDetailsPage.waitForIsDisplayed()).toEqual(
            true,
            'Swag Item detail page was not shown',
        );

        expect(await SwagDetailsPage.getSwagDetailsText()).toContain(
            product,
            'Swag Item detail page did not show the right text',
        );
    });
});
