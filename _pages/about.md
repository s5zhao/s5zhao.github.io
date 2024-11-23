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

Now I am a fifth-year PhD student in [School of Automation](https://ac.bit.edu.cn/), [Beijing Institute of Technology](https://www.bit.edu.cn/) (北京理工大学自动化学院). I graduated from [School of XuTeli](https://xuteli.bit.edu.cn/), Beijing Institute of Technology (北京理工大学徐特立学院) with a bachelor’s degree in 2020.

I am very fortunate to be advised by [Prof. Zhihong Deng](https://ac.bit.edu.cn/szdw/jsml/dhzdykzyjs1/cfe3a3db284640d28accd1199642f810.htm) of Navigation, Guidance and Control Lab from School of Automation, Beijing Institute of Technology.

My research interest includes strapdown inertial navigation system, integrated navigation, information fusion, terrain matching navigation and gravity matching navigation. 

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2024.10*: &nbsp;🎉🎉 Won the National Scholarship for Ph.D students (ranked 1st in School of Automation)
- *2024.08*: &nbsp;🎉🎉 One paper is accepted by IEEE TMECH.


# 📝 Publications 

🎙 **<font color=blue size=3>Journal or transaction papers:</font>**

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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE JSEN 2024</div><img src='images/IEEE-JSEN3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Gravity-Aided Navigation Matching Algorithm Based on Triangulation](https://ieeexplore.ieee.org/document/10666986)

Wang Y, Deng Z, Zhang P, Wang B, **Zhao S**.

***IEEE Sensors Journal***

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=amGtFUIAAAAJ&citation_for_view=amGtFUIAAAAJ:_FxGoFyzp5QC) <strong><span class='show_paper_citations' data='amGtFUIAAAAJ:_FxGoFyzp5QC'></span></strong>
- A new gravity matching algorithm based on the computational geometry “plane-line-point” model is proposed which can reduce the error of traditional filtering algorithms in processing nonlinear features.
</div>
</div>


🎙 **<font color=blue size=3>Conference papers:</font>**

- 基于回溯导航策略的重力匹配方法. **Zhao S**, Pang X, Deng Z, *2022中国惯性技术研讨会*, 2022, 大连.

- The analysis of influencing factors on geophysical field matching. **Zhao S**, Zhang W, Wang Y, Deng Z, 2024 International Conference on Guidance, Navigation and Control (ICGNC), 2024. (**EI**)

- [An improved ICCP gravity matching algorithm based on Mahalanobis distance](https://ieeexplore.ieee.org/document/9550017). Wang Y, Deng Z, Zhang W, **Zhao S**, 2021 40th Chinese Control Conference (CCC), 2021. (**EI**)

- Research on Polar Navigation Problem of North-Seeking Strapdown Inertial Navigation System. Chen X, Jiao Z, **Zhao S**, Deng Z, 2024 International Conference on Guidance, Navigation and Control (ICGNC), 2024. (**EI**)

- Bathymetric SLAM Approach Using Multibeam Sonar Toward Polar Region. Jiao Z, Chen X, **Zhao S**, Deng Z, 2024 International Conference on Guidance, Navigation and Control (ICGNC), 2024. (**EI**)

- The method for selecting adaptation zones of terrain matching based on Arctic seabed terrain features. Wang Q, Gong X, Bai X, Deng Z, **Zhao S**. 2024 International Conference on Guidance, Navigation and Control (ICGNC), 2024. (**EI**)

# 📚 Patents

CN202110545814.3 (3rd), CN202311811811.5 (2nd), CN202311694509.6 (3rd), CN202110545816.2 (3rd), CN202110838109.2 (3rd), CN202211221726.9 (4th), CN202210856742.9 (2nd), CN201911385476.0 (4th).

# 🎖 Honors and Awards

- *2024.11*,  National Scholarship for Ph.D students
- *2022.08*,  Technical Invention Award of Chinese Society of Inertial Technology (**First Prize**)
- *2022.01*, APMCM Mathematical Modeling (**First Prize, TOP 4**)
- *2021.12*, Huawei Cup Mathematical Modeling (Third Prize)
- *2021.06*, MathorCup Mathematical Modeling (Third Prize)
- *2020.06*, Outstanding graduate of School of Xuteli 
- *2020.06*, The Artificial Intelligence Challenge of Robomaster, perception (Excellence Award)
- *2020.07*, NXP National College Student Smart Car Competition (Second Prize in North China)
- *2019.01*, China Undergraduate Mathematical Contest in Modeling (Second Prize in Beijing)


# 📖 Educations
- *2016.08 - 2020.09*, B. E. in [School of Xuteli](https://xuteli.bit.edu.cn/), Beijing Institute of Technology, supervised by [Prof. Xuan Xiao](https://ac.bit.edu.cn/szdw/jsml/dzjsjxyjs1/8b1a8d002e9b4f58b7957da1148e6555.htm).
- *2020.09 - now*, Ph. D. student in [School of Automation](https://ac.bit.edu.cn/), Beijing Institute of Technology, supervised by [Prof. Zhihong Deng](https://ac.bit.edu.cn/szdw/jsml/dhzdykzyjs1/cfe3a3db284640d28accd1199642f810.htm).
