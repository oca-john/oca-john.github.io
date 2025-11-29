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
        research: "I am currently engaged in optical brain-computer interface research, primarily focusing on optical-based brain signal reading, decoding, optical signal writing, and encoding.",
        // Section titles
        papersTitle: "📰 Papers",
        reviewTitle: "📝 Review Experience",
        reviewDate: "Date:",
        reviewRole: "Role:",
        reviewer: "Reviewer",
        reviewTaskId: "Task ID:",
        projectsTitle: "📓 Projects",
        aboutTitle: "📖 About me",
        // Projects
        project1: "A series of characteristic representation methods for high-dimensional physiological signals.",
        project2: "A series of application articles related to feature methods.",
        project3: "A model of neural networks closer to the biological brain.",
        // About
        aboutDesc: "I am a postdoctoral researcher at the Liangzhu Laboratory, Zhejiang University, conducting interdisciplinary research on optical brain-computer interfaces and deep learning.",
        edu0: "Liangzhu Laboratory, Zhejiang University (2025~Present)",
        edu0Discipline: "Brain and Brain Science",
        edu0Research: "Optical Brain-Computer Interface",
        edu1: "Northwestern Polytechnical University (2018~2025)",
        edu1Discipline: "Biomedical Engineering",
        edu1Research: "High-Altitude Hypoxia Physiology and Deep Learning Modeling",
        edu2: "Shaanxi Normal University (2014~2018)",
        edu2Discipline: "Biochemistry and Molecular Biology",
        edu2Research: "Mouse Somatic Cell Immortalization",
        edu3: "Yan'an University (2010~2014)",
        edu3Discipline: "Biological Science",
        edu3Research: "Screening and Identification of Heavy Oil Degrading Microorganisms"
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
        research: "我目前从事光学脑机接口研究，主要开展基于光学的大脑信号读取、解码、光信号写入、编码。",
        papersTitle: "📰 论文",
        reviewTitle: "📝 审稿经历",
        reviewDate: "日期：",
        reviewRole: "角色：",
        reviewer: "审稿人",
        reviewTaskId: "任务ID：",
        projectsTitle: "📓 项目",
        aboutTitle: "📖 关于我",
        project1: "一系列针对高维生理信号的特征表示方法。",
        project2: "一系列与特征方法相关的应用文章。",
        project3: "一个更接近生物大脑的神经网络模型。",
        aboutDesc: "我是浙江大学良渚实验室的博士后研究员，从事光学脑机接口与深度学习方面的交叉研究。",
        edu0: "浙江大学良渚实验室 (2025~至今)",
        edu0Discipline: "脑与脑科学",
        edu0Research: "光学脑机接口",
        edu1: "西北工业大学 (2018~2025)",
        edu1Discipline: "生物医学工程",
        edu1Research: "高原缺氧生理与深度学习建模",
        edu2: "陕西师范大学 (2014~2018)",
        edu2Discipline: "生物化学与分子生物学",
        edu2Research: "小鼠体细胞永生化",
        edu3: "延安大学 (2010~2014)",
        edu3Discipline: "生物科学",
        edu3Research: "重油降解微生物的筛选与鉴定"
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
        research: "我目前從事光學腦機接口研究，主要開展基於光學的大腦信號讀取、解碼、光信號寫入、編碼。",
        papersTitle: "📰 論文",
        reviewTitle: "📝 審稿經歷",
        reviewDate: "日期：",
        reviewRole: "角色：",
        reviewer: "審稿人",
        reviewTaskId: "任務ID：",
        projectsTitle: "📓 項目",
        aboutTitle: "📖 關於我",
        project1: "一系列針對高維生理信號的特徵表示方法。",
        project2: "一系列與特徵方法相關的應用文章。",
        project3: "一個更接近生物大腦的神經網絡模型。",
        aboutDesc: "我是浙江大學良渚實驗室的博士後研究員，從事光學腦機接口與深度學習方面的交叉研究。",
        edu0: "浙江大學良渚實驗室 (2025~至今)",
        edu0Discipline: "腦與腦科學",
        edu0Research: "光學腦機接口",
        edu1: "西北工業大學 (2018~2025)",
        edu1Discipline: "生物醫學工程",
        edu1Research: "高原缺氧生理與深度學習建模",
        edu2: "陝西師範大學 (2014~2018)",
        edu2Discipline: "生物化學與分子生物學",
        edu2Research: "小鼠體細胞永生化",
        edu3: "延安大學 (2010~2014)",
        edu3Discipline: "生物科學",
        edu3Research: "重油降解微生物的篩選與鑑定"
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
