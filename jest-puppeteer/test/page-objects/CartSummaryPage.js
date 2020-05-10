const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '#cart_contents_container',
    checkoutButton: '.checkout_button',
    continueShoppingButton: '.btn_secondary',
    items: '.cart_item',
    removeSwagItemButton: '.btn_secondary.btn_inventory',
}

class CartSummaryPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }
}

module.exports = new CartSummaryPage();
