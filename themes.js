// 主题切换功能

// 获取当前主题
function getCurrentTheme() {
    return localStorage.getItem('theme') || 'dark';
}

// 设置主题
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme();
}

// 切换主题
function toggleTheme() {
    const current = getCurrentTheme();
    setTheme(current === 'light' ? 'dark' : 'light');
}

// 应用主题
function applyTheme() {
    const theme = getCurrentTheme();
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButton();
}

// 更新主题按钮图标
function updateThemeButton() {
    const theme = getCurrentTheme();
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = theme === 'light' ? '🌙' : '☀️';
        btn.title = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    }
}

// 立即应用主题，防止页面闪烁
(function() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
})();
