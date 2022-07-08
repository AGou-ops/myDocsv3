import{_ as s,o as n,c as a,a as l}from"./app.1e6146c3.js";const B=JSON.parse('{"title":"MySQL \u914D\u7F6E\u6587\u4EF6my.cnf","description":"","frontmatter":{},"headers":[],"relativePath":"LinuxBasics/DataBases/MySQL/MySQL Configuration.md","lastUpdated":1657272051000}'),p={name:"LinuxBasics/DataBases/MySQL/MySQL Configuration.md"},o=l(`<h1 id="mysql-\u914D\u7F6E\u6587\u4EF6my-cnf" tabindex="-1">MySQL \u914D\u7F6E\u6587\u4EF6my.cnf <a class="header-anchor" href="#mysql-\u914D\u7F6E\u6587\u4EF6my-cnf" aria-hidden="true">#</a></h1><div class="language-ini"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">client</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#758575;"># \u6307\u5B9Amysql\u5F00\u653E\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#4D9375;">port</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 3306</span></span>
<span class="line"><span style="color:#758575;"># \u5957\u63A5\u5B57\u6587\u4EF6</span></span>
<span class="line"><span style="color:#4D9375;">socket</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/data/mysql.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">[</span><span style="color:#A1B567;">mysqld</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#758575;"># Skip #</span></span>
<span class="line"><span style="color:#4D9375;">skip_name_resolve</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#4D9375;">skip_external_locking</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#4D9375;">skip_symbolic_links</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># GENERAL #</span></span>
<span class="line"><span style="color:#758575;"># \u542F\u52A8\u7528\u6237</span></span>
<span class="line"><span style="color:#4D9375;">user</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> mysql</span></span>
<span class="line"><span style="color:#4D9375;">default_storage_engine</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> InnoDB</span></span>
<span class="line"><span style="color:#758575;"># \u7F16\u7801\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#4D9375;">character-set-server</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> utf8</span></span>
<span class="line"><span style="color:#758575;"># pid\u6587\u4EF6\u6240\u5728\u76EE\u5F55</span></span>
<span class="line"><span style="color:#4D9375;">pid_file</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/data/mysqld.pid</span></span>
<span class="line"><span style="color:#758575;"># \u6307\u5B9AMysql\u5B89\u88C5\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#4D9375;">basedir</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql</span></span>
<span class="line"><span style="color:#4D9375;">port</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 3306</span></span>
<span class="line"><span style="color:#4D9375;">bind-address</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 0.0.0.0</span></span>
<span class="line"><span style="color:#4D9375;">explicit_defaults_for_timestamp</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> off</span></span>
<span class="line"><span style="color:#4D9375;">sql_mode</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># DATA STORAGE #</span></span>
<span class="line"><span style="color:#758575;"># MyISAM #</span></span>
<span class="line"><span style="color:#758575;"># \u6307\u5B9A\u7D22\u5F15\u7F13\u51B2\u533A\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">key_buffer_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 32M</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># undo log #</span></span>
<span class="line"><span style="color:#4D9375;">innodb_undo_directory</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/undo</span></span>
<span class="line"><span style="color:#4D9375;">innodb_undo_tablespaces</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># SAFETY #</span></span>
<span class="line"><span style="color:#758575;"># \u9650\u5236server\u63A5\u53D7\u7684\u6570\u636E\u5305\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">max_allowed_packet</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 100M</span></span>
<span class="line"><span style="color:#758575;"># \u6700\u5927\u8FDE\u63A5\u9519\u8BEF\uFF0C\u8D85\u51FA\u8BE5\u503C\u4EE5\u540E\uFF0C\u670D\u52A1\u5668\u5C06\u963B\u6B62\u8BE5\u5BA2\u6237\u7AEF\u540E\u7EED\u7684\u6240\u6709\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#4D9375;">max_connect_errors</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1000000</span></span>
<span class="line"><span style="color:#4D9375;">sysdate_is_now</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#4D9375;">secure-file-priv</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;/tmp&#39;</span></span>
<span class="line"><span style="color:#4D9375;">default_authentication_plugin</span><span style="color:#858585;">=</span><span style="color:#C98A7D;">&#39;mysql_native_password&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># Replice #</span></span>
<span class="line"><span style="color:#4D9375;">server-id</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1001</span></span>
<span class="line"><span style="color:#4D9375;">relay_log</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> mysqld-relay-bin</span></span>
<span class="line"><span style="color:#4D9375;">gtid_mode</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> on</span></span>
<span class="line"><span style="color:#DBD7CA;">enforce-gtid-consistency</span></span>
<span class="line"><span style="color:#4D9375;">log-slave-updates</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> on</span></span>
<span class="line"><span style="color:#4D9375;">master_info_repository</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> TABLE</span></span>
<span class="line"><span style="color:#4D9375;">relay_log_info_repository</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> TABLE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># DATA STORAGE #</span></span>
<span class="line"><span style="color:#758575;"># \u6570\u636E\u6587\u4EF6\u5B58\u653E\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#4D9375;">datadir</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/data/</span></span>
<span class="line"><span style="color:#758575;"># \u5B58\u653E\u4E34\u65F6\u6587\u4EF6\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#4D9375;">tmpdir</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /tmp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># BINARY LOGGING #</span></span>
<span class="line"><span style="color:#4D9375;">log_bin</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/sql_log/mysql-bin</span></span>
<span class="line"><span style="color:#758575;"># \u5982\u679C\u4E8C\u8FDB\u5236\u65E5\u5FD7\u5199\u5165\u7684\u5185\u5BB9\u8D85\u51FA\u7ED9\u5B9A\u503C\uFF0C\u65E5\u5FD7\u5C31\u4F1A\u53D1\u751F\u6EDA\u52A8</span></span>
<span class="line"><span style="color:#4D9375;">max_binlog_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1000M</span></span>
<span class="line"><span style="color:#758575;"># \u57FA\u4E8E\u884C\u7684\u590D\u5236</span></span>
<span class="line"><span style="color:#4D9375;">binlog_format</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> row</span></span>
<span class="line"><span style="color:#4D9375;">binlog_expire_logs_seconds</span><span style="color:#858585;">=</span><span style="color:#DBD7CA;">86400</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># CACHES AND LIMITS #</span></span>
<span class="line"><span style="color:#758575;"># \u4E34\u65F6\u5185\u90E8\u5806\u79EF\u8868\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">tmp_table_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 32M</span></span>
<span class="line"><span style="color:#758575;"># \u6700\u5927\u5185\u5B58\u8868\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">max_heap_table_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 32M</span></span>
<span class="line"><span style="color:#758575;"># mysql\u7684\u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#4D9375;">max_connections</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 4000</span></span>
<span class="line"><span style="color:#758575;"># \u7528\u4E8E\u7F13\u5B58\u7A7A\u95F2\u7684\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#4D9375;">thread_cache_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 2048</span></span>
<span class="line"><span style="color:#758575;"># \u63A7\u5236\u6587\u4EF6\u6253\u5F00\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#4D9375;">open_files_limit</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 65535</span></span>
<span class="line"><span style="color:#4D9375;">table_definition_cache</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 4096</span></span>
<span class="line"><span style="color:#758575;"># \u8868\u63CF\u8FF0\u7B26\u7F13\u5B58\u5927\u5C0F\uFF0C\u53EF\u51CF\u5C11\u6587\u4EF6\u6253\u5F00/\u5173\u95ED\u6B21\u6570</span></span>
<span class="line"><span style="color:#4D9375;">table_open_cache</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 4096</span></span>
<span class="line"><span style="color:#758575;"># \u6392\u5E8F\u8BED\u53E5 &#39;group by&#39; \u4E0E &#39;order by&#39; \u5360\u7528\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">sort_buffer_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 2M</span></span>
<span class="line"><span style="color:#758575;"># \u8BFB\u7F13\u51B2\u533A\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">read_buffer_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 2M</span></span>
<span class="line"><span style="color:#758575;"># \u8BBE\u7F6E\u670D\u52A1\u5668\u968F\u673A\u8BFB\u53D6\u7F13\u51B2\u533A\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">read_rnd_buffer_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 2M</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528join\u8BED\u53E5\u7684\u7F13\u5B58\u533A</span></span>
<span class="line"><span style="color:#4D9375;">join_buffer_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1M</span></span>
<span class="line"><span style="color:#758575;"># \u7528\u6765\u5B58\u653E\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u81EA\u8EAB\u7684\u6807\u8BC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#4D9375;">thread_stack</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 512k</span></span>
<span class="line"><span style="color:#4D9375;">max_length_for_sort_data</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 16k</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># INNODB #</span></span>
<span class="line"><span style="color:#758575;"># \u4F7F\u7528O_DIRECT\u6A21\u5F0F\u6253\u5F00\u6570\u636E\u6587\u4EF6\uFF0C\u7528fsync()\u51FD\u6570\u53BB\u66F4\u65B0\u65E5\u5FD7\u548C\u6570\u636E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#4D9375;">innodb_flush_method</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> O_DIRECT</span></span>
<span class="line"><span style="color:#758575;"># \u65E5\u5FD7\u7F13\u5B58,\u5927\u7684\u65E5\u5FD7\u7F13\u51B2\u53EF\u4EE5\u51CF\u5C11\u78C1\u76D8I/O</span></span>
<span class="line"><span style="color:#4D9375;">innodb_log_buffer_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 16M</span></span>
<span class="line"><span style="color:#758575;"># \u6BCF\u6B21commit \u65E5\u5FD7\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u5237\u5230\u78C1\u76D8\u4E2D</span></span>
<span class="line"><span style="color:#4D9375;">innodb_flush_log_at_trx_commit</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#758575;">#\u4F5C\u7528\uFF1A\u4F7F\u6BCF\u4E2AInnodb\u7684\u8868\uFF0C\u6709\u81EA\u5DF2\u72EC\u7ACB\u7684\u8868\u7A7A\u95F4\u3002\u5982\u5220\u9664\u6587\u4EF6\u540E\u53EF\u4EE5\u56DE\u6536\u90A3\u90E8\u5206\u7A7A\u95F4\u3002</span></span>
<span class="line"><span style="color:#758575;">#\u5206\u914D\u539F\u5219\uFF1A\u53EA\u6709\u4F7F\u7528\u4E0D\u4F7F\u7528\u3002\u4F46\uFF24\uFF22\u8FD8\u9700\u8981\u6709\u4E00\u4E2A\u516C\u5171\u7684\u8868\u7A7A\u95F4\u3002</span></span>
<span class="line"><span style="color:#4D9375;">innodb_file_per_table</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u7528\u6765\u9AD8\u901F\u7F13\u51B2\u6570\u636E\u548C\u7D22\u5F15\u5185\u5B58\u7F13\u51B2\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">innodb_buffer_pool_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 256M</span></span>
<span class="line"><span style="color:#4D9375;">innodb_stats_on_metadata</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> off</span></span>
<span class="line"><span style="color:#758575;"># \u9650\u5236Innodb\u80FD\u6253\u5F00\u7684\u8868\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#4D9375;">innodb_open_files</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 8192</span></span>
<span class="line"><span style="color:#758575;"># \u8BFBio\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#4D9375;">innodb_read_io_threads</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 16</span></span>
<span class="line"><span style="color:#758575;"># \u5199io\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#4D9375;">innodb_write_io_threads</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 16</span></span>
<span class="line"><span style="color:#758575;"># \u8FD9\u4E2A\u53C2\u6570\u636E\u63A7\u5236Innodb checkpoint\u65F6\u7684IO\u80FD\u529B</span></span>
<span class="line"><span style="color:#4D9375;">innodb_io_capacity</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 20000</span></span>
<span class="line"><span style="color:#4D9375;">innodb_thread_concurrency</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 0</span></span>
<span class="line"><span style="color:#758575;"># \u5728\u56DE\u6EDA(rooled back)\u4E4B\u524D\uFF0CInnoDB \u4E8B\u52A1\u5C06\u7B49\u5F85\u8D85\u65F6\u7684\u65F6\u95F4(\u5355\u4F4D \u79D2)</span></span>
<span class="line"><span style="color:#4D9375;">innodb_lock_wait_timeout</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 60</span></span>
<span class="line"><span style="color:#4D9375;">innodb_old_blocks_time</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1000</span></span>
<span class="line"><span style="color:#4D9375;">innodb_use_native_aio</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u5F00\u59CB\u788E\u7247\u56DE\u6536\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#4D9375;">innodb_purge_threads</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 1</span></span>
<span class="line"><span style="color:#758575;"># \u5F53\u968F\u540E\u9875\u9762\u88AB\u8BFB\u5230\u5185\u5B58\u4E2D\u65F6\uFF0C\u4F1A\u5C06\u8FD9\u4E9B\u53D8\u5316\u7684\u8BB0\u5F55merge\u5230\u9875\u4E2D\u3002</span></span>
<span class="line"><span style="color:#4D9375;">innodb_change_buffering</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> all</span></span>
<span class="line"><span style="color:#758575;"># \u53EF\u4EE5\u51CF\u5C11\u5237\u65B0\u7F13\u51B2\u6C60\u7684\u6B21\u6570\uFF0C\u4ECE\u800C\u51CF\u5C11\u78C1\u76D8 I/O\u3002</span></span>
<span class="line"><span style="color:#4D9375;">innodb_log_file_size</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 64M</span></span>
<span class="line"><span style="color:#758575;"># \u6307\u5B9A\u67092\u4E2A\u65E5\u5FD7\u7EC4</span></span>
<span class="line"><span style="color:#4D9375;">innodb_log_files_in_group</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> 2</span></span>
<span class="line"><span style="color:#758575;"># \u5355\u72EC\u6307\u5B9A\u6570\u636E\u6587\u4EF6\u7684\u8DEF\u5F84\u4E0E\u5927\u5C0F</span></span>
<span class="line"><span style="color:#4D9375;">innodb_data_file_path</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> ibdata1:256M:autoextend</span></span>
<span class="line"><span style="color:#4D9375;">innodb_rollback_on_timeout</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;"># LOGGING #</span></span>
<span class="line"><span style="color:#758575;"># \u9519\u8BEF\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u52B2</span></span>
<span class="line"><span style="color:#4D9375;">log_error</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/sql_log/mysql-error.log</span></span>
<span class="line"><span style="color:#4D9375;">slow_query_log_file</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">=</span><span style="color:#DBD7CA;"> /usr/local/mysql/sql_log/slowlog.log</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">client</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6307\u5B9Amysql\u5F00\u653E\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#1C6B48;">port</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 3306</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5957\u63A5\u5B57\u6587\u4EF6</span></span>
<span class="line"><span style="color:#1C6B48;">socket</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/data/mysql.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">mysqld</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#A0ADA0;"># Skip #</span></span>
<span class="line"><span style="color:#1C6B48;">skip_name_resolve</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#1C6B48;">skip_external_locking</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#1C6B48;">skip_symbolic_links</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># GENERAL #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u542F\u52A8\u7528\u6237</span></span>
<span class="line"><span style="color:#1C6B48;">user</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> mysql</span></span>
<span class="line"><span style="color:#1C6B48;">default_storage_engine</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> InnoDB</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7F16\u7801\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#1C6B48;">character-set-server</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> utf8</span></span>
<span class="line"><span style="color:#A0ADA0;"># pid\u6587\u4EF6\u6240\u5728\u76EE\u5F55</span></span>
<span class="line"><span style="color:#1C6B48;">pid_file</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/data/mysqld.pid</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6307\u5B9AMysql\u5B89\u88C5\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#1C6B48;">basedir</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql</span></span>
<span class="line"><span style="color:#1C6B48;">port</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 3306</span></span>
<span class="line"><span style="color:#1C6B48;">bind-address</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 0.0.0.0</span></span>
<span class="line"><span style="color:#1C6B48;">explicit_defaults_for_timestamp</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> off</span></span>
<span class="line"><span style="color:#1C6B48;">sql_mode</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># DATA STORAGE #</span></span>
<span class="line"><span style="color:#A0ADA0;"># MyISAM #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6307\u5B9A\u7D22\u5F15\u7F13\u51B2\u533A\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">key_buffer_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 32M</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># undo log #</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_undo_directory</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/undo</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_undo_tablespaces</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># SAFETY #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u9650\u5236server\u63A5\u53D7\u7684\u6570\u636E\u5305\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">max_allowed_packet</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 100M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6700\u5927\u8FDE\u63A5\u9519\u8BEF\uFF0C\u8D85\u51FA\u8BE5\u503C\u4EE5\u540E\uFF0C\u670D\u52A1\u5668\u5C06\u963B\u6B62\u8BE5\u5BA2\u6237\u7AEF\u540E\u7EED\u7684\u6240\u6709\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#1C6B48;">max_connect_errors</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1000000</span></span>
<span class="line"><span style="color:#1C6B48;">sysdate_is_now</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#1C6B48;">secure-file-priv</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;/tmp&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">default_authentication_plugin</span><span style="color:#8E8F8B;">=</span><span style="color:#B56959;">&#39;mysql_native_password&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Replice #</span></span>
<span class="line"><span style="color:#1C6B48;">server-id</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1001</span></span>
<span class="line"><span style="color:#1C6B48;">relay_log</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> mysqld-relay-bin</span></span>
<span class="line"><span style="color:#1C6B48;">gtid_mode</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> on</span></span>
<span class="line"><span style="color:#393A34;">enforce-gtid-consistency</span></span>
<span class="line"><span style="color:#1C6B48;">log-slave-updates</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> on</span></span>
<span class="line"><span style="color:#1C6B48;">master_info_repository</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> TABLE</span></span>
<span class="line"><span style="color:#1C6B48;">relay_log_info_repository</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> TABLE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># DATA STORAGE #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6570\u636E\u6587\u4EF6\u5B58\u653E\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#1C6B48;">datadir</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/data/</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5B58\u653E\u4E34\u65F6\u6587\u4EF6\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#1C6B48;">tmpdir</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /tmp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># BINARY LOGGING #</span></span>
<span class="line"><span style="color:#1C6B48;">log_bin</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/sql_log/mysql-bin</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5982\u679C\u4E8C\u8FDB\u5236\u65E5\u5FD7\u5199\u5165\u7684\u5185\u5BB9\u8D85\u51FA\u7ED9\u5B9A\u503C\uFF0C\u65E5\u5FD7\u5C31\u4F1A\u53D1\u751F\u6EDA\u52A8</span></span>
<span class="line"><span style="color:#1C6B48;">max_binlog_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1000M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u57FA\u4E8E\u884C\u7684\u590D\u5236</span></span>
<span class="line"><span style="color:#1C6B48;">binlog_format</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> row</span></span>
<span class="line"><span style="color:#1C6B48;">binlog_expire_logs_seconds</span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;">86400</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># CACHES AND LIMITS #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4E34\u65F6\u5185\u90E8\u5806\u79EF\u8868\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">tmp_table_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 32M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6700\u5927\u5185\u5B58\u8868\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">max_heap_table_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 32M</span></span>
<span class="line"><span style="color:#A0ADA0;"># mysql\u7684\u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">max_connections</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 4000</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7528\u4E8E\u7F13\u5B58\u7A7A\u95F2\u7684\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#1C6B48;">thread_cache_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 2048</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u63A7\u5236\u6587\u4EF6\u6253\u5F00\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">open_files_limit</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 65535</span></span>
<span class="line"><span style="color:#1C6B48;">table_definition_cache</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 4096</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8868\u63CF\u8FF0\u7B26\u7F13\u5B58\u5927\u5C0F\uFF0C\u53EF\u51CF\u5C11\u6587\u4EF6\u6253\u5F00/\u5173\u95ED\u6B21\u6570</span></span>
<span class="line"><span style="color:#1C6B48;">table_open_cache</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 4096</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6392\u5E8F\u8BED\u53E5 &#39;group by&#39; \u4E0E &#39;order by&#39; \u5360\u7528\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">sort_buffer_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 2M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BFB\u7F13\u51B2\u533A\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">read_buffer_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 2M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BBE\u7F6E\u670D\u52A1\u5668\u968F\u673A\u8BFB\u53D6\u7F13\u51B2\u533A\u7684\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">read_rnd_buffer_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 2M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528join\u8BED\u53E5\u7684\u7F13\u5B58\u533A</span></span>
<span class="line"><span style="color:#1C6B48;">join_buffer_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7528\u6765\u5B58\u653E\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u81EA\u8EAB\u7684\u6807\u8BC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#1C6B48;">thread_stack</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 512k</span></span>
<span class="line"><span style="color:#1C6B48;">max_length_for_sort_data</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 16k</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># INNODB #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u4F7F\u7528O_DIRECT\u6A21\u5F0F\u6253\u5F00\u6570\u636E\u6587\u4EF6\uFF0C\u7528fsync()\u51FD\u6570\u53BB\u66F4\u65B0\u65E5\u5FD7\u548C\u6570\u636E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_flush_method</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> O_DIRECT</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u65E5\u5FD7\u7F13\u5B58,\u5927\u7684\u65E5\u5FD7\u7F13\u51B2\u53EF\u4EE5\u51CF\u5C11\u78C1\u76D8I/O</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_log_buffer_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 16M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6BCF\u6B21commit \u65E5\u5FD7\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u5237\u5230\u78C1\u76D8\u4E2D</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_flush_log_at_trx_commit</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u4F5C\u7528\uFF1A\u4F7F\u6BCF\u4E2AInnodb\u7684\u8868\uFF0C\u6709\u81EA\u5DF2\u72EC\u7ACB\u7684\u8868\u7A7A\u95F4\u3002\u5982\u5220\u9664\u6587\u4EF6\u540E\u53EF\u4EE5\u56DE\u6536\u90A3\u90E8\u5206\u7A7A\u95F4\u3002</span></span>
<span class="line"><span style="color:#A0ADA0;">#\u5206\u914D\u539F\u5219\uFF1A\u53EA\u6709\u4F7F\u7528\u4E0D\u4F7F\u7528\u3002\u4F46\uFF24\uFF22\u8FD8\u9700\u8981\u6709\u4E00\u4E2A\u516C\u5171\u7684\u8868\u7A7A\u95F4\u3002</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_file_per_table</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u7528\u6765\u9AD8\u901F\u7F13\u51B2\u6570\u636E\u548C\u7D22\u5F15\u5185\u5B58\u7F13\u51B2\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_buffer_pool_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 256M</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_stats_on_metadata</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> off</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u9650\u5236Innodb\u80FD\u6253\u5F00\u7684\u8868\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_open_files</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 8192</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8BFBio\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_read_io_threads</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 16</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5199io\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_write_io_threads</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 16</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u8FD9\u4E2A\u53C2\u6570\u636E\u63A7\u5236Innodb checkpoint\u65F6\u7684IO\u80FD\u529B</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_io_capacity</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 20000</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_thread_concurrency</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 0</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5728\u56DE\u6EDA(rooled back)\u4E4B\u524D\uFF0CInnoDB \u4E8B\u52A1\u5C06\u7B49\u5F85\u8D85\u65F6\u7684\u65F6\u95F4(\u5355\u4F4D \u79D2)</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_lock_wait_timeout</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 60</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_old_blocks_time</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1000</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_use_native_aio</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F00\u59CB\u788E\u7247\u56DE\u6536\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_purge_threads</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 1</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5F53\u968F\u540E\u9875\u9762\u88AB\u8BFB\u5230\u5185\u5B58\u4E2D\u65F6\uFF0C\u4F1A\u5C06\u8FD9\u4E9B\u53D8\u5316\u7684\u8BB0\u5F55merge\u5230\u9875\u4E2D\u3002</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_change_buffering</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> all</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u53EF\u4EE5\u51CF\u5C11\u5237\u65B0\u7F13\u51B2\u6C60\u7684\u6B21\u6570\uFF0C\u4ECE\u800C\u51CF\u5C11\u78C1\u76D8 I/O\u3002</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_log_file_size</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 64M</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u6307\u5B9A\u67092\u4E2A\u65E5\u5FD7\u7EC4</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_log_files_in_group</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> 2</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u5355\u72EC\u6307\u5B9A\u6570\u636E\u6587\u4EF6\u7684\u8DEF\u5F84\u4E0E\u5927\u5C0F</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_data_file_path</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> ibdata1:256M:autoextend</span></span>
<span class="line"><span style="color:#1C6B48;">innodb_rollback_on_timeout</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># LOGGING #</span></span>
<span class="line"><span style="color:#A0ADA0;"># \u9519\u8BEF\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u52B2</span></span>
<span class="line"><span style="color:#1C6B48;">log_error</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/sql_log/mysql-error.log</span></span>
<span class="line"><span style="color:#1C6B48;">slow_query_log_file</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">=</span><span style="color:#393A34;"> /usr/local/mysql/sql_log/slowlog.log</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function c(r,t,y,i,A,D){return n(),a("div",null,e)}var C=s(p,[["render",c]]);export{B as __pageData,C as default};
