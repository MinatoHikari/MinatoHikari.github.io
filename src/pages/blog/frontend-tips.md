---
title: "记录一些你不知道（知道）的小 Tips -- 前端篇"
excerpt: "none"
publishDate: "2022-12-26T10:21:36.050Z"
image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240"
category: "Tutorials"
author: "Minatohikari"
layout: "@layouts/BlogLayout.astro"
tags: [vue, frontend]
---

## Vue

- #### Vue3 控制台显示

  使用 Vue3 时，`console` 的输出因为 `proxy` 的原因看起来很难受，可以打开 chrome 控制台 -> 齿轮打开设置 -> 偏好设置，
找到 控制台分类下的 “启用自定义格式设置工具”，会启动 vue3 内置的对象控制台格式化工具，看起来舒服很多
![](https://s2.loli.net/2022/12/26/WdLyKVx3m81Jovw.png)