import type { DefaultTheme } from "vitepress";
// import { version, github, npm } from "../../meta";

export const en: DefaultTheme.NavItem[] = [
      {
        text: 'ð  ä¸»é¡µ',
        link: '/'
        // activeMatch: '/config/'
      },
      {
        text: 'ð ç®å½',
        items: [
            { text: 'âï¸ äºåçç¸å³', link: '/CloudNative/' },
            { text: 'ð Linuxåºç¡', link: '/LinuxBasics/' },
            { text: 'â¨ï¸ ç¼ç¨è¯­è¨', link: '/ProgramLang/' },
            { text: 'ð¹ï¸ èæ¬ç¸å³', link: '/Scripts/' },
            { text: 'ð¨ââï¸ é¢è¯ç¸å³', link: '/Interview/' },
        ]
      },
      {
        text: 'çæ¬',
        items: [
            { text: 'Ver1.0', link: 'https://agou-ops.cn/myDocs' },
            { text: 'Ver2.0', link: 'https://agou-ops.cn/myDocsv2' },
        ]
      },
      {
        text: 'â¨ æçåå®¢',
        link: 'https://agou-ops.cn',
      }
];
