// ==========================================
// Chart.js - Advanced Charting Functions
// ==========================================

// This file contains all chart-related functionality

let chartsInitialized = false;

function initCapabilityChart() {
    if (chartsInitialized) return;
    chartsInitialized = true;

    const canvas = document.getElementById('capability-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Ensure canvas size is set
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const data = [
        { year: '2024', openbrain: 1, competitors: 1, china: 0.8 },
        { year: '2025-Q1', openbrain: 1.5, competitors: 1.2, china: 0.85 },
        { year: '2025-Q2', openbrain: 2.5, competitors: 1.8, china: 0.9 },
        { year: '2025-Q3', openbrain: 4, competitors: 2.5, china: 1 },
        { year: '2025-Q4', openbrain: 6, competitors: 3.5, china: 1.2 },
        { year: '2026-Q1', openbrain: 10, competitors: 5, china: 2 },
        { year: '2026-Q2', openbrain: 16, competitors: 8, china: 3.5 },
        { year: '2026-Q3', openbrain: 25, competitors: 12, china: 5 },
        { year: '2026-Q4', openbrain: 40, competitors: 20, china: 8 },
        { year: '2027-Q1', openbrain: 64, competitors: 32, china: 13 },
        { year: '2027-Q2', openbrain: 100, competitors: 50, china: 20 }
    ];

    drawChart(ctx, canvas, data);

    // Initialize mini charts
    setTimeout(() => {
        initComputeChart();
        initMarketShareChart();
        initResearchSpeedChart();
        initJobMarketChart();
    }, 100);
}

function drawChart(ctx, canvas, data) {
    const padding = 70;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Find max value
    const maxValue = Math.max(...data.map(d => Math.max(d.openbrain, d.competitors, d.china)));

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        
        // Horizontal grid line
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();

        // Y axis label
        const value = Math.round((maxValue / 5) * (5 - i));
        ctx.fillStyle = '#9ca3af';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(value, padding - 15, y);
    }

    // Draw axes
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Calculate x position for each point
    const xStep = chartWidth / (data.length - 1);

    // Draw lines
    function drawLine(color, dataKey, isActive = true, isDashed = false) {
        ctx.strokeStyle = color;
        ctx.lineWidth = isActive ? 3 : 2;
        if (isDashed) {
            ctx.setLineDash([5, 5]);
        }
        ctx.beginPath();

        for (let i = 0; i < data.length; i++) {
            const x = padding + i * xStep;
            const y = canvas.height - padding - (data[i][dataKey] / maxValue) * chartHeight;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // Draw lines
    drawLine('#6366f1', 'openbrain', true);
    drawLine('#ec4899', 'competitors', true, true);
    drawLine('#f59e0b', 'china', false, true);

    // Draw points
    for (let i = 0; i < data.length; i++) {
        const x = padding + i * xStep;

        // OpenBrain
        const y1 = canvas.height - padding - (data[i].openbrain / maxValue) * chartHeight;
        ctx.fillStyle = '#6366f1';
        ctx.beginPath();
        ctx.arc(x, y1, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Competitors
        const y2 = canvas.height - padding - (data[i].competitors / maxValue) * chartHeight;
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        ctx.arc(x, y2, 4, 0, Math.PI * 2);
        ctx.fill();

        // China
        const y3 = canvas.height - padding - (data[i].china / maxValue) * chartHeight;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(x, y3, 3, 0, Math.PI * 2);
        ctx.fill();
    }

    // X axis labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            const x = padding + i * xStep;
            ctx.fillText(data[i].year, x, canvas.height - padding + 15);
        }
    }

    // Draw legend
    drawLegend(ctx, canvas);
}

function drawLegend(ctx, canvas) {
    const legendX = canvas.width - 300;
    const legendY = 40;
    const lineHeight = 25;

    // Semi-transparent background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(legendX - 10, legendY - 10, 290, 90);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.strokeRect(legendX - 10, legendY - 10, 290, 90);

    // Legend items
    const items = [
        { color: '#6366f1', label: 'OpenBrain' },
        { color: '#ec4899', label: 'Competitors' },
        { color: '#f59e0b', label: 'China' }
    ];

    items.forEach((item, index) => {
        const y = legendY + index * lineHeight;

        // Color box
        ctx.fillStyle = item.color;
        ctx.fillRect(legendX, y, 15, 15);

        // Label
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.label, legendX + 25, y + 7);
    });
}

// ==========================================
// Mini Chart Functions
// ==========================================

function initComputeChart() {
    const canvas = document.getElementById('compute-chart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 250;

    const ctx = canvas.getContext('2d');
    const data = [10, 25, 50, 100, 200, 400, 800];
    const labels = ['2024', 'Q2', 'Q4', '2025', 'Q2', 'Q4', '2026'];

    drawBarChart(ctx, canvas, data, labels, '#6366f1');
}

function initMarketShareChart() {
    const canvas = document.getElementById('market-share-chart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 250;

    const ctx = canvas.getContext('2d');
    drawPieChart(ctx, canvas, 
        [40, 35, 25], 
        ['OpenBrain', 'Competitors', 'China'],
        ['#6366f1', '#ec4899', '#f59e0b']
    );
}

function initResearchSpeedChart() {
    const canvas = document.getElementById('research-speed-chart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 250;

    const ctx = canvas.getContext('2d');
    const data = [1, 2, 4, 8, 16, 32, 50];
    const labels = ['2024', 'Q2', 'Q4', '2025', 'Q2', 'Q4', '2027'];

    drawAreaChart(ctx, canvas, data, labels);
}

function initJobMarketChart() {
    const canvas = document.getElementById('job-market-chart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 250;

    const ctx = canvas.getContext('2d');
    drawGroupedChart(ctx, canvas);
}

function drawBarChart(ctx, canvas, data, labels, color) {
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const barWidth = chartWidth / data.length * 0.7;
    const spacing = chartWidth / data.length;

    const maxValue = Math.max(...data);

    // Draw background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }

    // Draw bars
    data.forEach((value, index) => {
        const x = padding + index * spacing + spacing / 2 - barWidth / 2;
        const barHeight = (value / maxValue) * chartHeight;
        const y = canvas.height - padding - barHeight;

        // Bar
        ctx.fillStyle = color;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Value label
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(value, x + barWidth / 2, y - 5);

        // X label
        ctx.fillStyle = '#9ca3af';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(labels[index], x + barWidth / 2, canvas.height - padding + 5);
    });
}

function drawPieChart(ctx, canvas, data, labels, colors) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 3;

    // Draw background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const total = data.reduce((a, b) => a + b, 0);
    let startAngle = -Math.PI / 2;

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * Math.PI * 2;

        // Draw slice
        ctx.fillStyle = colors[index];
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fill();

        // Draw border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();

        // Draw label
        const labelAngle = startAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(value + '%', labelX, labelY);

        startAngle += sliceAngle;
    });

    // Draw legend
    labels.forEach((label, index) => {
        const y = 20 + index * 20;
        ctx.fillStyle = colors[index];
        ctx.fillRect(10, y, 12, 12);
        ctx.fillStyle = '#1f2937';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, 25, y + 6);
    });
}

function drawAreaChart(ctx, canvas, data, labels) {
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const maxValue = Math.max(...data);

    // Draw background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }

    const xStep = chartWidth / (data.length - 1);

    // Draw area
    ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);

    for (let i = 0; i < data.length; i++) {
        const x = padding + i * xStep;
        const y = canvas.height - padding - (data[i] / maxValue) * chartHeight;
        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.closePath();
    ctx.fill();

    // Draw line
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = padding + i * xStep;
        const y = canvas.height - padding - (data[i] / maxValue) * chartHeight;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw points
    data.forEach((value, index) => {
        const x = padding + index * xStep;
        const y = canvas.height - padding - (value / maxValue) * chartHeight;
        ctx.fillStyle = '#6366f1';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawGroupedChart(ctx, canvas) {
    const data = [
        { label: '2024', junior: 100, ai_manager: 10 },
        { label: '2025', junior: 60, ai_manager: 40 },
        { label: '2026', junior: 30, ai_manager: 80 }
    ];

    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const groupSpacing = chartWidth / data.length;
    const barWidth = groupSpacing * 0.35;

    // Draw background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }

    // Draw bars
    data.forEach((group, index) => {
        const groupX = padding + index * groupSpacing + groupSpacing / 2;

        // Junior bar
        const juniorHeight = (group.junior / 100) * chartHeight;
        const juniorY = canvas.height - padding - juniorHeight;
        ctx.fillStyle = '#ec4899';
        ctx.fillRect(groupX - barWidth - 5, juniorY, barWidth, juniorHeight);

        // AI Manager bar
        const managerHeight = (group.ai_manager / 100) * chartHeight;
        const managerY = canvas.height - padding - managerHeight;
        ctx.fillStyle = '#6366f1';
        ctx.fillRect(groupX + 5, managerY, barWidth, managerHeight);

        // Label
        ctx.fillStyle = '#9ca3af';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(group.label, groupX, canvas.height - padding + 5);
    });

    // Draw legend
    ctx.fillStyle = '#ec4899';
    ctx.fillRect(10, 10, 12, 12);
    ctx.fillStyle = '#1f2937';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('Lập Trình Viên Junior', 25, 16);

    ctx.fillStyle = '#6366f1';
    ctx.fillRect(10, 30, 12, 12);
    ctx.fillStyle = '#1f2937';
    ctx.fillText('Quản Lý AI', 25, 36);
}

// Export functions
window.ChartsModule = {
    initCapabilityChart
};
