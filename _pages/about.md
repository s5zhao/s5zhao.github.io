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

🎙 **Journal Paper**

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE/ASME TMECH 2024</div><img src='images/IEEE-TMECH1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Terrain Matching Algorithm Based on Trajectory Reconstruction and Correlation Analysis of Sliding Measurement Sequence](https://ieeexplore.ieee.org/document/10632789)

**Zhao S**, Deng Z, Wang Q, Zhang W, Gong X.

***IEEE/ASME Transactions on Mechatronics***

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:ufrVoPGSRksC) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:ufrVoPGSRksC'></span></strong>
- The error of inertial navigation position sequence is reduced.
- The probability of false peak and pseudo-peak is reduced.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TIM 2024</div><img src='images/IEEE-TIM1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Gravity Matching Algorithm Based on Backtracking for Small Range Adaptation Area](https://ieeexplore.ieee.org/document/10381855)

**Zhao S**, Xiao X, Pang X, Wang Y, Deng Z.

***IEEE Transactions on Instrumentation and Measurement***

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:WF5omc3nYNoC) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:WF5omc3nYNoC'></span></strong>
- Avoid non-convergence of filter algorithm in small adaptation area. 
- To some extent, the effect of matching algorithm on the initial position error can be reduced.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE JSEN 2023</div><img src='images/IEEE-JSEN1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[An Improved Particle Filter Based on Gravity Measurement Feature in Gravity-Aided Inertial Navigation System](https://ieeexplore.ieee.org/document/9979757)

**Zhao S**, Xiao X, Wang Y, Deng Z.

***IEEE Sensors Journal***

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:eQOLeE2rZwMC) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:eQOLeE2rZwMC'></span></strong>
- The topological relationship between contour line and trajectory is studied, and a new method of position acquisition is found.
- A new concept called direction measurement using the heading angle of INS is proposed.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE JSEN 2023</div><img src='images/IEEE-JSEN2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Gravity Matching Algorithm Based on Correlation Filter](https://ieeexplore.ieee.org/document/9997486)

**Zhao S**, Xiao X, Deng Z, Shi L.

***IEEE Sensors Journal***

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:W7OEmFMy1HYC) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:W7OEmFMy1HYC'></span></strong>
- Correlation filter is used as the principle of correlation between measurements and maps.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IET SP 2021</div><img src='images/IET-SP.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Global Dynamic Path‐Planning Algorithm in Gravity‐Aided Inertial Navigation System](https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/sil2.12056)

**Zhao S**, Shi L, Zhang W, Deng Z.

***IET Signal Processing***

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:YsMSGLbcyi4C) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:YsMSGLbcyi4C'></span></strong>
- A* and DWA are used to deal with path planning in gravity matching navigation.
</div>
</div>

- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE JSEN 2024</div> [A Gravity-Aided Navigation Matching Algorithm Based on Triangulation](https://ieeexplore.ieee.org/document/10666986), Wang Y, Deng Z, Zhang P, Wang B, **Zhao S**.
</div>
</div>

🎙 **Conference Paper**

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