export const monthChartData = {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
        datasets: [{
            label: '2019',
            // backgroundColor:'rgba(255, 0, 0, 0.2)',
            borderColor: 'lightblue',
            pointBackgroundColor: 'blue',
            borderWidth: 1,
            pointedBorderColor: 'blue',
            data: [40, 39, 31, 11, 45, 50, 12, 45, 17, 44, 54, 20],
            backgroundColor: 'transparent',
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            display: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
}

export default monthChartData;