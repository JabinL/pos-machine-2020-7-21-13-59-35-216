

### 1.所有方法

1. calculateItemSum()
   - 输入：条形码列表。
   - 输出：各类条形码及其出现次数的Map。
2. getMoreItemDetails()
   - 输入：各类条形码及其出现次数的Map。
   - 输出：一个Json对象，包括条形码对应商品的所有信息,以及每类商品的总价。
3. calculateTotalPrice()
   - 输入：每类商品的小总价的列表。
   - 输出：所有商品的总价。
4. formatReceipt()
   - 输入：一个Json对象，包括条形码对应商品的所有信息以及总价。
   - 输出：已经格式化好的账单字符串。
5. printReceipt()   
   - 输入：条形码列表。
   - 输出：账单字符串。
### 2,3 功能实现

&emsp;&emsp;实现见代码，即根目录下的main.js

### 4.PDCA分析

| 方法名 | calculateItemSum() |
| :----: | :-------------: |
|  plan  |     10分钟      |
|   do   |     10分钟      |
| check  |     没问题      |
| action |     没问题      |

| 方法名 |                         getMoreItemDetails()                          |
| :----: | :----------------------------------------------------------: |
|  plan  |                            10分钟                            |
|   do   |                            30分钟                            |
| check  | 对js对象数组不太熟悉。 |
| action |                  好好学习JS以上遇到的模块。                  |


| 方法名 | calculateTotalPrice() |
| :----: | :--------------------: |
|  plan  |         6分钟          |
|   do   |         6分钟          |
| check  |         没问题         |
| action |         没问题         |

| 方法名 |                       formatReceipt()                        |
| :----: | :----------------------------------------------------------: |
|  plan  |                            10分钟                            |
|   do   |                            15分钟                            |
| check  |  对js字符串不太熟悉 |
| action |                            多练习一下js字符串                 |

| 方法名 |                       printReceipt()                        |
| :----: | :----------------------------------------------------------: |
|  plan  |                            5分钟                            |
|   do   |                            5分钟                            |
| check  |  这个方法主要是调用其他方法，没什么困难 |
| action |                            没问题                |
