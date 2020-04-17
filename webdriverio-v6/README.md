# WebdriverIO V6
This folder contains a simple set up for WebdriverIO V6.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio-v6` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this


```log
➜  webdriverio-v6 git:(master) ✗ npm run test.local

> webdriverio-v6@1.0.0 test.local /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6
> wdio test/e2e/configs/wdio.local.chrome.conf.js


Execution of 7 spec files started at 2020-04-14T19:04:17.447Z

[0-0] RUNNING in chrome - /test/e2e/specs/cart.summary.spec.js
[0-6] RUNNING in chrome - /test/e2e/specs/swag.items.list.spec.js
[0-5] RUNNING in chrome - /test/e2e/specs/swag.item.details.spec.js
[0-1] RUNNING in chrome - /test/e2e/specs/checkout.complete.spec.js
[0-2] RUNNING in chrome - /test/e2e/specs/checkout.personal.info.spec.js
[0-4] RUNNING in chrome - /test/e2e/specs/login.spec.js
[0-3] RUNNING in chrome - /test/e2e/specs/checkout.summary.spec.js
[0-1] PASSED in chrome - /test/e2e/specs/checkout.complete.spec.js
[0-2] PASSED in chrome - /test/e2e/specs/checkout.personal.info.spec.js
[0-3] PASSED in chrome - /test/e2e/specs/checkout.summary.spec.js
[0-4] PASSED in chrome - /test/e2e/specs/login.spec.js
[0-6] PASSED in chrome - /test/e2e/specs/swag.items.list.spec.js
[0-0] PASSED in chrome - /test/e2e/specs/cart.summary.spec.js
[0-5] PASSED in chrome - /test/e2e/specs/swag.item.details.spec.js

 "spec" Reporter:
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-1] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/checkout.complete.spec.js
[Chrome Headless 19.4.0 darwin #0-1] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-1] Session ID: 1fbd0491-5450-4557-b8a2-9b14a80012a3
[Chrome Headless 19.4.0 darwin #0-1]
[Chrome Headless 19.4.0 darwin #0-1] Checkout - Complete
[Chrome Headless 19.4.0 darwin #0-1]    ✓ should be able to test loading of login page
[Chrome Headless 19.4.0 darwin #0-1]
[Chrome Headless 19.4.0 darwin #0-1] 1 passing (897ms)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-2] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/checkout.personal.info.spec.js
[Chrome Headless 19.4.0 darwin #0-2] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-2] Session ID: e04f7339-aec1-4b14-89c7-b1e6648dfc3d
[Chrome Headless 19.4.0 darwin #0-2]
[Chrome Headless 19.4.0 darwin #0-2] Checkout - Personal info
[Chrome Headless 19.4.0 darwin #0-2]    ✓ should validate that we can continue shopping
[Chrome Headless 19.4.0 darwin #0-2]    ✓ should validate that we can cancel the first checkout
[Chrome Headless 19.4.0 darwin #0-2]    ✓ should be able to continue the checkout
[Chrome Headless 19.4.0 darwin #0-2]
[Chrome Headless 19.4.0 darwin #0-2] 3 passing (2s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-3] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/checkout.summary.spec.js
[Chrome Headless 19.4.0 darwin #0-3] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-3] Session ID: 983a361a-5609-4f9f-81b6-11614f9ff39b
[Chrome Headless 19.4.0 darwin #0-3]
[Chrome Headless 19.4.0 darwin #0-3] Checkout - Summary
[Chrome Headless 19.4.0 darwin #0-3]    ✓ should validate that we can continue shopping
[Chrome Headless 19.4.0 darwin #0-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Chrome Headless 19.4.0 darwin #0-3]    ✓ should validate that we have 1 product in our checkout overview
[Chrome Headless 19.4.0 darwin #0-3]
[Chrome Headless 19.4.0 darwin #0-3] 3 passing (1.9s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-4] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/login.spec.js
[Chrome Headless 19.4.0 darwin #0-4] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-4] Session ID: 5b91590c-b3de-4aad-bea9-11ed039eb0d1
[Chrome Headless 19.4.0 darwin #0-4]
[Chrome Headless 19.4.0 darwin #0-4] LoginPage
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should be able to test loading of login page
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should be able to login with a standard user
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should not be able to login with a locked user
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should not be able to login with an invalid username
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should not be able to login with an invalid password
[Chrome Headless 19.4.0 darwin #0-4]
[Chrome Headless 19.4.0 darwin #0-4] 5 passing (2.5s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-6] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/swag.items.list.spec.js
[Chrome Headless 19.4.0 darwin #0-6] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-6] Session ID: e083370f-a41a-47bb-beff-db35b52c1de1
[Chrome Headless 19.4.0 darwin #0-6]
[Chrome Headless 19.4.0 darwin #0-6] Swag items list
[Chrome Headless 19.4.0 darwin #0-6]    ✓ should validate that all products are present
[Chrome Headless 19.4.0 darwin #0-6]    ✓ should validate that the details of a product can be opened
[Chrome Headless 19.4.0 darwin #0-6]    ✓ should validate that a product can be added to a cart
[Chrome Headless 19.4.0 darwin #0-6]
[Chrome Headless 19.4.0 darwin #0-6] 3 passing (3.1s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-0] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/cart.summary.spec.js
[Chrome Headless 19.4.0 darwin #0-0] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-0] Session ID: dad0a760-4e1d-4bc3-a7fe-b481aee8f087
[Chrome Headless 19.4.0 darwin #0-0]
[Chrome Headless 19.4.0 darwin #0-0] Cart
[Chrome Headless 19.4.0 darwin #0-0]    ✓ should validate that we can continue shopping
[Chrome Headless 19.4.0 darwin #0-0]    ✓ should validate that we can go from the cart to the checkout page
[Chrome Headless 19.4.0 darwin #0-0]    ✓ should validate that a product can be removed from the cart
[Chrome Headless 19.4.0 darwin #0-0]
[Chrome Headless 19.4.0 darwin #0-0] 3 passing (3s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-5] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/e2e/specs/swag.item.details.spec.js
[Chrome Headless 19.4.0 darwin #0-5] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-5] Session ID: 4a7b8251-ae6b-48ff-8674-ecd8c50c5258
[Chrome Headless 19.4.0 darwin #0-5]
[Chrome Headless 19.4.0 darwin #0-5] Swag Item Details
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should validate that we can go back from the details to the inventory page
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should validate that a product can be added to a cart
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should validate that a product can be removed from the cart
[Chrome Headless 19.4.0 darwin #0-5]
[Chrome Headless 19.4.0 darwin #0-5] 3 passing (4s)


Spec Files:      7 passed, 7 total (100% completed) in 00:00:15 
```

## Run tests on Sauce Labs
You can run your tests on Sauce Labs with this command

    npm run test.saucelabs

It will spin up multiple browsers which you can find [here](./test/e2e/configs/wdio.saucelabs.conf.js).
