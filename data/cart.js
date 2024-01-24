// Export as module file
export const cart = [];

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
