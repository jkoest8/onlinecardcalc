document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let pricePerCheckout = parseFloat(document.getElementById('pricePerCheckout').value);
    let numPatrons = parseFloat(document.getElementById('numPatrons').value);
    let avgTitles = parseFloat(document.getElementById('avgTitles').value);

    let revenue = numPatrons * 50;
    let cost = pricePerCheckout * avgTitles * numPatrons;
    let profit = revenue - cost;

    displayChart(revenue, cost, profit);
});

function displayChart(revenue, cost, profit) {
    var ctx = document.getElementById('profitChart').getContext('2d');
    var chart = new Chart(ctx, {
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
