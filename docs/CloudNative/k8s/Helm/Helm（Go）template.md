# Helm/GO Template

- `【【 quote .Values.favorite.drink 】】`: 使用`quote`函数来为字符串添加双引号： 等价于`【【 .Values.favorite.drink | quote 】】`;


- `【【 .Values.foo | upper | quote 】】`: 使用`upper`函数将字符串全部大写并添加双引号.

- `【【- 】】`或者`【【  -】】`用于消除多余空格： `-`在左边即消除左边的空格： 在右边即消除右边的空格;

- `【【 .Values.foo | indent2 】】`: 使用`indent`函数来添加空格进行缩进;

- `【【 .Value.foo | title 】】`: 用于大写首字母;

- `【【 .Value.foo | default "bar" 】】`: 用于给予变量默认值；

- 

- 流程控制 ：
  ```yaml
【【 if PIPELINE 】】
  # Do something
【【 else if OTHER PIPELINE 】】
  # Do something else
【【 else 】】
  # Default case
【【 end 】】
  # 使用范例，如果某个key对应的value与特定的value相等，则mug为true
  【【 if eq .Values.favorite.drink "coffee" 】】mug: true【【 end 】】
  ```
  
- `with`:改变当前作用域(.)：
  
  ```yaml
  # 使用with可以简化变量引用
  【【- with .Values.favorite 】】
  drink: 【【 .drink | default "tea" | quote 】】
  food: 【【 .food | upper | quote 】】
  【【- end 】】
  ```
  
- `range`用于循环遍历数组或是map：

  ```yaml
  # 例如values.yaml文件中有如下信息：
  pizzaToppings:
    - mushrooms
    - cheese
    - peppers
    - onions
  # 使用【【 range】】...【【 end】】循环语句循环pizzaToppings数组：
  apiVersion: v1
  kind: ConfigMap
  metadata:
    name: 【【 .Release.Name 】】-configmap
  data:
    toppings: |-
      【【- range .Values.pizzaToppings 】】
      # title 函数用于大写首字母
      - 【【 . | title | quote 】】
      【【- end 】】
  ```


## 参考资料

- Helm 内置变量: https://helm.sh/docs/chart_template_guide/builtin_objects/
- Helm 方法完整列表：https://helm.sh/docs/chart_template_guide/function_list/
- Helm 快速入门：https://juejin.im/post/6844904199818313735

