# AI 协作指南

> 本文件为新 AI 提供快速上手流程。

## 启动流程

**第一步：询问项目路径**

向开发者确认本地项目路径：
> "请问项目代码存放在哪个路径？"

**第二步：记录到记忆文件**

将路径保存到自己的记忆文件（MEMORY.md）中，例如：
```markdown
## 当前项目
- 项目路径：`/Users/xxx/PycharmProjects/openclaw-guide/`
```

**第三步：正常开发**

后续所有开发操作都在该路径下进行。

---

## 项目信息

**主文档链接**：https://wcnva31ky6j0.feishu.cn/docx/SozydeiYLoRxgPxlscMc3oeGnAb

所有项目信息（架构、技术栈、进度、任务等）都在主文档中，通过此链接获取。

**记忆文件只需保存**：
- 项目路径
- 主文档链接

---

## 开发规范要点

- 多分支开发：`git checkout -b feature/功能名`
- 合并后推送：`git push origin main`（自动部署）
- 外部贡献者需 PR 审核，dingclaw 账号可直接推送