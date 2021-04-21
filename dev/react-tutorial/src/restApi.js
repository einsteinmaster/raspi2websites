function api_getData() {
    return [
        {key: 1234, name: "milch", price: 2.5, amount: 0, total: 0},
        {key: 231, name: "eier", price: 1.5, amount: 0, total: 0}
    ]
}

function api_getLayout() {
    return [
        {key: 1, name: "absender"},
        {key: 2, name: "inhalt"},
        {key: 3, name: "empfaenger"}
    ]
}

async function api_updateSum(amount, price)
{
    let res = await fetch('https://rkp.intecelektro.de/dev/getTotal.php?amount=' + amount + '&price=' + price);
    let data1 = await res.json();
    return data1.total;
}

function api_getItems(itemName) {
    if (itemName === "absender")
        return ["michael", "maurus", "daniel"];
    if (itemName === "inhalt")
        return ["eier", "milch", "eis"];
    if (itemName === "empfaenger")
        return ["annegret", "ilse", "samira"];
    return [];
}

function api_getItemDetails(itemName) {
    if (itemName === "michael")
        return {key: 1, vorname: "michael", nachname: "schuhmacher", beruf: "rennfahrer"};
    return null;
}

function getDataWithBasic() {
    let base64 = require('base-64');

    let url = 'https://rkp.intecelektro.de:30000/api/items';
    let username = 'myuser';
    let password = 'mypass';

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    fetch(url, {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(json => console.log(json));
}

export {
    api_getData,
    api_getLayout,
    api_updateSum,
    api_getItems,
    api_getItemDetails,
    getDataWithBasic
}