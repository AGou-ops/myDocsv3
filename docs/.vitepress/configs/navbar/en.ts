import type { DefaultTheme } from "vitepress";
// import { version, github, npm } from "../../meta";

export const en: DefaultTheme.NavItem[] = [
      {
        text: '🏠 主页',
        link: '/'
        // activeMatch: '/config/'
      },
      {
        text: '📖 目录',
        items: [
            { text: '☁️ 云原生相关', link: '/CloudNative/' },
            { text: '😊 Linux基础', link: '/LinuxBasics/' },
            { text: '♨️ 编程语言', link: '/ProgramLang/' },
            { text: '🕹️ 脚本相关', link: '/Scripts/' },
            { text: '👨‍⚖️ 面试相关', link: '/Interview/' },
        ]
      },
      {
        text: '版本',
        items: [
            { text: 'Ver1.0', link: 'https://agou-ops.cn/myDocs' },
            { text: 'Ver2.0', link: 'https://agou-ops.cn/myDocsv2' },
        ]
      },
      {
        text: '✨ 我的博客',
        link: 'https://agou-ops.cn',
      }
];
