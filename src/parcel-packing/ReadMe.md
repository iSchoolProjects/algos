# Parcel packing

You are working in the online shop and receiving and dispatching orders for customer. There are many costumers that would make more than one item in order, so we need to take into consideration that courier services fit more than one item in one order, and it’s in our best interest to do so, and keep our delivery cost as low as possible. Since the courier services are using something called belt measure to limit package size we would need to use that formula and take into consideration maximum weight allowed per packing to efficiently calculate minimum amount postal packages per order.

### Task:
Please write the function that would use following parameters:

- Max belt measure -> number (ex. 270)
- Max weight -> number (ex. 10)
- Max side length -> number (ex. 140)
- Order items -> array of item values in object like (associative array) structure (height, width, length,weight,count) ([{height: 40,width: 30,length: 30, weight: 5, total: 3}])

And outputs object (associative array) of packages that we would send and arrangement of those packages example({total: 1,itemsPerPackage:[1]})

**Please note that if the weight of the single package or belt measure is higher of max inputs or max side length is smaller then longest side, return null. Items per package may be sorted in any order.**

The equation for calculating belt measure is  ` 2 * first highest package measure + 2 * second highest package measure + lowest package measure.`

{height: 40,width: 30,length: 30} would give us 170 belt measure,
{height: 20,width: 30,length: 10} would be 110 belt measure, etc.

# Example


Example input:
`
270, 20, 100 [
{height: 40,width: 30,length: 30, weight: 5, total: 4},
{height: 30,width: 20,length: 10, weight: 3, total: 4}
]`

Expected output: `{total:2, itemsPerPackage: [4,4]}`

Explanation: When we start with first package and his belt size we start 170, we add next which is the smallest size (30 in this case), 200, 230,260, and weight will be added 5, 10, 15, 20 respectively and we are done with first package, we continue in same manner 170, 200, we are moving for the next batch which has 10 for the smallest size so the count goes 110, 120, 130, 140 and we fit the last batch in next package and indeed we got 2 packages and 4 items in each package.

---

Example input:
270, **20**, 100 [
{height: 40,width: 30,length: 30, **weight: 25**, total: 3},
{height: 30,width: 20,length: 10, weight: 3, total: 3}
]

Expected output: null
Explanation: Weight of single package (marked in bold above) is higher (25) then maximum allowed weight (20)

---

Example input:
**270**, 20, 120 [
{height: 100,width: 30,length: 30, weight: 2, total: 3},
{height: 30,width: 20,length: 10, weight: 3, total: 3}
]

Expected output: null
Explanation: Belt size of single package (marked in bold above) is higher (290) then maximum allowed belt size (270)

---

Example input:
270, 20, **120** [
{height: **140**,width: 30,length: 30, weight: 2, total: 3},
{height: 30,width: 20,length: 10, weight: 3, total: 3}
]

Expected output: null
Explanation: Max side lenght (marked in bold above) is higher (140) then maximum allowed side lenght(120)

#### Input constrains:

- Max belt size 50 <= n <= 300
- Max weight 1 <= n <= 50
- Max side lenght 30 <= n <= 150
- Weight of item 1 <= n <=25
- Total of item 1 <= n <= 1000
- Length of items array 1 <= n <= 300
