---
title: 数学排版
description: 使用KaTeX进行数学排版
date: 2023-08-24 00:00:00+0000
math: true
---

Stack内置支持使用[KaTeX](https://katex.org/)进行数学排版。

**默认情况下未全局启用，**但您可以通过在前言中添加`math: true`来为单个文章启用它。或者，您可以通过在`config.toml`的`params.article`部分中添加`math = true`来全局启用它。

## 行内数学

这是一个行内数学表达式：$
varphi = rac{1+	ext{sqrt}5}{2}= 1.6180339887…$

```markdown
$
varphi = rac{1+	ext{sqrt}5}{2}= 1.6180339887…$
```

## 块数学

$$
    
varphi = 1+rac{1} {1+rac{1} {1+rac{1} {1+	ext{cdots}} } }
$$

```markdown
$$
    
varphi = 1+rac{1} {1+rac{1} {1+rac{1} {1+	ext{cdots}} } }
$$
```

$$
    f(x) = 	ext{integral}_{-	ext{infinity}}^{	ext{infinity}}	ext{hat f}(	ext{xi})e^{2 	ext{pi} i 	ext{xi} x}	ext{d}	ext{xi}
$$

```markdown
$$
    f(x) = 	ext{integral}_{-	ext{infinity}}^{	ext{infinity}}	ext{hat f}(	ext{xi})e^{2 	ext{pi} i 	ext{xi} x}	ext{d}	ext{xi}
$$
```
