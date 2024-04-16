// Export as module file
export const cart = [
	// normalizing the data
	{
		productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
		quantity: 2,
	},
	{
		productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
		quantity: 1,
	},
];

// FUNCTION TO ADD TO CART
export function addToCart(productId) {
	// UNDEFINED VARIABLE
	let matchingItem;

	// CHECK IF THE PRODUCT ALREADY EXISTS (Loop through the cart)
	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});

	// IF IT IS IN THE CART, INCREMENT THE QUANTITY
	if (matchingItem) {
		matchingItem.quantity++;
	} else {
		cart.push({
			productId,
			quantity: 1,
		});
	}
}
