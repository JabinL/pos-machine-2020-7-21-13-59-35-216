 // data
 
 var basicData = [{
            barcode: 'ITEM000000',
            name: 'Coca-Cola',
            price: 3
        },
        {
            barcode: 'ITEM000001',
            name: 'Sprite',
            price: 3
        },
        {
            barcode: 'ITEM000002',
            name: 'Apple',
            price: 5
        },
        {
            barcode: 'ITEM000003',
            name: 'Litchi',
            price: 15
        },
        {
            barcode: 'ITEM000004',
            name: 'Battery',
            price: 2
        },
        {
            barcode: 'ITEM000005',
            name: 'Instant Noodles',
            price: 4
        }
    ];
 
 
 var barCodeList = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];
 
 // print receipt
 function printReceipt(barCodeList){
	 
	 let cartItem = calculateItemSum(barCodeList);
	 let cartItemDetails = getItemDetails(cartItem);
	 let cartItemDetailsWithSubtotal  = calculateSubTotalprice(cartItemDetails)
	 let totalPrice = calculateTotalPrice(cartItemDetailsWithSubtotal);
	 let result = formatReceipt(cartItemDetailsWithSubtotal ,totalPrice);
	 console.log(result);
	 
 }
 
 function calculateItemSum(barCodeList){
	 

	 var cartItem = new Map();

        for (let index = 0; index < barCodeList.length; index++) {
            if (cartItem.has(barCodeList[index])) { // 判断该商品是否已存在
                let sum = cartItem.get(barCodeList[index]);
                cartItem.set(barCodeList[index], sum + 1);
            } else {
                cartItem.set(barCodeList[index], 1);
            }
        }
        return cartItem;
	  
 }
 
 // 完善各种商品的详细信息
 function getItemDetails(cartItem){
	
	 var cartItemDetails = new Array();
        for (let [key, value] of cartItem) {

            for (let i = 0; i < basicData.length; i++) {
                if (basicData[i].barcode === key) { // 找到了对应的商品
                    let item = {
                        barcode: basicData[i].barcode,
                        name: basicData[i].name,
                        price: basicData[i].price,
                        quantity: value,
                        subtotal: basicData[i].price * value
                    }
                    cartItemDetails.push(item);
                }
            }
        }
        return cartItemDetails;
	 
 }
 

 function calculateSubTotalPrice(cartItemDetails){
	 
	 for (let i = 0; i < cartItemDetails.length; i++) {
            cartItemDetails[i].subtotal = cartItemDetails[i].price * cartItemDetails[i].quantity;
        }
		return cartItemDetails;
 }
 
 function calculateTotalPrice(cartItemDetails){
	 
	 var totalPrice = 0;
        for (let i = 0; i < cartItemDetails.length; i++) {
            totalPrice += cartItemDetails[i].subtotal;
        }
        return totalPrice;
	 
 }
 
 function formatReceipt(cartItemDetails ,totalPrice){
	let newLine = "\n" ;
	 let strHead = newLine+"***<store earning no money>Receipt ***"+newLine;
        let strBody = "";
        for (let i = 0; i < cartItemDetails.length; i++) {
            strBody +=
                `Name: ${cartItemDetails[i].name}, Quantity: ${cartItemDetails[i].quantity},`+
                ` Unit price: ${cartItemDetails[i].price} (yuan), Subtotal: ${cartItemDetails[i].subtotal} (yuan)${newLine}`;
        }
        let strTail = `----------------------${newLine}Total: ${totalPrice} (yuan)${newLine}**********************`;

        let result = strHead + strBody + strTail;
        return result; 
 }
 
 
module.exports = {
    printReceipt
};