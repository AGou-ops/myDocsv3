# MySQL小技巧汇总

- JSON中查询特定键对应的值

```sql
SELECT data -> '$.text_1' FROM ...				-- `->`写法等价于JSON_EXTRACT()
-- `->>`是JSON_EXTRACT() 和 JSON_UNQUOTE() 的等价写法
```

:link:更多JSON操作参考：https://www.cnblogs.com/muscleape/p/10064031.html

- 将字符串转换为数字

```sql
SELECT CAST('123' AS SIGNED);
SELECT CONVERT('123',SIGNED);
-- 三种方法，最后这种非常简单
SELECT '123'+0;
```

- 