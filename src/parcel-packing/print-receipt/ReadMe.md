### Print receipt

You are working on an ecommerce application for which there is a need for printing receipts after successful purchase. The issue is that the paper surface for the printing is narrow (8 cm wide) and some of the product names are very long. The maximal number of characters per line is 40 and the price should be also added to the last line. Words are not allowed to be broken. Space between the last character and price should be filled up with dots. It is assumed that every character takes same size on the paper (they have the same width).

#### Task:

Please write the function that would use following parameters:

- input (product name),
- lastLineAppendix (product price),
- breakpointIndex (what is the maximal number of characters that can be printed on one line)

and returns an array with prepared strings for printing (line by line) based on nearest whitespace character on the left. It is assumed that there will no be words longer then maximal number of characters per line, so this edge case doesn't need to be covered.

**We need breakpointIndex as a parameter, since printer and its paper size could be changed in the future**
**The last line ends up with product price and the space between should be filled up with dots**
**If the price cannot fit into the last line, then it goes to the new line on its end and the space on the left is filled with dots**

### Example

Example input:
`"Nicely Neat Reusable Extra Durable Checkered PVC Picnic Tablecloth with 6 Securing Clips - Green", "19,90", 40`

Expected result:
`["Nicely Neat Reusable Extra Durable", "Checkered PVC Picnic Tablecloth with 6", "Securing Clips - Green.............19,90"]`

#### Explanation:

The first array element contains 34 characters, which is less then 40, but with the following word 'Checkered' it would overpass this limit; thus the break happened on the first whitespace on the left side. The next line starts form position 35 (whitespace is ignored). Next stop should be 35 (started from here) + 40 (max per line), but also in this case there is a work at that position, so the break happens on the first whitespace character on the left side. The remaining part (form position 74) has less then 40 characters - price length, so they can fit into one line. Space between is filled up with dots.

#### On the receipt it should look similar to this:

```
Nicely Neat Reusable Extra Durable

Checkered PVC Picnic Tablecloth with 6

Securing Clips - Green.............19,90
```

Example input:
`"Coca-Cola 0,5l", "1,10", 40`

Expected result:
`["Coca-Cola 0,5l......................1,10"]`

#### Explanation:

The product is short and it can fit into one line. This is technically the last line as well, so it should contain dots and the price as well

**Note: Using Regular expression for this exercise is not allowed !!!**

Created by with <3 in mind by [Branimir](https://github.com/orgs/iSchoolProjects/people/Branimir)
