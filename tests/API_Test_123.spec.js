import{test,expect} from '@playwright/test';
test('Get api tested',async({request})=>{
    const response = await request.get('https://fake-json-api.mock.beeceptor.com/users');
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    console.log(response.status());

});