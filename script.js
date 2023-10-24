document.addEventListener("DOMContentLoaded", function() {
    // Initial graph draw based on default values
    calculateAndDisplay();

    // Attach event listener to the form's submission (Calculate button click)
    document.getElementById('calcForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calculateAndDisplay();
    });
});

function calculateAndDisplay() {
    let pricePerCheckout = parseFloat(document.getElementById('pricePerCheckout').value);
    let numPatrons = parseFloat(document.getElementById('numPatrons').value);
    let avgTitles = parseFloat(document.getElementById('avgTitles').value);
    let avgItemCost = parseFloat(document.getElementById('avgItemCost').value);

    let revenue = numPatrons * 50;
    let cost = pricePerCheckout * avgTitles * numPatrons;
    let profit = revenue - cost;

    // Calculate how many items can be purchased with the profit
    let purchasableItems = Math.floor(profit / avgItemCost);

    // Display the number of purchasable items and make it visible
    document.getElementById('purchasableItems').textContent = `With the calculated profit, you can purchase approximately ${purchasableItems} items.`;
    document.getElementById('purchasableItems').style.display = "block";

    displayChart(revenue, cost, profit);
}

function displayChart(revenue, cost, profit) {
    var ctx = document.getElementById('profitChart').getContext('2d');

    // If a chart already exists, destroy it to avoid overlapping data
    if (window.chartInstance) {
        window.chartInstance.destroy();
    }

    window.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Cost', 'Profit'],
            datasets: [{
                label: 'Financial Forecasting',
                data: [revenue, cost, profit],
                backgroundColor: ['green', 'red', 'blue']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
