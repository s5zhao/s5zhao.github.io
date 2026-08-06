# s5zhao.github.io

Academic homepage for GitHub Pages.

Online entry:

- `https://s5zhao.github.io/`

Main files:

- `index.html`: academic homepage content and GitHub Pages entry.
- `citations.json`: cached Google Scholar citation counts.
- `homepage_citations.js`: displays citation counts beside publications.
- `.github/workflows/update-citations.yml`: scheduled citation update workflow.

## 非技术用户修改指南

主页最常用的文件只有下面三个：

- `index.html`：修改个人简介、研究方向、论文、教育经历、奖励和联系方式。文件内部已经在关键位置添加了中文注释。
- `homepage_settings.css`：修改字体大小、颜色、页面宽度和栏目间距。建议优先修改这个文件，不必阅读复杂的布局代码。
- `photos/portrait.jpg`：个人照片。可以用新的 JPG 照片覆盖这个文件，网页路径不需要修改。

### 放大或缩小全部文字

打开 `homepage_settings.css`，找到：

```css
--body-font-size: 17px;
```

把 `17px` 改成 `18px` 会让全站文字继续变大；改成 `16px` 会缩小。

### 修改颜色

仍然在 `homepage_settings.css` 中修改。例如：

```css
--sea: #0b6871;        /* 链接、编号和主题色 */
--signal: #e6b85c;     /* 首屏金色强调 */
--paper: #f8f6ef;      /* 页面背景 */
```

### 修改中英文内容

`index.html` 中通常会成对出现：

```html
<span class="lang-en">English text</span>
<span class="lang-zh">中文内容</span>
```

分别修改标签中间的文字即可，不要删除开头和结尾的标签。

### 新增论文

在 `index.html` 的论文区域复制一整段 `<li class="pub"> ... </li>`，再修改论文标题、作者和期刊。引用数按照论文标题从 `citations.json` 自动匹配。

### 给代表作添加图片

七篇第一作者期刊论文已经分别预留了图片位置。对应文件名为：

- `photos/publication-01.png`
- `photos/publication-02.png`
- `photos/publication-03.png`
- `photos/publication-04.png`
- `photos/publication-05.png`
- `photos/publication-06.png`
- `photos/publication-07.png`

建议使用接近 `4:3` 比例的横向 JPG 图片。只需按照上面的文件名，把图片放进 `photos` 文件夹；网页会自动使用图片替换占位框，不需要修改 HTML。

### 给三个研究方向添加图片

三个 Research 卡片分别使用下面的图片文件：

- `photos/research-01.png`：Inertial navigation / 惯性导航
- `photos/research-02.png`：Geophysical field matching / 地球物理场匹配
- `photos/research-03.png`：Multi-source fusion / 多源融合导航

推荐使用接近 `16:10` 的横向 JPG 图片。按照文件名放进 `photos` 文件夹后，占位框会自动替换为实际图片，不需要修改 HTML。

每篇论文下方已经提供可点击的 `DOI` 或 `Paper URL` 外部链接。以后更新网址时，在 `index.html` 找到相应论文，只修改 `href="..."` 引号中的地址即可。

### 调整论文、教育经历和荣誉的行距

在 `homepage_settings.css` 中修改：

```css
--selected-pub-line-height: 1.34;  /* 代表作文字行距 */
--selected-pub-item-spacing: 20px; /* 每篇代表作的上下留白 */
--education-line-height: 1.38;     /* 教育经历行距 */
--education-item-spacing: 24px;    /* 教育经历条目间距 */
--honor-line-height: 1.38;         /* 荣誉文字行距 */
--honor-item-spacing: 12px;        /* 荣誉条目间距 */
```

数值越小，排版越紧凑。

After pushing to GitHub, enable GitHub Pages from **Settings -> Pages** and choose:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`
