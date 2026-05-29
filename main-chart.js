// ==========================================
// Main Timeline Chart - Advanced Animated Charts
// ==========================================

const chartData = {
    0: {
        title: "Nửa Đầu 2025: AI Agents Lần Đầu Xuất Hiện",
        timeline: "Tháng 1-6 2025",
        description: "Thế giới lần đầu chứng kiến AI agents. Chúng được quảng cáo là trợ lý cá nhân nhưng vẫn còn không ổn định.",
        
        // Line chart: Năng lực tính toán
        lineChart: {
            title: "Năng Lực Tính Toán Toàn Cầu",
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
        
        // Bar chart: Số công ty & tin cậy
        barChart: {
            title: "Số Công Ty AI vs Độ Tin Cậy",
            bars: [
                { label: "Công Ty AI", value: 15, color: "#222" },
                { label: "Độ Tin Cậy (%)", value: 60, color: "#666" },
                { label: "Chi Phí $/tháng", value: 3, color: "#999" }
            ]
        }
    },
    1: {
        title: "Cuối 2025: Siêu Máy Tính AI Lớn Nhất",
        timeline: "Tháng 7-12 2025",
        description: "OpenBrain hoàn thành xây dựng các trung tâm dữ liệu khổng lồ. Năng lực tính toán tăng lên hàng nghìn lần.",
        
        lineChart: {
            title: "Tốc Độ Tăng Năng Lực",
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
            title: "Chi Phí & Nhân Sự",
            bars: [
                { label: "Chi Phí Huấn Luyện (Tỷ $)", value: 5, color: "#222" },
                { label: "Nhân Viên OpenBrain (K)", value: 5, color: "#666" },
                { label: "Độ Ổn Định (%)", value: 75, color: "#999" }
            ]
        }
    },
    2: {
        title: "Đầu 2026: Tự Động Hóa Lập Trình",
        timeline: "Tháng 1-3 2026",
        description: "Nhờ AI agents, OpenBrain tăng tốc độ tiến bộ lên 50%. Nhu cầu quản lý AI teams tăng vọt.",
        
        lineChart: {
            title: "Tốc Độ Phát Triển Thuật Toán",
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
            title: "Tác Động Thị Trường Lao Động",
            bars: [
                { label: "Lập Trình Viên Jr Mất Việc (%)", value: 30, color: "#222" },
                { label: "Nhu Cầu AI Manager (+%)", value: 40, color: "#666" },
                { label: "Năng Lực Tính Toán (10²⁸)", value: 75, color: "#999" }
            ]
        }
    },
    3: {
        title: "Giữa 2026: Trung Quốc Thức Tỉnh",
        timeline: "Tháng 4-6 2026",
        description: "Trung Quốc hợp nhất các công ty AI thành khối thống nhất. Xây dựng khu phát triển tập trung Tianwan.",
        
        lineChart: {
            title: "Cạnh Tranh USA vs Trung Quốc",
            data: [
                { month: "Apr", value: 88, label: "USA 88%" },
                { month: "May", value: 82, label: "USA 82%" },
                { month: "Jun", value: 75, label: "USA 75%" },
                { month: "Jul", value: 70, label: "USA 70%" },
                { month: "Aug", value: 65, label: "USA 65%" },
                { month: "Sep", value: 60, label: "USA 60%" }
            ],
            color: "#222"
        },
        
        barChart: {
            title: "Phân Bố Năng Lực Toàn Cầu",
            bars: [
                { label: "USA (% Thế giới)", value: 60, color: "#222" },
                { label: "Trung Quốc (%)", value: 12, color: "#666" },
                { label: "Độ Trễ Công Nghệ (tháng)", value: 6, color: "#999" }
            ]
        }
    },
    4: {
        title: "Cuối 2026: AI Bắt Đầu Lấy Việc Làm",
        timeline: "Tháng 7-12 2026",
        description: "OpenBrain phát hành Agent-1-mini - 10x rẻ hơn. Thị trường chứng khoán tăng 30%. Nhu cầu AI Manager tăng vọt.",
        
        lineChart: {
            title: "Tăng Trưởng Kinh Tế & Năng Lượng",
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
            title: "Thị Trường & Xã Hội",
            bars: [
                { label: "CK Tăng (%)", value: 30, color: "#222" },
                { label: "Năng Lượng AI (GW)", value: 38, color: "#666" },
                { label: "Phát Triển vs 2025 (Lần)", value: 15, color: "#999" }
            ]
        }
    },
    5: {
        title: "2027 & Sau: Nước Rẽ Lịch Sử",
        timeline: "Tháng 1+ 2027",
        description: "Agent-4 trở thành nhà nghiên cứu siêu nhân. Dấu hiệu lo ngại về sự sắp xếp AI xuất hiện toàn cầu.",
        
        lineChart: {
            title: "Đầu Ra Nghiên Cứu & Doanh Thu",
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
            title: "Chỉ Số Toàn Cầu",
            bars: [
                { label: "Tốc Độ Tiến Bộ (x Con Người)", value: 50, color: "#222" },
                { label: "Doanh Thu OpenBrain (Tỷ $)", value: 35, color: "#666" },
                { label: "Nguy Cơ An Niền (%)", value: 85, color: "#999" }
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
        this.ctx.font = "bold 18px Arial";
        this.ctx.textAlign = "left";
        this.ctx.fillText(data.title, padding, 70);
        
        // Description
        this.ctx.font = "12px Arial";
        this.ctx.fillStyle = "#555";
        this.wrapText(data.description, padding, 95, this.canvas.width - 60, 18);
        
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
        
        // Labels
        this.ctx.font = "10px Arial";
        this.ctx.fillStyle = "#666";
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
            
            // Value label
            this.ctx.fillStyle = "#000";
            this.ctx.font = "bold 11px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText(Math.round(bar.value), barX + barWidth / 2, barY - 5);
            
            // Category label
            this.ctx.fillStyle = "#666";
            this.ctx.font = "10px Arial";
            this.wrapText(bar.label, barX + barWidth / 2 - 25, chartY + chartHeight + 15, 50, 12);
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        this.ctx.font = "11px Arial";
        this.ctx.fillStyle = "#666";
        this.ctx.textAlign = "center";
        
        for (let i = 0; i < words.length; i++) {
            const testLine = line + (line ? ' ' : '') + words[i];
            const metrics = this.ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && line) {
                this.ctx.fillText(line, x, y);
                line = words[i];
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        if (line) this.ctx.fillText(line, x, y);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const mainChart = new AnimatedTimelineChart('main-timeline-chart');
    
    window.updateMainChart = function(phase) {
        mainChart.render(phase);
    };
});
