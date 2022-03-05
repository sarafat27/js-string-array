const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'Dell yellow laptop with black camera',
    '1x59 lenovo fast commercial laptop',
    'LG supernova laptop',
    'htc low price phone',
    'Dell black color phone with Laptop'
];

const searching = 'Dell';

//indexOf

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}

// console.log(output);

//includes()
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output)

//startswith()
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output)
