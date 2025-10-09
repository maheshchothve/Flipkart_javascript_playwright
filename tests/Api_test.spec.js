import{test,expect} from '@playwright/test'

test.skip('Api testing', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/1');
    console.log(await response.json()); 
    console.log(response.status());

})
test("get all the products",async({request})=>{
    const response = await request.get("https://automationexercise.com/api/productsList");
    const data = await response.json();
    console.log(data);
    console.log(response.status());
    const productNames = data.products.map(p => p.name);
    expect(productNames).toContain("Blue Top");
    expect(data.products.find(p => p.name === "Blue Top").price).toBe("Rs. 500");
});