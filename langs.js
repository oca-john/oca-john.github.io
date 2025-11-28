// 多语言翻译数据
const translations = {
    en: {
        // Header & Nav
        academic: "🎓 Academic",
        home: "🏠 Home",
        papers: "📰 Papers",
        projects: "📓 Projects",
        // Profile
        name: "Name:",
        affiliation: "Affiliation:",
        affiliationValue: "Liangzhu Laboratory",
        email: "Business Email:",
        bio: "Despite the widespread adoption of deep learning facilitated by general models, I remain firmly convinced that highly specialized models are irreplaceable in the realm of expertise. Drawing inspiration from biological knowledge and employing computational techniques, I strive for an effective integration of these disciplines in my research endeavors. Currently, my research focus resides in feature representation and feature fusion of time-series data, with the ultimate objective of developing robust analysis and prediction models for such signals.",
        // Section titles
        papersTitle: "📰 Papers",
        projectsTitle: "📓 Projects",
        aboutTitle: "📖 About me",
        // Projects
        project1: "A series of characteristic representation methods for high-dimensional physiological signals.",
        project2: "A series of application articles related to feature methods.",
        project3: "A model of neural networks closer to the biological brain.",
        // About
        aboutDesc: "I am a graduate student in the School of Life Science at the Northwestern Polytechnical University(NPU). I am currently working on my Ph.D degree in the same department. My research interests are in the area of machine learning. I am also interested in the applications of deep learning in healthcare and social sciences.",
        edu1: "Northwestern Polytechnical University (2018~Present)",
        edu2: "Shaanxi Normal University (2014~2018)",
        edu3: "Yan'an University (2010~2014)"
    },
    "zh-CN": {
        academic: "🎓 学术主页",
        home: "🏠 首页",
        papers: "📰 论文",
        projects: "📓 项目",
        name: "姓名：",
        affiliation: "单位：",
        affiliationValue: "良渚实验室",
        email: "邮箱：",
        bio: "尽管通用模型推动了深度学习的广泛应用，但我始终坚信，高度专业化的模型在专业领域是不可替代的。借鉴生物学知识并运用计算技术，我致力于在研究中实现这些学科的有效融合。目前，我的研究重点是时间序列数据的特征表示和特征融合，最终目标是开发稳健的信号分析和预测模型。",
        papersTitle: "📰 论文",
        projectsTitle: "📓 项目",
        aboutTitle: "📖 关于我",
        project1: "一系列针对高维生理信号的特征表示方法。",
        project2: "一系列与特征方法相关的应用文章。",
        project3: "一个更接近生物大脑的神经网络模型。",
        aboutDesc: "我是西北工业大学生命学院的研究生，目前正在攻读博士学位。我的研究兴趣集中在机器学习领域，同时对深度学习在医疗健康和社会科学中的应用也很感兴趣。",
        edu1: "西北工业大学 (2018~至今)",
        edu2: "陕西师范大学 (2014~2018)",
        edu3: "延安大学 (2010~2014)"
    },
    "zh-TW": {
        academic: "🎓 學術主頁",
        home: "🏠 首頁",
        papers: "📰 論文",
        projects: "📓 項目",
        name: "姓名：",
        affiliation: "單位：",
        affiliationValue: "良渚實驗室",
        email: "郵箱：",
        bio: "儘管通用模型推動了深度學習的廣泛應用，但我始終堅信，高度專業化的模型在專業領域是不可替代的。借鑑生物學知識並運用計算技術，我致力於在研究中實現這些學科的有效融合。目前，我的研究重點是時間序列數據的特徵表示和特徵融合，最終目標是開發穩健的信號分析和預測模型。",
        papersTitle: "📰 論文",
        projectsTitle: "📓 項目",
        aboutTitle: "📖 關於我",
        project1: "一系列針對高維生理信號的特徵表示方法。",
        project2: "一系列與特徵方法相關的應用文章。",
        project3: "一個更接近生物大腦的神經網絡模型。",
        aboutDesc: "我是西北工業大學生命學院的研究生，目前正在攻讀博士學位。我的研究興趣集中在機器學習領域，同時對深度學習在醫療健康和社會科學中的應用也很感興趣。",
        edu1: "西北工業大學 (2018~至今)",
        edu2: "陝西師範大學 (2014~2018)",
        edu3: "延安大學 (2010~2014)"
    }
};

// 语言名称映射
const langNames = {
    en: "EN",
    "zh-CN": "简",
    "zh-TW": "繁"
};

// 获取当前语言
function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

// 设置语言
function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateLangButtons();
}

// 应用翻译
function applyTranslations() {
    const lang = getCurrentLang();
    const t = translations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
}

// 更新语言按钮状态
function updateLangButtons() {
    const lang = getCurrentLang();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLangButtons();
});
