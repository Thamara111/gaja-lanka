// Gaja Lanka - Statistics & Data Trends Charts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Historical Population Chart
  const ctx1 = document.getElementById('historicalPopChart');
  if (ctx1 && typeof Chart !== 'undefined') {
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['1800', '1850', '1900', '1960', '1993', '2011 (Census)', '2024 (Est.)', '2025 (Est.)'],
        datasets: [{
          label: 'Wild Elephant Population',
          data: [14000, 10500, 6000, 1800, 3100, 5879, 7451, 7450],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: '#34d399',
          pointBorderColor: '#ffffff',
          pointRadius: 5,
          pointHoverRadius: 8
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: { color: '#cbd5e1', font: { size: 12, family: 'Inter' } }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            titleColor: '#34d399',
            bodyColor: '#f1f5f9',
            borderColor: '#334155',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: function(context) {
                return ' Est. Population: ' + context.parsed.y.toLocaleString();
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } },
            beginAtZero: true
          }
        }
      }
    });
  }

  // 2. Annual Casualties Chart (Elephants vs Humans)
  const ctx2 = document.getElementById('annualMortalityChart');
  if (ctx2 && typeof Chart !== 'undefined') {
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
          {
            label: 'Elephants Killed',
            data: [319, 405, 328, 375, 433, 488, 425, 412],
            backgroundColor: '#ef4444',
            borderRadius: 6
          },
          {
            label: 'Human Fatalities',
            data: [96, 121, 112, 142, 145, 169, 134, 138],
            backgroundColor: '#f59e0b',
            borderRadius: 6
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: { color: '#cbd5e1', font: { size: 12, family: 'Inter' } }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            borderColor: '#334155',
            borderWidth: 1,
            padding: 12
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } },
            beginAtZero: true
          }
        }
      }
    });
  }

  // 3. Causes of Mortality Doughnut Chart
  const ctx3 = document.getElementById('killingCausesChart');
  if (ctx3 && typeof Chart !== 'undefined') {
    new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: [
          'Hakka Patas (Jaw Bombs)',
          'Gunshots',
          'Illegal Electrocution',
          'Train Collisions',
          'Poisons & Traps',
          'Natural & Other'
        ],
        datasets: [{
          data: [44.8, 21.6, 17.5, 7.2, 5.4, 3.5],
          backgroundColor: [
            '#ef4444', // red
            '#f59e0b', // amber
            '#3b82f6', // blue
            '#a855f7', // purple
            '#10b981', // green
            '#64748b'  // slate
          ],
          borderColor: '#0f172a',
          borderWidth: 3,
          hoverOffset: 10
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#cbd5e1', font: { size: 11, family: 'Inter' }, boxWidth: 12, padding: 14 }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            borderColor: '#334155',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: function(context) {
                return ' ' + context.label + ': ' + context.parsed + '%';
              }
            }
          }
        },
        cutout: '62%'
      }
    });
  }
});
