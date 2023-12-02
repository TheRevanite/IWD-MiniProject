// Sample data for property listings
const properties = [
    { id: 1, location: 'City A', price: '$150,000' },
    { id: 2, location: 'City B', price: '$220,000' },
    { id: 3, location: 'City C', price: '$180,000' },
    // Add more properties as needed
];

// Function to display property listings
function displayListings() {
    const listingsContainer = document.getElementById('property-listings');
    listingsContainer.innerHTML = '';

    properties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property');
        propertyElement.innerHTML = `<h3>${property.location}</h3><p>${property.price}</p>`;
        listingsContainer.appendChild(propertyElement);
    });
}

// Function to filter and display property listings based on user input
function searchProperties() {
    const locationInput = document.getElementById('location');
    const priceSelect = document.getElementById('price');

    const location = locationInput.value.toLowerCase();
    const price = priceSelect.value;

    const filteredProperties = properties.filter(property => {
        const matchesLocation = property.location.toLowerCase().includes(location);
        const matchesPrice = price === '' || property.price === price;
        return matchesLocation && matchesPrice;
    });

    // Display filtered listings
    displayListings(filteredProperties);
}

// Initial display of property listings
displayListings();