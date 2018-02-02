//Get the element in our HTML #myChart
var ctx = document.getElementById("myChart");

//Library usage: https://data.sfgov.org/Culture-and-Recreation/Library-Usage/qzz6-2jup
$.ajax({
    url: 'https://data.sfgov.org/resource/hiem-xagp.json',
    type: 'GET',
    headers: {
        'X-App-Token': 'EHOYQjMyVi9IVVCPgMFM2yUfq'
    },
    success: function(response) {
        //Just logs it to the console, doesn't do anything
        console.log('Library data: ', response);

        //You can make a chart inside this success function and use the data in the response!
    }
})

//Initialize a Chart with Chart.js
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
