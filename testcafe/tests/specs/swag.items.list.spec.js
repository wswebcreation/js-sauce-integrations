import {LOGIN_USERS, PAGES} from "../configs/e2eConstants";
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import {setTestContext} from "../helpers";

fixture`Test swag items overview page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
    });

test('should validate that all products are present', async t => {
    await t.expect(SwagOverviewPage.getAmount()).eql(6);
});

test('should validate that the details of a product can be opened', async t => {
    const product = 'Sauce Labs Backpack';

    await SwagOverviewPage.openSwagDetails(product);
    await t.expect(SwagDetailsPage.isScreenDisplayed()).ok();
    await t.expect(SwagDetailsPage.getSwagTitle()).eql(product);
});

test('should validate that a product can be added to a cart', async t => {
    await t.expect(await AppHeaderPage.getCartAmount()).eql('');
    await SwagOverviewPage.addSwagToCart(0);
    await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
});
