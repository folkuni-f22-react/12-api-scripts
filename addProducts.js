// Add several products to API

/*
[POST] ?action=add-product - add a new product. Request body: { name, price, description, picture, shopid }
*/
import { url, shopId } from './constants.js'

const data = {
	action: 'add-product',
	name: 'Water pistol',
	price: 12.5,
	description: 'Fires cooling streams of water at unsuspecting foes.',
	picture: 'insert web URL here',
	shopid: shopId
}
async function addProduct(oneProduct) {
	console.log('Adding product...')

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
}
async function addAllTheProducts() {
	// Detta är bara till för att skapa en array med produkter
	// Använd din egen data
	let products = [1, 2, 3].map(x => ({ ...data, name: 'Water pistol ' + x }))
	// console.log(products)

	products.forEach(product => {
		addProduct(product)
	})
}

addAllTheProducts()
