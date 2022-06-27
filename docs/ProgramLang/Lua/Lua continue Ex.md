Lua continue 功能实现方法：

```lua
-- 方法一
-- prints odd numbers in [|1,10|]
for i=1,10 do
  if i % 2 == 0 then goto continue end
  print(i)
  ::continue::
end

-- 方法二
for idx = 1, 5 do
    repeat
        print(1)
        print(2)
        print(3)
        do break end -- goes to next iteration of for
        -- or: if idx>3 then;print("continue");break;end
        print(4)
        print(5)
    until true
end
```

---

:link: 参考链接：

- http://lua-users.org/wiki/ContinueProposal
- https://stackoverflow.com/questions/3524970/why-does-lua-have-no-continue-statement

