import{_ as t,o as e,c as l,a as d}from"./app.1e6146c3.js";const M=JSON.parse('{"title":"MySQL\u6570\u636E\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u503C\u7C7B\u578B","slug":"\u6570\u503C\u7C7B\u578B"},{"level":2,"title":"\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B","slug":"\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B"},{"level":2,"title":"\u5B57\u7B26\u4E32\u7C7B\u578B","slug":"\u5B57\u7B26\u4E32\u7C7B\u578B"}],"relativePath":"LinuxBasics/DataBases/MySQL/MySQL Data_Type.md","lastUpdated":1657272051000}'),a={name:"LinuxBasics/DataBases/MySQL/MySQL Data_Type.md"},s=d('<h1 id="mysql\u6570\u636E\u7C7B\u578B" tabindex="-1">MySQL\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#mysql\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h1><p>MySQL\u4E2D\u5B9A\u4E49\u6570\u636E\u5B57\u6BB5\u7684\u7C7B\u578B\u5BF9\u4F60\u6570\u636E\u5E93\u7684\u4F18\u5316\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002</p><p>MySQL\u652F\u6301\u591A\u79CD\u7C7B\u578B\uFF0C\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u4E09\u7C7B\uFF1A\u6570\u503C\u3001\u65E5\u671F/\u65F6\u95F4\u548C\u5B57\u7B26\u4E32(\u5B57\u7B26)\u7C7B\u578B\u3002</p><hr><h2 id="\u6570\u503C\u7C7B\u578B" tabindex="-1">\u6570\u503C\u7C7B\u578B <a class="header-anchor" href="#\u6570\u503C\u7C7B\u578B" aria-hidden="true">#</a></h2><p>MySQL\u652F\u6301\u6240\u6709\u6807\u51C6SQL\u6570\u503C\u6570\u636E\u7C7B\u578B\u3002</p><p>\u8FD9\u4E9B\u7C7B\u578B\u5305\u62EC\u4E25\u683C\u6570\u503C\u6570\u636E\u7C7B\u578B(INTEGER\u3001SMALLINT\u3001DECIMAL\u548CNUMERIC)\uFF0C\u4EE5\u53CA\u8FD1\u4F3C\u6570\u503C\u6570\u636E\u7C7B\u578B(FLOAT\u3001REAL\u548CDOUBLE PRECISION)\u3002</p><p>\u5173\u952E\u5B57INT\u662FINTEGER\u7684\u540C\u4E49\u8BCD\uFF0C\u5173\u952E\u5B57DEC\u662FDECIMAL\u7684\u540C\u4E49\u8BCD\u3002</p><p>BIT\u6570\u636E\u7C7B\u578B\u4FDD\u5B58\u4F4D\u5B57\u6BB5\u503C\uFF0C\u5E76\u4E14\u652F\u6301MyISAM\u3001MEMORY\u3001InnoDB\u548CBDB\u8868\u3002</p><p>\u4F5C\u4E3ASQL\u6807\u51C6\u7684\u6269\u5C55\uFF0CMySQL\u4E5F\u652F\u6301\u6574\u6570\u7C7B\u578BTINYINT\u3001MEDIUMINT\u548CBIGINT\u3002\u4E0B\u9762\u7684\u8868\u663E\u793A\u4E86\u9700\u8981\u7684\u6BCF\u4E2A\u6574\u6570\u7C7B\u578B\u7684\u5B58\u50A8\u548C\u8303\u56F4\u3002</p><table><thead><tr><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u5927\u5C0F</th><th style="text-align:left;">\u8303\u56F4\uFF08\u6709\u7B26\u53F7\uFF09</th><th style="text-align:left;">\u8303\u56F4\uFF08\u65E0\u7B26\u53F7\uFF09</th><th style="text-align:left;">\u7528\u9014</th></tr></thead><tbody><tr><td style="text-align:left;">TINYINT</td><td style="text-align:left;">1 byte</td><td style="text-align:left;">(-128\uFF0C127)</td><td style="text-align:left;">(0\uFF0C255)</td><td style="text-align:left;">\u5C0F\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">SMALLINT</td><td style="text-align:left;">2 bytes</td><td style="text-align:left;">(-32 768\uFF0C32 767)</td><td style="text-align:left;">(0\uFF0C65 535)</td><td style="text-align:left;">\u5927\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">MEDIUMINT</td><td style="text-align:left;">3 bytes</td><td style="text-align:left;">(-8 388 608\uFF0C8 388 607)</td><td style="text-align:left;">(0\uFF0C16 777 215)</td><td style="text-align:left;">\u5927\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">INT\u6216INTEGER</td><td style="text-align:left;">4 bytes</td><td style="text-align:left;">(-2 147 483 648\uFF0C2 147 483 647)</td><td style="text-align:left;">(0\uFF0C4 294 967 295)</td><td style="text-align:left;">\u5927\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">BIGINT</td><td style="text-align:left;">8 bytes</td><td style="text-align:left;">(-9,223,372,036,854,775,808\uFF0C9 223 372 036 854 775 807)</td><td style="text-align:left;">(0\uFF0C18 446 744 073 709 551 615)</td><td style="text-align:left;">\u6781\u5927\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">FLOAT</td><td style="text-align:left;">4 bytes</td><td style="text-align:left;">(-3.402 823 466 E+38\uFF0C-1.175 494 351 E-38)\uFF0C0\uFF0C(1.175 494 351 E-38\uFF0C3.402 823 466 351 E+38)</td><td style="text-align:left;">0\uFF0C(1.175 494 351 E-38\uFF0C3.402 823 466 E+38)</td><td style="text-align:left;">\u5355\u7CBE\u5EA6 \u6D6E\u70B9\u6570\u503C</td></tr><tr><td style="text-align:left;">DOUBLE</td><td style="text-align:left;">8 bytes</td><td style="text-align:left;">(-1.797 693 134 862 315 7 E+308\uFF0C-2.225 073 858 507 201 4 E-308)\uFF0C0\uFF0C(2.225 073 858 507 201 4 E-308\uFF0C1.797 693 134 862 315 7 E+308)</td><td style="text-align:left;">0\uFF0C(2.225 073 858 507 201 4 E-308\uFF0C1.797 693 134 862 315 7 E+308)</td><td style="text-align:left;">\u53CC\u7CBE\u5EA6 \u6D6E\u70B9\u6570\u503C</td></tr><tr><td style="text-align:left;">DECIMAL</td><td style="text-align:left;">\u5BF9DECIMAL(M,D) \uFF0C\u5982\u679CM&gt;D\uFF0C\u4E3AM+2\u5426\u5219\u4E3AD+2</td><td style="text-align:left;">\u4F9D\u8D56\u4E8EM\u548CD\u7684\u503C</td><td style="text-align:left;">\u4F9D\u8D56\u4E8EM\u548CD\u7684\u503C</td><td style="text-align:left;">\u5C0F\u6570\u503C</td></tr></tbody></table><hr><h2 id="\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B" tabindex="-1">\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B <a class="header-anchor" href="#\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u8868\u793A\u65F6\u95F4\u503C\u7684\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B\u4E3ADATETIME\u3001DATE\u3001TIMESTAMP\u3001TIME\u548CYEAR\u3002</p><p>\u6BCF\u4E2A\u65F6\u95F4\u7C7B\u578B\u6709\u4E00\u4E2A\u6709\u6548\u503C\u8303\u56F4\u548C\u4E00\u4E2A&quot;\u96F6&quot;\u503C\uFF0C\u5F53\u6307\u5B9A\u4E0D\u5408\u6CD5\u7684MySQL\u4E0D\u80FD\u8868\u793A\u7684\u503C\u65F6\u4F7F\u7528&quot;\u96F6&quot;\u503C\u3002</p><p>TIMESTAMP\u7C7B\u578B\u6709\u4E13\u6709\u7684\u81EA\u52A8\u66F4\u65B0\u7279\u6027\uFF0C\u5C06\u5728\u540E\u9762\u63CF\u8FF0\u3002</p><table><thead><tr><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u5927\u5C0F ( bytes)</th><th style="text-align:left;">\u8303\u56F4</th><th style="text-align:left;">\u683C\u5F0F</th><th style="text-align:left;">\u7528\u9014</th></tr></thead><tbody><tr><td style="text-align:left;">DATE</td><td style="text-align:left;">3</td><td style="text-align:left;">1000-01-01/9999-12-31</td><td style="text-align:left;">YYYY-MM-DD</td><td style="text-align:left;">\u65E5\u671F\u503C</td></tr><tr><td style="text-align:left;">TIME</td><td style="text-align:left;">3</td><td style="text-align:left;">&#39;-838:59:59&#39;/&#39;838:59:59&#39;</td><td style="text-align:left;">HH:MM:SS</td><td style="text-align:left;">\u65F6\u95F4\u503C\u6216\u6301\u7EED\u65F6\u95F4</td></tr><tr><td style="text-align:left;">YEAR</td><td style="text-align:left;">1</td><td style="text-align:left;">1901/2155</td><td style="text-align:left;">YYYY</td><td style="text-align:left;">\u5E74\u4EFD\u503C</td></tr><tr><td style="text-align:left;">DATETIME</td><td style="text-align:left;">8</td><td style="text-align:left;">1000-01-01 00:00:00/9999-12-31 23:59:59</td><td style="text-align:left;">YYYY-MM-DD HH:MM:SS</td><td style="text-align:left;">\u6DF7\u5408\u65E5\u671F\u548C\u65F6\u95F4\u503C</td></tr><tr><td style="text-align:left;">TIMESTAMP</td><td style="text-align:left;">4</td><td style="text-align:left;">1970-01-01 00:00:00/2038\u7ED3\u675F\u65F6\u95F4\u662F\u7B2C <strong>2147483647</strong> \u79D2\uFF0C\u5317\u4EAC\u65F6\u95F4 <strong>2038-1-19 11:14:07</strong>\uFF0C\u683C\u6797\u5C3C\u6CBB\u65F6\u95F4 2038\u5E741\u670819\u65E5 \u51CC\u6668 03:14:07</td><td style="text-align:left;">YYYYMMDD HHMMSS</td><td style="text-align:left;">\u6DF7\u5408\u65E5\u671F\u548C\u65F6\u95F4\u503C\uFF0C\u65F6\u95F4\u6233</td></tr></tbody></table><hr><h2 id="\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1">\u5B57\u7B26\u4E32\u7C7B\u578B <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u7C7B\u578B\u6307CHAR\u3001VARCHAR\u3001BINARY\u3001VARBINARY\u3001BLOB\u3001TEXT\u3001ENUM\u548CSET\u3002\u8BE5\u8282\u63CF\u8FF0\u4E86\u8FD9\u4E9B\u7C7B\u578B\u5982\u4F55\u5DE5\u4F5C\u4EE5\u53CA\u5982\u4F55\u5728\u67E5\u8BE2\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u7C7B\u578B\u3002</p><table><thead><tr><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u5927\u5C0F</th><th style="text-align:left;">\u7528\u9014</th></tr></thead><tbody><tr><td style="text-align:left;">CHAR</td><td style="text-align:left;">0-255 bytes</td><td style="text-align:left;">\u5B9A\u957F\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">VARCHAR</td><td style="text-align:left;">0-65535 bytes</td><td style="text-align:left;">\u53D8\u957F\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">TINYBLOB</td><td style="text-align:left;">0-255 bytes</td><td style="text-align:left;">\u4E0D\u8D85\u8FC7 255 \u4E2A\u5B57\u7B26\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">TINYTEXT</td><td style="text-align:left;">0-255 bytes</td><td style="text-align:left;">\u77ED\u6587\u672C\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:left;">BLOB</td><td style="text-align:left;">0-65 535 bytes</td><td style="text-align:left;">\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u957F\u6587\u672C\u6570\u636E</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:left;">0-65 535 bytes</td><td style="text-align:left;">\u957F\u6587\u672C\u6570\u636E</td></tr><tr><td style="text-align:left;">MEDIUMBLOB</td><td style="text-align:left;">0-16 777 215 bytes</td><td style="text-align:left;">\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u4E2D\u7B49\u957F\u5EA6\u6587\u672C\u6570\u636E</td></tr><tr><td style="text-align:left;">MEDIUMTEXT</td><td style="text-align:left;">0-16 777 215 bytes</td><td style="text-align:left;">\u4E2D\u7B49\u957F\u5EA6\u6587\u672C\u6570\u636E</td></tr><tr><td style="text-align:left;">LONGBLOB</td><td style="text-align:left;">0-4 294 967 295 bytes</td><td style="text-align:left;">\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u6781\u5927\u6587\u672C\u6570\u636E</td></tr><tr><td style="text-align:left;">LONGTEXT</td><td style="text-align:left;">0-4 294 967 295 bytes</td><td style="text-align:left;">\u6781\u5927\u6587\u672C\u6570\u636E</td></tr></tbody></table><p><strong>\u6CE8\u610F</strong>\uFF1Achar(n) \u548C varchar(n) \u4E2D\u62EC\u53F7\u4E2D n \u4EE3\u8868\u5B57\u7B26\u7684\u4E2A\u6570\uFF0C\u5E76\u4E0D\u4EE3\u8868\u5B57\u8282\u4E2A\u6570\uFF0C\u6BD4\u5982 CHAR(30) \u5C31\u53EF\u4EE5\u5B58\u50A8 30 \u4E2A\u5B57\u7B26\u3002</p><p>CHAR \u548C VARCHAR \u7C7B\u578B\u7C7B\u4F3C\uFF0C\u4F46\u5B83\u4EEC\u4FDD\u5B58\u548C\u68C0\u7D22\u7684\u65B9\u5F0F\u4E0D\u540C\u3002\u5B83\u4EEC\u7684\u6700\u5927\u957F\u5EA6\u548C\u662F\u5426\u5C3E\u90E8\u7A7A\u683C\u88AB\u4FDD\u7559\u7B49\u65B9\u9762\u4E5F\u4E0D\u540C\u3002\u5728\u5B58\u50A8\u6216\u68C0\u7D22\u8FC7\u7A0B\u4E2D\u4E0D\u8FDB\u884C\u5927\u5C0F\u5199\u8F6C\u6362\u3002</p><p>BINARY \u548C VARBINARY \u7C7B\u4F3C\u4E8E CHAR \u548C VARCHAR\uFF0C\u4E0D\u540C\u7684\u662F\u5B83\u4EEC\u5305\u542B\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u800C\u4E0D\u8981\u975E\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u4EEC\u5305\u542B\u5B57\u8282\u5B57\u7B26\u4E32\u800C\u4E0D\u662F\u5B57\u7B26\u5B57\u7B26\u4E32\u3002\u8FD9\u8BF4\u660E\u5B83\u4EEC\u6CA1\u6709\u5B57\u7B26\u96C6\uFF0C\u5E76\u4E14\u6392\u5E8F\u548C\u6BD4\u8F83\u57FA\u4E8E\u5217\u503C\u5B57\u8282\u7684\u6570\u503C\u503C\u3002</p><p>BLOB \u662F\u4E00\u4E2A\u4E8C\u8FDB\u5236\u5927\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5BB9\u7EB3\u53EF\u53D8\u6570\u91CF\u7684\u6570\u636E\u3002\u6709 4 \u79CD BLOB \u7C7B\u578B\uFF1ATINYBLOB\u3001BLOB\u3001MEDIUMBLOB \u548C LONGBLOB\u3002\u5B83\u4EEC\u533A\u522B\u5728\u4E8E\u53EF\u5BB9\u7EB3\u5B58\u50A8\u8303\u56F4\u4E0D\u540C\u3002</p><p>\u6709 4 \u79CD TEXT \u7C7B\u578B\uFF1ATINYTEXT\u3001TEXT\u3001MEDIUMTEXT \u548C LONGTEXT\u3002\u5BF9\u5E94\u7684\u8FD9 4 \u79CD BLOB \u7C7B\u578B\uFF0C\u53EF\u5B58\u50A8\u7684\u6700\u5927\u957F\u5EA6\u4E0D\u540C\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u3002</p><blockquote><p>\u539F\u6587\u6765\u6E90\uFF1A<a href="https://www.runoob.com/mysql/mysql-data-types.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/mysql/mysql-data-types.html</a></p></blockquote>',27),n=[s];function y(i,f,g,x,r,h){return e(),l("div",null,n)}var E=t(a,[["render",y]]);export{M as __pageData,E as default};