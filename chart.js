const ctx = document.getElementById('distribution-chart');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{ data: [10, 20, 50] }],
        labels: ['q','w','e']
    },
    options: {
        cutoutPercentage: 25
    }
});