---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a fifth-year PhD student from [School of Automation](https://ac.bit.edu.cn/), [Beijing Institute of Technology](https://www.bit.edu.cn/).
I am very fortunate to be advised by [Prof. Zhihong Deng](https://ac.bit.edu.cn/szdw/jsml/dhzdykzyjs1/cfe3a3db284640d28accd1199642f810.htm) of Navigation, Guidance and Control Lab from School of Automation, Beijing Institute of Technology.

My research interest includes strapdown inertial navigation system, integrated navigation, information fusion, terrain matching navigation and gravity matching navigation. 

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2022.02*: &nbsp;🎉🎉 One paper is accepted by IEEE TMECH.


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TMECH</div><img src='images/IEEE-TMECH1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Terrain Matching Algorithm Based on Trajectory Reconstruction and Correlation Analysis of Sliding Measurement Sequence](https://ieeexplore.ieee.org/document/10632789)

**Zhao S**, Deng Z, Wang Q, Zhang W, Gong X.

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:ufrVoPGSRksC) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:ufrVoPGSRksC'></span></strong>
- Single-point matching algorithm (point mass filter or particle filter) only uses the current time measurement to calculate the likelihood, which is prone to pseudopeak and false peak. In order to solve the problem, this article introduces the sequence correlation analysis into the single point matching algorithm, and uses the sliding measurement sequence to estimate recursively. First, a position sequence estimation method based on trajectory reconstruction is proposed, which calculates the new position sequence by the relationship between INS displacement and heading angle, instead of the direct translation of INS trajectory method in traditional algorithms. After that, the likelihood of the candidate point is calculated by the correlation analysis method using the corresponding sliding measurement sequence at the current time, and a more accurate position estimation is obtained after the measurement update. Simulation and experiments show that the position sequence obtained by the proposed method based on trajectory reconstruction is more accurate than that obtained by the direct translation inertial navigation method. Compared with only using single time measurement information, the likelihood calculation method based on correlation analysis of sliding measurement sequence can significantly reduce pseudopeak and false peak, and the positioning accuracy of terrain matching is improved.
</div>
</div>



# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.