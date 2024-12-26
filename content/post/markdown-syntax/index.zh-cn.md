---
title: Markdown 语法指南
date: 2023-09-07
description: 示例文章展示基本的Markdown语法和HTML元素的格式。
tags:
    - markdown
    - css
    - html
    - themes
categories:
    - markdown
---

本文提供了可以在Hugo内容文件中使用的基本Markdown语法示例，同时展示了基本HTML元素在Hugo主题中是否装饰了CSS。

<!--more-->

## 标题

以下HTML `<h1>`—`<h6>`元素表示六个级别的节标题。`<h1>`是最高的节级别，而`<h6>`是最低的。

# H1
## H2
### H3
#### H4
##### H5
###### H6

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## 引用

引用元素表示从另一个来源引用的内容，选项包括必须在`footer`或`cite`元素内的引用，以及可选的内联更改，例如注释和缩写。

### 无归属的引用

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **注意**：您可以在引用中使用*Markdown语法*。

### 有归属的引用

> 不要通过共享内存进行交流，而是通过交流共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上面的引用摘自Rob Pike在2015年11月18日的[Gopherfest](https://www.youtube.com/watch?v=PAAkCSZUG1c)演讲。

## 表格

表格不是核心Markdown规范的一部分，但Hugo支持它们。

   姓名 | 年龄
--------|------
    Bob | 27
  Alice | 23

### 表格中的内联Markdown

| 斜体   | 粗体     | 代码   |
| --------  | -------- | ------ |
| *斜体* | **粗体** | `代码` |

| A                                                        | B                                                                                                             | C                                                                                                                                    | D                                                 | E                                                          | F                                                                    |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|------------------------------------------------------------|----------------------------------------------------------------------|
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. | Phasellus ultricies, sapien non euismod aliquam, dui ligula tincidunt odio, at accumsan nulla sapien eget ex. | Proin eleifend dictum ipsum, non euismod ipsum pulvinar et. Vivamus sollicitudin, quam in pulvinar aliquam, metus elit pretium purus | Proin sit amet velit nec enim imperdiet vehicula. | Ut bibendum vestibulum quam, eu egestas turpis gravida nec | Sed scelerisque nec turpis vel viverra. Vivamus vitae pretium sapien |

## 代码块
### 使用反引号的代码块

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>示例HTML5文档</title>
</head>
<body>
  <p>测试</p>
</body>
</html>
```

### 用四个空格缩进的代码块

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>示例HTML5文档</title>
    </head>
    <body>
      <p>测试</p>
    </body>
    </html>

### Diff代码块

```diff
[dependencies.bevy]
git = "https://github.com/bevyengine/bevy"
rev = "11f52b8c72fc3a568e8bb4a4cd1f3eb025ac2e13"
- features = ["dynamic"]
+ features = ["jpeg", "dynamic"]
```

### 单行代码块

```html
<p>一个段落</p>
```

## 列表类型

### 有序列表

1. 第一个项目
2. 第二个项目
3. 第三个项目

### 无序列表

* 列表项
* 另一个项目
* 还有另一个项目

### 嵌套列表

* 水果
  * 苹果
  * 橙子
  * 香蕉
* 乳制品
  * 牛奶
  * 奶酪

## 其他元素 — abbr, sub, sup, kbd, mark

<abbr title="图形交换格式">GIF</abbr>是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> 结束会话。

大多数<mark>蝾螈</mark>是夜行性的，捕食昆虫、蠕虫和其他小生物。
