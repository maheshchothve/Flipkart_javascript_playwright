import{test,expect} from '@playwright/test'

test('Api testing', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/1');
    console.log(await response.json()); 
    

})