// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 处理支付页面的支付按钮点击事件
    const payButton = document.getElementById('pay-btn');
    if (payButton) {
        payButton.addEventListener('click', function() {
            // 显示加载状态
            payButton.innerHTML = '<div class="loading"></div> 处理中...';
            payButton.disabled = true;
            
            // 模拟支付处理过程（2秒后完成）
            setTimeout(function() {
                // 构建支付成功页面
                const container = document.querySelector('.container');
                container.innerHTML = `
                    <div class="success-message">
                        <div class="success-icon">✓</div>
                        <p class="success-text">支付成功</p>
                        <p class="success-desc">您已成功支付5元，现在可以访问科普内容</p>
                        <button id="continue-btn" class="continue-button">进入内容</button>
                    </div>
                `;
                
                // 为"进入内容"按钮添加点击事件
                document.getElementById('continue-btn').addEventListener('click', function() {
                    window.location.href = 'content.html';
                });
            }, 2000);
        });
    }
    
    // 为了方便测试，添加一个从首页直接跳转到支付页面的链接
    // 注意：实际使用时应该通过扫描二维码进入支付页面
    const qrCodeImage = document.querySelector('.qrcode-image');
    if (qrCodeImage) {
        qrCodeImage.addEventListener('click', function() {
            window.location.href = 'payment.html';
        });
        
        // 添加点击提示
        qrCodeImage.style.cursor = 'pointer';
        qrCodeImage.title = '点击进入支付页面（测试用）';
    }
    
    // 为内容页面添加一些简单的交互效果
    const contentImages = document.querySelectorAll('.content-image');
    contentImages.forEach(function(image) {
        image.addEventListener('click', function() {
            // 简单的图片点击效果
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // 为所有页面添加返回按钮功能（如果需要）
    // 这里可以根据实际需求添加返回逻辑
});

// 页面加载时的动画效果
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // 触发动画
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
});
