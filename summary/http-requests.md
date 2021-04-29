# 前后端交互数据格式

## GET、DELETE 请求和 POST、PUT请求后端接收参数

JS 中 `XMLHttpRequest` 和 `fetch` 不允许 `GET` 请求携带请求体 `requestbody`, `DELETE` 请求由于可能会在经过代理服务器时丢失 `entity body` 所以和 `GET`
请求一样处理

上述两种请求的传参方式为在 `url` 后面携带字符串

`POST` 和 `PUT` 请求参数统一放在请求体重，禁止出现一部分参数放在 `url` 之后，一部分参数放在请求体中的做法。

### 对 `url` 的各组成部分的说明

以 `http://localhost/api/sendRequest?name=xxx&age=xxx&sex=xxx#detail` 为例

`?name=xxx&age=xxx&sex=xxx` 问号连带后面 key=value&key=value 格式的多组键值对， js 中称为 `urlSearchParams` 直译过来就是查询参数。下文的 `query` 方式传参就是它

`#detail` 井号连带后面的字符串 js 中称为 `hash`

> 参考文档：[MDN/URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL)

### 下面通过几个例子区分前后端交互的数据格式

1. `path` 传参
    - url 示例：http://localhost/api/{params}
    - 此种方式直接以路径名作为参数
    - `SpringBoot` 注解：
   ```java
    @GetMapping("/car/{id}/owner/{username}")
    public Map<String,Object> getCar(
        @PathVariable("id") Integer id,
        @PathVariable("username") String name,
    ) {
        Map<String,Object> map = new HashMap<>();
        map.put("id",id);
        map.put("name",name);
        return map;
    }      
   ```
   这里的 `@PathVariable("id")` 获取的就是 `path` 中对应的占位符 `{id}` 的值

2. `query` 传参
    - url 示例：http://localhost/api/getBody?userId=xxx&age=xxx
    - 此种方式以 `?key=value&key2=value2&key3=value3` 格式传递参数 （上文说的 `urlSearchParams`）
    - `SpringBoot` 注解：
   ```java
    @GetMapping("/user")
    public Map<String,Object> getUser(
        @RequestParam("age") Integer age,
        @RequestParam("name") String name,
    ) {
        Map<String, Object> map = new HashMap<>();
        map.put("age",age);
        map.put("name",name);
        return map;
    }   
   ```
   如果 `GET` 请求路径为 `/user?age=1&name=张三` 那么 `@RequestParam("age")` 获取的 `age` 就是 `1`, `@RequestParam("inters")` 获取的 `name`
   就是 `张三`
   - `Swaager` 注解
     ```java
     @ApiImplicitParams({
         @ApiImplicitParam(value = "姓名", name = "name", required = true,dataType = "String",paramType = "query")})
     ```
   
3. `body` 传参
    - `body` 传参参数格式统一般只使用两种格式 —— `JSON` `FormData`
    - `JSON` 传参
      - 需要定义DTO来接收前端传参
      - `SpringBoot` 注解：
      ```java
      @PostMapping(path = "/demo1")
      public void demo1(@RequestBody Person person) {
         System.out.println(person.toString());
      }
      ```
    - `formData` 传参
      - 可用 `@RequestParam` 接收参数
      - 需要额外的swagger标注以注明前端需要传formData:
      ```java
      @ApiImplicitParams({
            @ApiImplicitParam(value = "姓名", name = "name", required = true,dataType = "String",paramType = "form")})
      ```
      - `SpringBoot` 注解：
        ```java
        @PutMapping("/updateUser")
        public Map<String,Object> getUser(
            @RequestParam("age") Integer age,
            @RequestParam("name") String name,
        ) {
            Map<String, Object> map = new HashMap<>();
            map.put("age",age);
            map.put("name",name);
            return map;
        }  
        ```
         
