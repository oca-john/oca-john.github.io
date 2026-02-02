// 多语言翻译数据
const translations = {
    en: {
        // Header & Nav
        academic: "🎓 Academic",
        home: "🏠 Home",
        papers: "📰 Papers",
        projects: "📓 Projects",
        about: "ℹ️ About",
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
        viewCertificate: "[📄 View Certificate]",
        projectsTitle: "📓 Projects",
        researchPlanTitle: "📓 Research Plans",
        collabTitle: "🤝 Potential Collaboration Directions",
        aboutTitle: "📖 About me",
        // Research Plans
        rp1Title: "Hypoxia State Prediction Model Based on Mirror Feature Curve (MFC) and Attractor Algorithm",
        rp1Desc: "Developing a novel predictive framework that leverages mirror feature curves extracted from physiological signals combined with attractor-based dynamical systems analysis to forecast hypoxic episodes in high-altitude environments.",
        rp2Title: "Hypoxia State Prediction Based on MFC and Manifold Convolution Algorithm",
        rp2Desc: "Integrating mirror feature curve representations with manifold-aware convolutional neural networks to capture the intrinsic geometric structure of physiological data for improved hypoxia classification and prediction.",
        rp3Title: "Hypoxia Event Modeling and Prediction Based on Graph Neural Networks",
        rp3Desc: "Constructing graph-based representations of multi-channel physiological signals to model inter-channel dependencies and temporal dynamics for comprehensive hypoxia event detection and forecasting.",
        rp4Title: "All-Optical Closed-Loop Brain-Computer Interface Based on TCN and Attractor Algorithm",
        rp4Desc: "Designing a fully optical brain-computer interface system utilizing temporal convolutional networks and attractor dynamics for real-time neural signal decoding and closed-loop neuromodulation.",
        rp5Title: "Dimensional Game Guide: Low-Dimensional Dynamics Modeling for Brain-Computer Interfaces",
        rp5Desc: "Exploring low-dimensional manifold representations of neural population activity to develop interpretable and efficient decoding algorithms for next-generation brain-computer interfaces.",
        rp6Title: "Physics-Informed Neural Decoding: Synthetic-to-Real Domain Transfer",
        rp6Desc: "Leveraging physics-informed neural networks to bridge the gap between synthetic training data and real neural recordings, enabling robust cross-domain generalization in neural decoding tasks.",
        // Collaboration
        collab1Title: "Optogenetic CAR-T Therapy (Opto-Immunotherapy)",
        collab1Desc: "The major limitations of conventional CAR-T therapy are cytokine release syndrome (CRS) and off-target toxicity. By implementing NIR light-controlled CAR expression or IL-15/IL-12 release modulation, immediate light-off intervention becomes possible upon early CRS indicators (e.g., fever onset), providing a reversible safety mechanism with life-saving potential.",
        collab2Title: "Optogenetic Epigenetic Regulation (Opto-Epigenetics)",
        collab2Desc: "Unlike direct DNA editing, epigenetic modulation offers reversible control—gene expression recovers upon light cessation. This enables researchers to fine-tune oncogene expression levels like adjusting a volume dial, observe tumor drug resistance responses, and identify dynamic equilibrium points. This approach aligns well with real-time deep learning training paradigms.",
        // About
        aboutDesc: "With a solid foundation in biological sciences, I began my research career studying microbial ecology before advancing to biochemistry and molecular biology. During my doctoral studies in biomedical engineering, I developed expertise in deep learning modeling for physiological signal analysis, particularly in high-altitude hypoxia research. Currently, as a postdoctoral researcher at Liangzhu Laboratory, I am pioneering interdisciplinary research that integrates my biological background with computational deep learning techniques to advance optical brain-computer interface technologies.",
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
        edu3Research: "Screening and Identification of Heavy Oil Degrading Microorganisms",
        labelDiscipline: "Discipline:",
        labelResearch: "Research:",
        copyright: "Designed and built by Xi Zhang. Feel free to cite or fork."
    },
    "zh-CN": {
        academic: "🎓 学术主页",
        home: "🏠 首页",
        papers: "📰 论文",
        projects: "📓 项目",
        about: "ℹ️ 关于",
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
        viewCertificate: "[📄 查看证书]",
        projectsTitle: "📓 项目",
        researchPlanTitle: "📓 研究计划",
        collabTitle: "🤝 潜在合作方向",
        aboutTitle: "📖 关于我",
        // Research Plans
        rp1Title: "基于镜面特征曲线（MFC）和吸引子算法的缺氧状态预测模型",
        rp1Desc: "开发一种新型预测框架，利用从生理信号中提取的镜面特征曲线，结合基于吸引子的动力学系统分析，预测高海拔环境中的缺氧事件。",
        rp2Title: "基于MFC和流形卷积算法的缺氧状态预测",
        rp2Desc: "将镜面特征曲线表示与流形感知卷积神经网络相结合，捕捉生理数据的内在几何结构，以改进缺氧分类和预测。",
        rp3Title: "基于图神经网络的缺氧事件建模和预测",
        rp3Desc: "构建多通道生理信号的图表示，建模通道间依赖关系和时间动态，实现全面的缺氧事件检测和预测。",
        rp4Title: "基于TCN和吸引子算法的全光闭环脑机接口研究",
        rp4Desc: "设计一种全光学脑机接口系统，利用时间卷积网络和吸引子动力学进行实时神经信号解码和闭环神经调控。",
        rp5Title: "维度游戏指南：脑机接口低维动力学建模",
        rp5Desc: "探索神经群体活动的低维流形表示，为下一代脑机接口开发可解释且高效的解码算法。",
        rp6Title: "物理信息指导的神经解码：合成域到真实域迁移",
        rp6Desc: "利用物理信息神经网络弥合合成训练数据与真实神经记录之间的差距，实现神经解码任务中的稳健跨域泛化。",
        // Collaboration
        collab1Title: "光控CAR-T疗法（光免疫疗法）",
        collab1Desc: "传统CAR-T疗法的主要局限是细胞因子释放综合征（CRS）和脱靶毒性。通过实现近红外光控制CAR表达或IL-15/IL-12释放调控，可在CRS早期指标（如发热）出现时立即关闭光照进行干预，提供具有挽救生命潜力的可逆安全机制。",
        collab2Title: "光控表观遗传调控（光表观遗传学）",
        collab2Desc: "与直接DNA编辑不同，表观遗传调控提供可逆控制——光照停止后基因表达恢复。这使研究人员能够像调节音量一样微调致癌基因表达水平，观察肿瘤耐药反应，寻找动态平衡点。这种方法与实时深度学习训练范式高度契合。",
        aboutDesc: "我拥有扎实的生物学背景，研究生涯从微生物生态学起步，而后深入生物化学与分子生物学领域。在生物医学工程博士阶段，我掌握了针对生理信号分析的深度学习建模技术，尤其在高原缺氧研究方面积累了丰富经验。目前，作为浙江大学良渚实验室的博士后研究员，我正在开展融合生物学背景与计算机深度学习技术的交叉研究，推动光学脑机接口技术的发展。",
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
        edu3Research: "重油降解微生物的筛选与鉴定",
        labelDiscipline: "专业：",
        labelResearch: "研究方向：",
        copyright: "网站由 Xi Zhang 设计并构建，欢迎引用或构建分支。"
    },
    "zh-TW": {
        academic: "🎓 學術主頁",
        home: "🏠 首頁",
        papers: "📰 論文",
        projects: "📓 項目",
        about: "ℹ️ 關於",
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
        viewCertificate: "[📄 查看證書]",
        projectsTitle: "📓 項目",
        researchPlanTitle: "📓 研究計劃",
        collabTitle: "🤝 潛在合作方向",
        aboutTitle: "📖 關於我",
        // Research Plans
        rp1Title: "基於鏡面特徵曲線（MFC）和吸引子算法的缺氧狀態預測模型",
        rp1Desc: "開發一種新型預測框架，利用從生理信號中提取的鏡面特徵曲線，結合基於吸引子的動力學系統分析，預測高海拔環境中的缺氧事件。",
        rp2Title: "基於MFC和流形卷積算法的缺氧狀態預測",
        rp2Desc: "將鏡面特徵曲線表示與流形感知卷積神經網絡相結合，捕捉生理數據的內在幾何結構，以改進缺氧分類和預測。",
        rp3Title: "基於圖神經網絡的缺氧事件建模和預測",
        rp3Desc: "構建多通道生理信號的圖表示，建模通道間依賴關係和時間動態，實現全面的缺氧事件檢測和預測。",
        rp4Title: "基於TCN和吸引子算法的全光閉環腦機接口研究",
        rp4Desc: "設計一種全光學腦機接口系統，利用時間卷積網絡和吸引子動力學進行實時神經信號解碼和閉環神經調控。",
        rp5Title: "維度遊戲指南：腦機接口低維動力學建模",
        rp5Desc: "探索神經群體活動的低維流形表示，為下一代腦機接口開發可解釋且高效的解碼算法。",
        rp6Title: "物理信息指導的神經解碼：合成域到真實域遷移",
        rp6Desc: "利用物理信息神經網絡彌合合成訓練數據與真實神經記錄之間的差距，實現神經解碼任務中的穩健跨域泛化。",
        // Collaboration
        collab1Title: "光控CAR-T療法（光免疫療法）",
        collab1Desc: "傳統CAR-T療法的主要局限是細胞因子釋放綜合徵（CRS）和脫靶毒性。通過實現近紅外光控制CAR表達或IL-15/IL-12釋放調控，可在CRS早期指標（如發熱）出現時立即關閉光照進行干預，提供具有挽救生命潛力的可逆安全機制。",
        collab2Title: "光控表觀遺傳調控（光表觀遺傳學）",
        collab2Desc: "與直接DNA編輯不同，表觀遺傳調控提供可逆控制——光照停止後基因表達恢復。這使研究人員能夠像調節音量一樣微調致癌基因表達水平，觀察腫瘤耐藥反應，尋找動態平衡點。這種方法與實時深度學習訓練範式高度契合。",
        aboutDesc: "我擁有扎實的生物學背景，研究生涯從微生物生態學起步，而後深入生物化學與分子生物學領域。在生物醫學工程博士階段，我掌握了針對生理信號分析的深度學習建模技術，尤其在高原缺氧研究方面積累了豐富經驗。目前，作為浙江大學良渚實驗室的博士後研究員，我正在開展融合生物學背景與計算機深度學習技術的交叉研究，推動光學腦機接口技術的發展。",
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
        edu3Research: "重油降解微生物的篩選與鑑定",
        labelDiscipline: "專業：",
        labelResearch: "研究方向：",
        copyright: "網站由 Xi Zhang 設計並構建，歡迎引用或構建分支。"
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

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLangButtons();
    applyTheme();
    // 动态显示当前年份
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
