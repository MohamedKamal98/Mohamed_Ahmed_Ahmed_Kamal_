//fixture `Google Search`
//.page `https://www.google.com/`;
fixture("Google Search").page("https://www.google.com/");
import {Selector,t} from 'testcafe';

//write test.skip or test.only to test each testcase

test('Verify that Google Logo is present and visible', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .expect(Selector('.lnXdpd').exists).eql(true)
    .expect(Selector('.lnXdpd').visible).eql(true)
})

test('Verify that the search textbox is present, visible and editable.', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .expect(Selector('.gLFyf.gsfi').exists).eql(true)
    .expect(Selector('.gLFyf.gsfi').visible).eql(true)
    .typeText('.gLFyf.gsfi','instabug')
    .wait(5000);
})

test('Verify that the search request should get hit by clicking on the search button after writing the search term.', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .click('.gNO89b')
    .wait(10000);
})


test('Verify that the search request should get hit by clicking enter after writing the search term.', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .pressKey('enter')
    .wait(10000);
})

test('Verify that clicking the search result will lead to the corresponding web page', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .wait(3000)
    .click('.wM6W7d')
    .wait(5000)
})

test('Verify that after the search result page load could back to home page by clicking the logo.', async t => 
{
    await t
    // automatically dismiss dialog boxes
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .pressKey('enter')
    .wait(2000)
    .click('#logo')
    .wait(2000);
})

const getLocation = ClientFunction(() => document.location.href);
import { ClientFunction } from 'testcafe';

test('Verify that the search result exists in the search result URL', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .click('.wM6W7d')
    .expect(getLocation()).contains('instabug');
    
})

test('Verify that pagination is present in case the number of results are greater than the maximum results allowed in a page.', async t => 
{
    await t
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .pressKey('enter')
    .expect(Selector('.fl').exists).eql(true)
    .expect(Selector('.fl').visible).eql(true);
})

test('Verify that the user can move to the previous or next page using the next and previous buttons.', async t => 
{
    await t
    // automatically dismiss dialog boxes
    .setNativeDialogHandler(() => true)
    .typeText('.gLFyf.gsfi','instabug')
    .pressKey('enter')
    //.click('.SJajHc.NVbCr')
    .click('#pnnext')
    .wait(5000)
    .click('#pnprev')
    .wait(5000);
})

