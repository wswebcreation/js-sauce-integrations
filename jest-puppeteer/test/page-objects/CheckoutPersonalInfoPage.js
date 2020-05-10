const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '#checkout_info_container',
    cancelButton: '.cart_cancel_link',
    continueCheckoutButton: '.cart_button',
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    errorMessage: '[data-test="errorMessage"]',
}

class CheckoutPersonalInfoPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }
}

module.exports = new CheckoutPersonalInfoPage();
