// JavaScript for creating the bar chart
const ctx = document.getElementById('skillsChart').getContext('2d');
Chart.defaults.font.family = "Oswald";
Chart.defaults.font.size = 16;
const skillsChart = new Chart(ctx, {
    type: 'bar', // Horizontal bar chart
    data: {
        labels: [   'Python',
                    'FastAPI',
                    'Flask',
                    'C# ASP.NET',
                    'SQL',
                    'Javascript',
                    'Solidity',
                    'Docker',
                    'Cloud',
                    'HTML',
                    'CSS'
                ],
        datasets: [{
            label: 'Skill Proficiency',
            data: [100,90,90,80,80,80,75,70,70,70,70],
            backgroundColor: '#f27c22', 
            borderColor: '#000000',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    display: false
                }
            }
        },
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

$(document).ready(function () {
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});