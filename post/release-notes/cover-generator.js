/**
 * 发布日志封面图片生成器
 * 生成高质量的PNG格式封面图片
 */

// 封面配置
const config = {
    width: 1200,
    height: 630,
    colors: {
        background: ['#667eea', '#764ba2'],
        text: '#ffffff',
        version: '#ffd700',
        accent: 'rgba(255,255,255,0.3)'
    },
    fonts: {
        main: 'bold 48px Arial, sans-serif',
        sub: 'bold 42px Arial, sans-serif',
        version: '600 36px Courier New, monospace',
        code: '14px Courier New, monospace'
    }
};

/**
 * 生成封面图片
 */
function generateCover(mainTitle, subTitle, version) {
    // 创建canvas元素
    const canvas = document.createElement('canvas');
    canvas.width = config.width;
    canvas.height = config.height;
    const ctx = canvas.getContext('2d');

    // 绘制背景渐变
    const gradient = ctx.createLinearGradient(0, 0, config.width, config.height);
    gradient.addColorStop(0, config.colors.background[0]);
    gradient.addColorStop(1, config.colors.background[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, config.width, config.height);

    // 绘制代码背景纹理
    drawCodeBackground(ctx);

    // 绘制装饰元素
    drawDecorativeElements(ctx);

    // 绘制主标题
    drawMainText(ctx, mainTitle, subTitle, version);

    // 绘制技术图标
    drawTechIcons(ctx);

    // 绘制装饰线条
    drawDecorativeLines(ctx);

    return canvas;
}

/**
 * 绘制代码背景纹理
 */
function drawCodeBackground(ctx) {
    ctx.save();
    ctx.font = config.fonts.code;
    ctx.fillStyle = config.colors.accent;

    const codeLines = [
        '// Hugo Image Rendering Fix',
        '{{ $pageResource := .Resources.GetMatch }}',
        '// Multilingual Support',
        '{{ if eq .Site.Language.Lang "zh-cn" }}',
        '// Project Showcase Upgrade',
        '.project-card { transform: translateY(-10px); }',
        '// Release Notes v2025.09.17',
        '✨ New Features ✨',
        '🐛 Bug Fixes 🐛',
        '🔧 Optimizations 🔧',
        '🎯 Technical Highlights 🎯',
        'const result = { success: true, improved: true };',
        "console.log('🚀 Deployment Successful!');"
    ];

    codeLines.forEach((line, index) => {
        const x = 50 + (index % 4) * 250;
        const y = 50 + Math.floor(index / 4) * 40;

        // 添加渐变效果
        const textGradient = ctx.createLinearGradient(x, y-20, x + line.length * 8, y+20);
        textGradient.addColorStop(0, 'rgba(255,255,255,0.1)');
        textGradient.addColorStop(0.5, 'rgba(255,255,255,0.3)');
        textGradient.addColorStop(1, 'rgba(255,255,255,0.1)');

        ctx.fillStyle = textGradient;
        ctx.fillText(line, x, y);
    });

    ctx.restore();
}

/**
 * 绘制装饰元素
 */
function drawDecorativeElements(ctx) {
    ctx.save();

    // 左上角圆形装饰
    ctx.strokeStyle = config.colors.accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2);
    ctx.stroke();

    // 右上角多边形装饰
    ctx.save();
    ctx.translate(1100, 100);
    ctx.rotate(Date.now() / 1000); // 动态旋转
    ctx.beginPath();
    ctx.moveTo(0, -25);
    ctx.lineTo(25, 25);
    ctx.lineTo(-25, 25);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fill();
    ctx.restore();

    // 底部装饰线条
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 550);
    ctx.lineTo(1000, 550);
    ctx.stroke();

    ctx.restore();
}

/**
 * 绘制主标题文字
 */
function drawMainText(ctx, mainTitle, subTitle, version) {
    ctx.save();

    // 添加文字阴影效果
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    // 主标题 - 中文
    ctx.font = config.fonts.main;
    ctx.fillStyle = config.colors.text;
    ctx.textAlign = 'center';
    ctx.fillText(mainTitle || '发布日志', 600, 200);

    // 副标题 - 英文
    ctx.font = config.fonts.sub;
    ctx.fillText(subTitle || 'Release Notes', 600, 250);

    // 版本号
    ctx.font = config.fonts.version;
    ctx.fillStyle = config.colors.version;
    ctx.fillText(version || 'v2025.09.17', 600, 320);

    ctx.restore();
}

/**
 * 绘制技术图标
 */
function drawTechIcons(ctx) {
    ctx.save();
    ctx.font = '24px Arial';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.textAlign = 'center';

    const icons = ['🚀', '⚡', '🔧', '✨', '🎯'];
    const positions = [300, 450, 600, 750, 900];

    icons.forEach((icon, index) => {
        ctx.fillText(icon, positions[index], 590);
    });

    ctx.restore();
}

/**
 * 绘制装饰线条
 */
function drawDecorativeLines(ctx) {
    ctx.save();

    // 顶部渐变装饰条
    const topGradient = ctx.createLinearGradient(0, 0, config.width, 0);
    topGradient.addColorStop(0, 'rgba(255,255,255,0)');
    topGradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
    topGradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = topGradient;
    ctx.fillRect(0, 0, config.width, 30);

    // 底部渐变装饰条
    const bottomGradient = ctx.createLinearGradient(0, config.height - 30, config.width, config.height);
    bottomGradient.addColorStop(0, 'rgba(255,255,255,0)');
    bottomGradient.addColorStop(0.5, 'rgba(255,255,255,0.1)');
    bottomGradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = bottomGradient;
    ctx.fillRect(0, config.height - 30, config.width, 30);

    ctx.restore();
}

/**
 * 下载生成的图片
 */
function downloadCover() {
    // 获取当前输入参数
    const mainTitle = document.getElementById('mainTitle')?.value || '发布日志';
    const subTitle = document.getElementById('subTitle')?.value || 'Release Notes';
    const version = document.getElementById('version')?.value || 'v2025.09.17';
    const canvas = generateCover(mainTitle, subTitle, version);
    const link = document.createElement('a');
    link.download = 'release-notes-cover.png';
    link.href = canvas.toDataURL('image/png', 1.0); // 最高质量
    link.click();
}

/**
 * 显示预览
 */
function showPreview(mainTitle, subTitle, version) {
    // 兼容 generateAndPreview 的调用方式
    const canvas = generateCover(mainTitle, subTitle, version);
    const previewSection = document.querySelector('.preview-section');
    let placeholder = document.getElementById('preview-placeholder');
    if (placeholder) {
        placeholder.innerHTML = '';
        placeholder.appendChild(canvas);
        canvas.classList.add('preview-canvas');
    } else if (previewSection) {
        previewSection.innerHTML = '';
        previewSection.appendChild(canvas);
        canvas.classList.add('preview-canvas');
    }
}

// 页面加载完成后自动显示预览
window.addEventListener('load', function() {
    // 自动生成默认封面
    showPreview('发布日志', 'Release Notes', 'v2025.09.17');
    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            downloadCover();
        }
    });
});

// 添加一些动态效果
function addDynamicEffects() {
    const canvas = document.querySelector('#preview-container canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // 添加微妙的动画效果（可选）
        setInterval(() => {
            // 可以在这里添加动态更新逻辑
        }, 1000);
    }
}

// 响应式处理
function handleResize() {
    // 重新生成适合当前尺寸的封面
    showPreview();
}

window.addEventListener('resize', handleResize);

// 导出函数供外部使用
window.CoverGenerator = {
    generate: generateCover,
    download: downloadCover,
    preview: showPreview,
    config: config
};