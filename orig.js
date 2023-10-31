const person = {
    name: 'Vlad',
    email: 'testmail@gmail.com',
    phone: '742837438924782',
};

const products = [
    {
        title: 'California',
        price: 3288,
        weight: '1Kg',
        roll_number: 5,
        category: 'sushi',
        ingredients: ['rice', 'sauce', 'fish', 'cream cheese'],
    },
    // Add more product variants here
];

const orders = [];

function selectSushi() {
    console.log('Available Sushi:');
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.title} - $${product.price}`);
    });

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Select a sushi (enter the number): ', (selectedSushi) => {
        const sushi = products[selectedSushi - 1];
        if (sushi) {
            rl.question('Enter the quantity: ', (quantity) => {
                const totalCost = sushi.price * quantity;
                console.log(`Total cost: $${totalCost}`);
                rl.close();
            });
        } else {
            console.log('Invalid selection. Please try again.');
            rl.close();
        }
    });
}

selectSushi();
