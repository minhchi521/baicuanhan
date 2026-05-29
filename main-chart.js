// ==========================================
// Main Timeline Chart - Advanced Animated Charts
// ==========================================

const chartData = {
    0: {
        title: "Mid 2025: AI Agents First Appear",
        timeline: "Jan-Jun 2025",
        description: "The world sees its first AI agents. Marketed as personal assistants but still unreliable. Specialized coding and research agents begin transforming professional domains.",
        
        // Line chart: Global Computing Power
        lineChart: {
            title: "Global Computing Power Growth",
            data: [
                { month: "Jan", value: 5, label: "5×10²⁷" },
                { month: "Feb", value: 6, label: "6×10²⁷" },
                { month: "Mar", value: 7, label: "7×10²⁷" },
                { month: "Apr", value: 8, label: "8×10²⁷" },
                { month: "May", value: 9, label: "9×10²⁷" },
                { month: "Jun", value: 10, label: "10×10²⁷" }
            ],
            color: "#222"
        },
        
        // Bar chart: AI Companies & Reliability
        barChart: {
            title: "AI Market Metrics",
            bars: [
                { label: "AI Companies", value: 15, color: "#222" },
                { label: "Reliability %", value: 60, color: "#666" },
                { label: "Cost $/month", value: 3, color: "#999" }
            ]
        }
    },
    1: {
        title: "Late 2025: Megascale AI Infrastructure",
        timeline: "Jul-Dec 2025",
        description: "OpenBrain completes construction of the world's largest datacenters. Computing power increases thousandfold. Major AI companies begin the arms race for capabilities.",
        
        lineChart: {
            title: "Compute Scaling Acceleration",
            data: [
                { month: "Jul", value: 12, label: "12×10²⁸" },
                { month: "Aug", value: 18, label: "18×10²⁸" },
                { month: "Sep", value: 28, label: "28×10²⁸" },
                { month: "Oct", value: 38, label: "38×10²⁸" },
                { month: "Nov", value: 45, label: "45×10²⁸" },
                { month: "Dec", value: 50, label: "50×10²⁸" }
            ],
            color: "#222"
        },
        
        barChart: {
            title: "Investment & Resources",
            bars: [
                { label: "Training Cost (B$)", value: 5, color: "#222" },
                { label: "Employees (K)", value: 5, color: "#666" },
                { label: "Stability %", value: 75, color: "#999" }
            ]
        }
    },
    2: {
        title: "Early 2026: Coding Automation",
        timeline: "Jan-Mar 2026",
        description: "AI agents achieve 50% acceleration of algorithmic progress. Junior programmer positions decline sharply. Demand for AI team managers surges 40%.",
        
        lineChart: {
            title: "Algorithmic Progress Speedup",
            data: [
                { month: "Jan", value: 35, label: "+35%" },
                { month: "Feb", value: 42, label: "+42%" },
                { month: "Mar", value: 50, label: "+50%" },
                { month: "Apr", value: 55, label: "+55%" },
                { month: "May", value: 58, label: "+58%" },
                { month: "Jun", value: 60, label: "+60%" }
            ],
            color: "#222"
        },
        
        barChart: {
            title: "Labor Market Impact",
            bars: [
                { label: "Junior Dev Loss %", value: 30, color: "#222" },
                { label: "AI Manager Need +%", value: 40, color: "#666" },
                { label: "Compute (10²⁸)", value: 75, color: "#999" }
            ]
        }
    },
    3: {
        title: "Mid 2026: China's AI Push",
        timeline: "Apr-Jun 2026",
        description: "China centralizes AI research and commits fully to the technology. Massive datacenter constructed at Tianwan. Geopolitical tensions escalate dramatically.",
        
        lineChart: {
            title: "US-China Compute Parity Gap",
            data: [
                { month: "Apr", value: 88, label: "US 88%" },
                { month: "May", value: 82, label: "US 82%" },
                { month: "Jun", value: 75, label: "US 75%" },
                { month: "Jul", value: 70, label: "US 70%" },
                { month: "Aug", value: 65, label: "US 65%" },
                { month: "Sep", value: 60, label: "US 60%" }
            ],
            color: "#222"
        },
        
        barChart: {
            title: "Global AI Distribution",
            bars: [
                { label: "USA % World", value: 60, color: "#222" },
                { label: "China %", value: 12, color: "#666" },
                { label: "Tech Gap Months", value: 6, color: "#999" }
            ]
        }
    },
    4: {
        title: "Late 2026: AI Labor Displacement",
        timeline: "Jul-Dec 2026",
        description: "OpenBrain releases Agent-1-mini at 10x lower cost. Stock market surges 30%. Concerns about AI impact on employment reach mainstream consciousness.",
        
        lineChart: {
            title: "Economic & Power Growth",
            data: [
                { month: "Jul", value: 18, label: "18 GW" },
                { month: "Aug", value: 22, label: "22 GW" },
                { month: "Sep", value: 26, label: "26 GW" },
                { month: "Oct", value: 31, label: "31 GW" },
                { month: "Nov", value: 36, label: "36 GW" },
                { month: "Dec", value: 38, label: "38 GW" }
            ],
            color: "#222"
        },
        
        barChart: {
            title: "Markets & Society",
            bars: [
                { label: "Stock Gain %", value: 30, color: "#222" },
                { label: "AI Power GW", value: 38, color: "#666" },
                { label: "Growth vs 2025x", value: 15, color: "#999" }
            ]
        }
    },
    5: {
        title: "2027+: AI Inflection Point",
        timeline: "Jan 2027+",
        description: "Agent-4 becomes superhuman AI researcher. Alignment concerns become critical. AI development becomes matter of national security. Government oversight expands.",
        
        lineChart: {
            title: "Research Output & Revenue",
            data: [
                { month: "Q1", value: 20, label: "$20B" },
                { month: "Q2", value: 25, label: "$25B" },
                { month: "Q3", value: 28, label: "$28B" },
                { month: "Q4", value: 35, label: "$35B" },
                { month: "2028", value: 50, label: "$50B" },
                { month: "2029", value: 70, label: "$70B" }
            ],
            color: "#222"
        },
        
        barChart: {
            title: "Global Metrics",
            bars: [
                { label: "Speed vs Human x", value: 50, color: "#222" },
                { label: "Revenue Billion $", value: 35, color: "#666" },
                { label: "Security Risk %", value: 85, color: "#999" }
            ]
        }
    }
};

class AnimatedTimelineChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.currentPhase = 0;
        this.animationProgress = 0;
        this.animationFrameId = null;
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.render(0);
    }
    
    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        //this.canvas.height = rect.height;
        this.canvas.height = 350; // Giới hạn chiều cao ở 350px
        this.render(this.currentPhase);
    }
    
    render(phase) {
        this.currentPhase = phase;
        this.animationProgress = 0;
        
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        
        this.animate();
    }
    
    animate() {
        const data = chartData[this.currentPhase];
        if (!data) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Smooth animation
        this.animationProgress += 0.02;
        if (this.animationProgress > 1) this.animationProgress = 1;
        
        const progress = this.easeOutQuad(this.animationProgress);
        
        // Draw header
        this.drawHeader(data, progress);
        
        // Draw two-column layout
        const midX = this.canvas.width / 2;
        
        // Left: Line chart (giảm chiều cao từ 300 xuống 180)
        this.drawLineChart(data.lineChart, 30, 120, midX - 50, 180, progress);
        
        // Right: Bar chart (giảm chiều cao từ 300 xuống 180)
        this.drawBarChart(data.barChart, midX + 20, 120, this.canvas.width - 50, 180, progress);
        
        if (this.animationProgress < 1) {
            this.animationFrameId = requestAnimationFrame(() => this.animate());
        }
    }
    
    easeOutQuad(t) {
        return 1 - (1 - t) * (1 - t);
    }
    
    drawHeader(data, progress) {
        const padding = 30;
        const alpha = Math.min(progress * 2, 1);
        
        this.ctx.globalAlpha = alpha;
        
        // Timeline badge
        this.ctx.fillStyle = "#222";
        this.ctx.fillRect(padding, 10, 140, 28);
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "bold 11px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(data.timeline, padding + 70, 29);
        
        // Title
        this.ctx.fillStyle = "#000";
        this.ctx.font = "bold 16px Arial";
        this.ctx.textAlign = "left";
        this.ctx.fillText(data.title, padding, 65);
        
        // Description
        this.ctx.font = "11px Arial";
        this.ctx.fillStyle = "#666";
        this.ctx.textAlign = "left";
        const descLines = this.getWrappedLines(data.description, this.canvas.width - 60, this.ctx);
        descLines.forEach((line, idx) => {
            this.ctx.fillText(line, padding, 85 + idx * 15);
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    drawLineChart(data, x, y, width, height, progress) {
        const padding = 15;
        const chartX = x + padding;
        const chartY = y + padding + 30;
        const chartWidth = width - padding * 2 - x;
        const chartHeight = height - padding * 2 - 30;
        
        this.ctx.globalAlpha = Math.min(progress * 1.5, 1);
        
        // Background
        this.ctx.fillStyle = "#f8f8f8";
        this.ctx.fillRect(x, y, width - x, height);
        
        // Title
        this.ctx.fillStyle = "#000";
        this.ctx.font = "bold 13px Arial";
        this.ctx.textAlign = "left";
        this.ctx.fillText(data.title, x + padding, y + 20);
        
        // Grid
        this.ctx.strokeStyle = "#ddd";
        this.ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const gridY = chartY + (chartHeight / 4) * i;
            this.ctx.beginPath();
            this.ctx.moveTo(chartX, gridY);
            this.ctx.lineTo(chartX + chartWidth, gridY);
            this.ctx.stroke();
        }
        
        // Axes
        this.ctx.strokeStyle = "#222";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(chartX, chartY);
        this.ctx.lineTo(chartX, chartY + chartHeight);
        this.ctx.lineTo(chartX + chartWidth, chartY + chartHeight);
        this.ctx.stroke();
        
        // Max value
        const maxVal = Math.max(...data.data.map(d => d.value));
        
        // Plot line
        this.ctx.strokeStyle = "#222";
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        
        data.data.forEach((point, i) => {
            const px = chartX + (i / (data.data.length - 1)) * chartWidth;
            const animatedValue = point.value * progress;
            const py = chartY + chartHeight - (animatedValue / maxVal) * chartHeight;
            
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        });
        this.ctx.stroke();
        
        // Points
        this.ctx.fillStyle = "#222";
        data.data.forEach((point, i) => {
            const px = chartX + (i / (data.data.length - 1)) * chartWidth;
            const animatedValue = point.value * progress;
            const py = chartY + chartHeight - (animatedValue / maxVal) * chartHeight;
            
            this.ctx.beginPath();
            this.ctx.arc(px, py, 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        // Labels - căn giữa, thẳng lối
        this.ctx.font = "10px Arial";
        this.ctx.fillStyle = "#333";
        this.ctx.textAlign = "center";
        data.data.forEach((point, i) => {
            const px = chartX + (i / (data.data.length - 1)) * chartWidth;
            this.ctx.fillText(point.month, px, chartY + chartHeight + 15);
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    drawBarChart(data, x, y, width, height, progress) {
        const padding = 15;
        const chartX = x + padding;
        const chartY = y + padding + 30;
        const chartWidth = width - padding * 2 - x;
        const chartHeight = height - padding * 2 - 30;
        
        this.ctx.globalAlpha = Math.min(progress * 1.5, 1);
        
        // Background
        this.ctx.fillStyle = "#f8f8f8";
        this.ctx.fillRect(x, y, width - x, height);
        
        // Title
        this.ctx.fillStyle = "#000";
        this.ctx.font = "bold 13px Arial";
        this.ctx.textAlign = "left";
        this.ctx.fillText(data.title, x + padding, y + 20);
        
        const maxVal = Math.max(...data.bars.map(b => b.value));
        const barWidth = chartWidth / data.bars.length * 0.7;
        const spacing = chartWidth / data.bars.length;
        
        // Draw bars
        data.bars.forEach((bar, i) => {
            const barX = chartX + spacing * i + (spacing - barWidth) / 2;
            const animatedHeight = (bar.value / maxVal) * chartHeight * progress;
            const barY = chartY + chartHeight - animatedHeight;
            
            // Bar
            this.ctx.fillStyle = bar.color;
            this.ctx.fillRect(barX, barY, barWidth, animatedHeight);
            
            // Value label (trên thanh)
            this.ctx.fillStyle = "#000";
            this.ctx.font = "bold 11px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText(Math.round(bar.value), barX + barWidth / 2, barY - 8);
            
            // Category label (dưới thanh, căn trái thẳng lối)
            this.ctx.fillStyle = "#333";
            this.ctx.font = "10px Arial";
            this.ctx.textAlign = "center";
            const labelLines = bar.label.split(' ');
            labelLines.forEach((labelLine, lineIdx) => {
                this.ctx.fillText(labelLine, barX + barWidth / 2, chartY + chartHeight + 12 + lineIdx * 12);
            });
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        this.ctx.font = "11px Arial";
        this.ctx.fillStyle = "#666";
        this.ctx.textAlign = "left";
        
        let currentY = y;
        for (let i = 0; i < words.length; i++) {
            const testLine = line + (line ? ' ' : '') + words[i];
            const metrics = this.ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && line) {
                this.ctx.fillText(line, x, currentY);
                line = words[i];
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        }
        if (line) this.ctx.fillText(line, x, currentY);
    }

    getWrappedLines(text, maxWidth, ctx) {
        const words = text.split(' ');
        const lines = [];
        let line = '';
        
        ctx.font = "11px Arial";
        for (let i = 0; i < words.length; i++) {
            const testLine = line + (line ? ' ' : '') + words[i];
            const metrics = ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && line) {
                lines.push(line);
                line = words[i];
            } else {
                line = testLine;
            }
        }
        if (line) lines.push(line);
        return lines;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const mainChart = new AnimatedTimelineChart('main-timeline-chart');
    
    window.updateMainChart = function(phase) {
        mainChart.render(phase);
    };
});
