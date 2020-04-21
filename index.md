# 欢迎您访问我的GitHub主页
- 我是`oca_john`，本页面是`github.io`的跟站点，用于构建个人主页，站点地址是：`oca-john.github.io`。
- 本站点主要用于概述个人github站点的主要内容。
- 具体包括：
  - [Linux](https://github.com/oca-john/Linux-Runtime)和相关计算环境的部署；
  - 基础命令行工具的使用；
  - 个人学习开始于生物信息学，相关工具语言和工具链的部署与实战；
  - 当前聚焦于时间序列数据与深度学习相结合，相关工具和框架的学习和部署落地；

## 1. 关于Linux环境的背景知识和部署
- [Linux](https://github.com/oca-john/Linux-Runtime)计算环境的搭建，主要指openSUSE、Debian、CentOS等发行版的安装、配置、初始化设置。目前倾向于openSUSE发行版，因为YaST工具能跨环境实现对系统软硬件的管理。在某些方面（如软件管理），Debian系发行版可借助KDE套件中的管理器或新立得管理器实现。
- 在Windows10下，借由Subsystem平台，安装部署openSUSE、Debian、Ubuntu等发行版，由于本身构建与Windows文件系统至上，可以将纯命令行的[Linux](https://github.com/oca-john/Linux-Runtime)软件和Windows的文件结合起来，用于流文件处理非常方便。最大的不足是稳定性。
- 在虚拟机中，安装部署openSUSE、Debian等发行版，并通过虚拟机克隆，快速实现多个虚拟机系统的部署，为模拟集群做基础。
计算环境搭建和使用方面的经验都将汇总到我的GitHub的页面中，旨在方便自己回顾查看，也欢迎感兴趣的开发者浏览。

## 2. 基础命令行工具
- Bash工具、Zsh工具和Shell编程基础，用于在[Linux](https://github.com/oca-john/Linux-Runtime)环境最日常的文件管理和简短的sh脚本处理。
- Vim编辑器和nano编辑器，主要用于文本的编辑、批量"Pattern"的处理、系统配置文件的修改。
- Markdown语法，用于日常学习笔记的记录。
- RE正则表达式语法，用于与[Perl](https://github.com/oca-john/Perl-BestScript)语言和[Python3](https://github.com/oca-john/Python3-New2Learn)语言结合，处理大量的规则化文本信息。

## 3. 生物信息学工具语言和工具链部署与实战
- [Python3](https://github.com/oca-john/Python3-New2Learn)语法上比Python2更清晰（函数方面），在生信领域由于具有与[Perl](https://github.com/oca-john/Perl-BestScript)相当的功能性函数和第三方库。同时也具备与[R语言](https://github.com/oca-john/R-VisualizationTool)相当的可视化函数和包。
- [R语言](https://github.com/oca-john/R-VisualizationTool)是衍生于S语言的统计学编程语言，在生信领域具有非常多的用户，可用于数据抓取、清洗、统计分析、统计推断和可视化。
- GUI界面开发方面，目前有两种倾向性：一是使用Qt，即Qt的[Python3](https://github.com/oca-john/Python3-New2Learn)绑定；二是使用IUP或Tk模块基于[Python3](https://github.com/oca-john/Python3-New2Learn)语言编程（IUP可以搭配Lua语言写UI）。
- [Perl](https://github.com/oca-john/Perl-BestScript)语言是经典生信工具，具有积累了几十年的社区代码。[Perl](https://github.com/oca-john/Perl-BestScript)脚本语言比较古老，在文本处理方面由于深度整合的正则表达式，效率非常高。深度学习领域，在自然语言处理方面，应用前景良好。

## 4. 基于深度学习技术挖掘时间序列数据
- 深度学习领域主要的语言是[C++](https://github.com/oca-john/Cpp-RobustOld)和[Python3](https://github.com/oca-john/Python3-New2Learn)。前者胜在执行效率高，方便部署。后者胜在语法简单，方便学习。
- 在时间序列数据处理方面，较有优势的是Matlab和[Python3](https://github.com/oca-john/Python3-New2Learn)。前者是闭源的，有极具实力的Mathwork公司成熟的开发历史。后者是开源的，胜在庞大的社区贡献的大量第三方包。
- 基于两方面考虑，选择[Python3](https://github.com/oca-john/Python3-New2Learn)为基本语言，pytorch是当前流行的基于动态图的深度学习框架，MNE可用于神经科学的时间序列数据处理和挖掘。

## 5. 其他有趣的编程语言也有些许涉及
- 主要包括直接操作底层机器时效率飞起的[C++](https://github.com/oca-john/Cpp-RobustOld)。[C++](https://github.com/oca-john/Cpp-RobustOld)在执行效率上比较有优势，兼具C语言的效率，又较之有了更多的扩展库。应用最多的领域是系统开发、硬件驱动开发、大型游戏开发。
- 基于C语言的[Lua](https://github.com/oca-john/Lua-LightWeight)，是一种辅助型的界面开发语言，核心是C语言，相当于是C的扩展。能够与[Perl](https://github.com/oca-john/Perl-BestScript)或[Python3](https://github.com/oca-john/Python3-New2Learn)完美配合。在开发相关软件的界面时，比二者效率更高。另外大名鼎鼎的Torch深度学习框架也是基于[Lua](https://github.com/oca-john/Lua-LightWeight)语言。
- 统一了前端开发领域的[JavaScript](https://github.com/oca-john/JavaScript-FrontEnd)，[JavaScript](https://github.com/oca-john/JavaScript-FrontEnd)嵌套于网页中，在进行Web开发和跨平台应用开发方面潜力也十分巨大。

---

## 声明
- 上述所有信息都是通过Markdown语法组织展示的，并采用了Slate的主题来渲染网页样式（文件为`_config.yml`）。
- 本人的站点目前全部采用MIT开源协议释出。

## 支持和联系
- 如果对本页面内容有任何疑问，请通过我的E-mail联系我：`zhangxiyh@yahoo.com`。
