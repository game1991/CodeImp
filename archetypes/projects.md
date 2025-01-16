---
title: "{{ replace .Name \"-\" \" \" | title }}"
date: {{ .Date }}
draft: false

# 项目摘要
summary: "简短的项目描述，用于快速了解项目核心"

# 项目元数据
project:
  name: "完整项目名称"
  type: "Web/Mobile/Desktop/Library"
  status: "开发中/已完成/已上线/维护中"

# 技术栈与架构
tech:
  languages: ["Go", "JavaScript"]
  frameworks: ["Vue", "Gin"]
  databases: ["PostgreSQL"]
  infrastructure: ["Docker", "Kubernetes"]
  deployment: ["AWS", "GitHub Actions"]

# 项目指标
metrics:
  stars: 0
  contributors: 1
  last_updated: {{ .Date }}
  version: "0.1.0"

# 链接
links:
  homepage:
    url: ""
    external: true
  github:
    url: ""
    external: true
  demo:
    url: ""
    external: true
  documentation:
    url: ""
    external: true

# 项目详细描述
## 背景
背景介绍：为什么要开发这个项目？解决了什么问题？

## 功能特性
1. 特性1
2. 特性2
3. 特性3

## 技术亮点
- 技术难点1
- 技术难点2

## 架构设计
[可以插入架构图]

## 未来规划
- 计划1
- 计划2

## 项目截图
![项目截图](screenshot.png)

## 安装与使用
```bash
# 安装命令
# 运行命令
```

## 许可证
MIT 许可证
