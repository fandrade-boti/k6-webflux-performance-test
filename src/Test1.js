const { sleep } = require('k6');
const http = require('k6/http');


export default function () {
  const url = 'http://localhost:8080/reactive-purchase-orders';
  //const url = 'http://localhost:8080/purchase-orders';


  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

    const payload = 
    {
        storeCode: '9999991',
        status: 'AWAITING_ATTENDANCE',
        statusInternal: 'AWAITING_ATTENDANCE',
        businessUnit: 'BOT',
        erp: 'SAP_S4'
    
    }
    const response = http.post(url, JSON.stringify(payload), params);
    console.log(response.body);
    //sleep(1); // Wait for 1 second before sending the next request

}
