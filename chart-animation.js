// Chart Animation - Animated Charts Based on Real Data
// 6 phases timeline with animated transitions

const phaseData = {
    0: {
        title: 'Nửa Đầu 2025',
        metrics: {
            compute: 5,
            cost: 450,
            reliability: 60,
            marketCap: 800
        }
    },
    1: {
        title: 'Cuối 2025',
        metrics: {
            compute: 50,
            cost: 300,
            reliability: 75,
            marketCap: 1500
        }
    },
    2: {
        title: 'Đầu 2026',
        metrics: {
            compute: 100,
            cost: 200,
            reliability: 85,
            marketCap: 2200
        }
    },
    3: {
        title: 'Giữa 2026',
        metrics: {
            compute: 200,
            cost: 120,
            reliability: 90,
            marketCap: 3500
        }
    },
    4: {
        title: 'Cuối 2026',
        metrics: {
            compute: 400,
            cost: 80,
            reliability: 95,
            marketCap: 5000
        }
    },
    5: {
        title: '2027+',
        metrics: {
            compute: 800,
            cost: 40,
            reliability: 99,
            marketCap: 8000
        }
    }
};

class AnimatedChart {
    constructor(canvasId, phase) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.phase = phase;
        this.data = phaseData[phase].metrics;
        this.animationProgress = 0;
        this.animationDuration = 800; // ms
        this.startTime = null;
        
        this.setupCanvas();
        this.animate();
    }
    
    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
    }
    
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    animate(currentTime) {
        if (!this.startTime) this.startTime = currentTime;
        const elapsed = currentTime - this.startTime;
        
        this.animationProgress = Math.min(elapsed / this.animationDuration, 1);
        this.animationProgress = this.easeInOutQuad(this.animationProgress);
        
        this.draw();
        
        if (this.animationProgress < 1) {
            requestAnimationFrame((t) => this.animate(t));
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        const padding = 40;
        const chartWidth = this.width - padding * 2;
        const chartHeight = this.height - padding * 2;
        
        // Draw grid and axes
        this.drawAxes(padding, chartWidth, chartHeight);
        
        // Draw metrics bars
        this.drawMetricsBars(padding, chartWidth, chartHeight);
        
        // Draw title
        this.drawTitle(padding);
    }
    
    drawAxes(padding, chartWidth, chartHeight) {
        this.ctx.strokeStyle = '#e5e7eb';
        this.ctx.lineWidth = 1;
        
        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding);
        this.ctx.lineTo(padding, padding + chartHeight);
        this.ctx.stroke();
        
        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding + chartHeight);
        this.ctx.lineTo(padding + chartWidth, padding + chartHeight);
        this.ctx.stroke();
        
        // Grid lines
        this.ctx.strokeStyle = '#f3f4f6';
        this.ctx.lineWidth = 1;
        
        const gridLines = 4;
        for (let i = 1; i < gridLines; i++) {
            const y = padding + (chartHeight / gridLines) * i;
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(padding + chartWidth, y);
            this.ctx.stroke();
        }
    }
    
    drawMetricsBars(padding, chartWidth, chartHeight) {
        const metrics = ['compute', 'cost', 'reliability', 'marketCap'];
        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];
        const barWidth = chartWidth / (metrics.length * 1.5);
        const baselineY = padding + chartHeight;
        
        metrics.forEach((metric, index) => {
            const maxValues = {
                compute: 800,
                cost: 450,
                reliability: 100,
                marketCap: 8000
            };
            
            const value = this.data[metric];
            const maxValue = maxValues[metric];
            const animatedValue = value * this.animationProgress;
            const barHeight = (animatedValue / maxValue) * chartHeight;
            
            const x = padding + (index * chartWidth / metrics.length) + 20;
            const y = baselineY - barHeight;
            
            // Draw bar
            this.ctx.fillStyle = colors[index];
            this.ctx.globalAlpha = 0.8;
            this.ctx.fillRect(x, y, barWidth, barHeight);
            this.ctx.globalAlpha = 1;
            
            // Draw label
            this.ctx.fillStyle = '#1f2937';
            this.ctx.font = '12px sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(metric, x + barWidth / 2, baselineY + 20);
            
            // Draw value
            this.ctx.font = 'bold 14px sans-serif';
            this.ctx.fillStyle = colors[index];
            this.ctx.fillText(Math.round(animatedValue), x + barWidth / 2, y - 10);
        });
    }
    
    drawTitle(padding) {
        this.ctx.fillStyle = '#1f2937';
        this.ctx.font = 'bold 16px sans-serif';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(phaseData[this.phase].title, padding, padding - 10);
    }
}

// Line Chart for Timeline Evolution
class TimelineLineChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.animationProgress = 0;
        this.animationDuration = 1200;
        this.startTime = null;
        
        this.setupCanvas();
        this.animate();
    }
    
    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
    }
    
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    animate(currentTime) {
        if (!this.startTime) this.startTime = currentTime;
        const elapsed = currentTime - this.startTime;
        
        this.animationProgress = Math.min(elapsed / this.animationDuration, 1);
        this.animationProgress = this.easeInOutQuad(this.animationProgress);
        
        this.draw();
        
        if (this.animationProgress < 1) {
            requestAnimationFrame((t) => this.animate(t));
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        const padding = 50;
        const chartWidth = this.width - padding * 2;
        const chartHeight = this.height - padding * 2;
        
        // Draw axes
        this.drawAxes(padding, chartWidth, chartHeight);
        
        // Draw lines for each metric
        this.drawLines(padding, chartWidth, chartHeight);
        
        // Draw legend
        this.drawLegend(padding);
    }
    
    drawAxes(padding, chartWidth, chartHeight) {
        this.ctx.strokeStyle = '#e5e7eb';
        this.ctx.lineWidth = 2;
        
        // Y axis
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding);
        this.ctx.lineTo(padding, padding + chartHeight);
        this.ctx.stroke();
        
        // X axis
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding + chartHeight);
        this.ctx.lineTo(padding + chartWidth, padding + chartHeight);
        this.ctx.stroke();
        
        // Grid lines
        this.ctx.strokeStyle = '#f3f4f6';
        this.ctx.lineWidth = 1;
        
        const gridLines = 4;
        for (let i = 1; i < gridLines; i++) {
            const y = padding + (chartHeight / gridLines) * i;
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(padding + chartWidth, y);
            this.ctx.stroke();
        }
        
        // X axis labels
        this.ctx.fillStyle = '#6b7280';
        this.ctx.font = '11px sans-serif';
        this.ctx.textAlign = 'center';
        
        const phases = ['2025-1', '2025-2', '2026-1', '2026-2', '2026-3', '2027+'];
        phases.forEach((label, i) => {
            const x = padding + (chartWidth / (phases.length - 1)) * i;
            this.ctx.fillText(label, x, padding + chartHeight + 20);
        });
    }
    
    drawLines(padding, chartWidth, chartHeight) {
        const metrics = [
            { key: 'compute', color: '#6366f1', label: 'Năng Lực' },
            { key: 'reliability', color: '#ec4899', label: 'Độ Tin Cậy' }
        ];
        
        metrics.forEach(metric => {
            this.drawLine(
                padding,
                chartWidth,
                chartHeight,
                metric.key,
                metric.color
            );
        });
    }
    
    drawLine(padding, chartWidth, chartHeight, metricKey, color) {
        const points = [];
        const phases = Object.keys(phaseData).length;
        
        Object.keys(phaseData).forEach((phase, idx) => {
            const maxValues = {
                compute: 800,
                cost: 450,
                reliability: 100,
                marketCap: 8000
            };
            
            const value = phaseData[phase].metrics[metricKey];
            const maxValue = maxValues[metricKey];
            
            const x = padding + (chartWidth / (phases - 1)) * idx;
            const animatedValue = value * this.animationProgress;
            const y = padding + chartHeight - (animatedValue / maxValue) * chartHeight;
            
            points.push({ x, y });
        });
        
        // Draw line
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        
        points.forEach((point, i) => {
            if (i === 0) {
                this.ctx.moveTo(point.x, point.y);
            } else {
                this.ctx.lineTo(point.x, point.y);
            }
        });
        
        this.ctx.stroke();
        
        // Draw points
        this.ctx.fillStyle = color;
        points.forEach(point => {
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    drawLegend(padding) {
        const legends = [
            { color: '#6366f1', text: 'Năng Lực Tính Toán' },
            { color: '#ec4899', text: 'Độ Tin Cậy' }
        ];
        
        this.ctx.font = '12px sans-serif';
        
        legends.forEach((item, i) => {
            const x = padding + 20;
            const y = padding + 10 + i * 20;
            
            // Color box
            this.ctx.fillStyle = item.color;
            this.ctx.fillRect(x, y - 10, 12, 12);
            
            // Text
            this.ctx.fillStyle = '#1f2937';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.text, x + 20, y);
        });
    }
}

// Initialize charts when page loads
function initializeCharts() {
    // Try to create timeline line chart if element exists
    const timelineChart = document.getElementById('timeline-chart');
    if (timelineChart) {
        new TimelineLineChart('timeline-chart');
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCharts);
} else {
    initializeCharts();
}
