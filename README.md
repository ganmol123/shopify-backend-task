# Shopify Backend Task

CRUD operations for an inventory tracking website as a part of Shopify Backend Task.
#### Additional Task: Export product data to a CSV file
#### Framework used: Nodejs with Express 

## Local Deployment
## Steps:
### Environment Setup: 
- To see if you already have Node.js and npm installed and check the installed version, run the following commands:
```
node -v
npm -v
```
- If you don't have Node.js and npm installed, use a node version manager to install Node.js and npm. 
   #### OSX/Linux Node version manager: [nvm](https://github.com/nvm-sh/nvm), [n](https://github.com/tj/n)
   #### Windows Node version manager: [nodist](https://github.com/nullivex/nodist), [nvm-windows](https://github.com/coreybutler/nvm-windows)
   #### You can also use a Node installer: [node.js installer](https://nodejs.org/en/download/)
- Clone the repository to the local system.
- Create the .env file. The sample.env is as follows:
```
PORT = 1000
NODE_ENV = local
MONGODB_URI = mongdb_uri 
```
### Starting the App
- Run the below commands to install the dependencies and start the app. 
```
npm install
npm run start
npm run startmon //for dev
```

## App engine deployed service
###  Deployed service [shopify-backend-task] to [https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com](https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com)

## Testing
### Postman collection link: 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14297807-83ecdb22-1300-4d25-9135-428ff57144ee?action=collection%2Ffork&collection-url=entityId%3D14297807-83ecdb22-1300-4d25-9135-428ff57144ee%26entityType%3Dcollection%26workspaceId%3D2477c77a-0362-4ec8-a0ec-2f9272df6e85#?env%5Bshopify-backend-test-env%5D=dW5kZWZpbmVk)

## API Specification
- Get all order items
```
GET/ https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com/developer/order
Sample Output: 
[
    {
        "_id": "61e18952b302444400f16e1c",
        "item_name": "item_name1",
        "delivery_address": "Some Address A",
        "storage_facilty_address": "Some Address B",
        "active": true,
        "order_type": "For Delivery",
        "createdAt": "2022-01-14T14:31:46.720Z",
        "updatedAt": "2022-01-14T14:31:46.720Z",
        "__v": 0
    },
    {
        "_id": "61e18982528f9ddadd202786",
        "item_name": "item_name2",
        "delivery_address": "Some Address A",
        "storage_facilty_address": "Some Address B",
        "active": true,
        "order_type": "For Delivery",
        "createdAt": "2022-01-14T14:32:34.243Z",
        "updatedAt": "2022-01-14T14:32:34.243Z",
        "__v": 0
    },
]
```
- Create an order item
```
POST/ https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com/developer/order
Request body:
{
    "item_name": "some item",
    "delivery_address": "some address",
    "storage_facilty_address": "some storage facility address",
    "active": "true"
}
Sample Output:
{
    "order": {
        "item_name": "some item 10",
        "delivery_address": "Atwater Ave",
        "storage_facilty_address": "some address",
        "active": true,
        "_id": "61e7e1cbd5ea97ddbab32f72",
        "order_type": "For Delivery",
        "tracking_id": "61e7e1cbd5ea97ddbab32f71"
    }
}
```
- Delete an order item
```
DELETE/ https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com/developer/order/{{order_id}}
Sample Output:
{
   message: "Order successfully deleted!",
}
```
- Update an order item
```
PUT/ https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com/developer/order/{{order_id}}
// Include only the fields which needs to be updated in the request body.
Request Body:
{
    "item_name": "updated item_name info",
    "delivery_address": "updated some address info",
    "storage_facilty_address": "updated some storage facility address",
}
Sample Output:
{
    "order": {
        "item_name": "updated item_name info",
        "delivery_address": "updated some address info",
        "storage_facilty_address": "updated some storage facility address",
        "active": true,
        "_id": "61e7e1cbd5ea97ddbab32f72",
        "order_type": "For Delivery",
        "tracking_id": "61e7e1cbd5ea97ddbab32f71"
    }
}
```
- Get one order item
```
GET/ https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com/developer/order/{{order_id}}
Sample Output:
{
    "order": {
        "item_name": "some item 10",
        "delivery_address": "Atwater Ave",
        "storage_facilty_address": "some address",
        "active": true,
        "_id": "61e7e1cbd5ea97ddbab32f72",
        "order_type": "For Delivery",
        "tracking_id": "61e7e1cbd5ea97ddbab32f71"
    }
}
```
- Export information to a CSV File
```
GET/ https://shopify-backend-task-dot-voomp-landing.el.r.appspot.com/developer/order/export/csv
// Make sure to use 'save & download' button to download the CSV file in postman
Sample Output
{
    "message": "Successfully Exported to export.csv!"
}
``` 
## License
[MIT](https://choosealicense.com/licenses/mit/)
