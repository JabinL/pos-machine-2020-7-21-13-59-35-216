 // 商品的基本数据
 
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
 
 // 打印账单
 function printReceipt(barCodeList){
	 
	 var cartItem = calculateItemSum(barCodeList);
	 var cartItemDetails = getMoreItemDetails(cartItem);
	 var totalPrice = calculateTotalPrice(cartItemDetails);
	 var result = formatReceipt(cartItemDetails ,totalPrice);
	 console.log(result);
	 
 }
 
 printReceipt(barCodeList);
 // 统计各种商品的数量
 function calculateItemSum(barCodeList){
	 
	 var list = barCodeList;
	 var cartItem = new Map();

        for (var i = 0; i < list.length; i++) {
            if (cartItem.has(list[i])) { // 判断该商品是否已存在
                var num = cartItem.get(list[i]);
                cartItem.set(list[i], num + 1);
            } else {
                cartItem.set(list[i], 1);
            }
        }
        return cartItem;
	  
 }
 
 // 完善各种商品的详细信息
 function getMoreItemDetails(cartItem){
	
	 var cartItemDetails = new Array();
        for (var [key, value] of cartItem) {

            for (var i = 0; i < basicData.length; i++) {
                if (basicData[i].barcode === key) { // 找到了对应的商品
                    var jsonObj = {
                        barcode: basicData[i].barcode,
                        name: basicData[i].name,
                        price: basicData[i].price,
                        quantity: value,
                        subtotal: basicData[i].price * value
                    }
                    cartItemDetails.push(jsonObj);
                }
            }
        }
        return cartItemDetails;
	 
 }
 
 // 统计所有商品的总价
 function calculateTotalPrice(cartItemDetails){
	 
	 var totalPrice = 0;
        for (var i = 0; i < cartItemDetails.length; i++) {
            totalPrice += cartItemDetails[i].subtotal
        }
        return totalPrice;
	 
 }
 
 // 格式化账单数据
 function formatReceipt(cartItemDetails ,totalPrice){
	 var str0 = "\n***<store earning no money>Receipt ***\n";
        var str1 = "";
        for (var i = 0; i < cartItemDetails.length; i++) {
            str1 +=
                `Name: ${cartItemDetails[i].name}, Quantity: ${cartItemDetails[i].quantity},`+
                ` Unit price: ${cartItemDetails[i].price} (yuan), Subtotal: ${cartItemDetails[i].subtotal} (yuan)\n`;
        }
        var str2 = `----------------------\nTotal: ${totalPrice} (yuan)\n**********************`;

        var result = str0 + str1+str2;
        return result; 
 }