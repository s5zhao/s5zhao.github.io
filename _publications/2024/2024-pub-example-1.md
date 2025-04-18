---
title:          "Terrain Matching Algorithm Based on Trajectory Reconstruction and Correlation Analysis of Sliding Measurement Sequence"
date:           2024-08-09 00:01:00 +0800
selected:       true
pub:            "IEEE/ASME Transactions on Mechatronics (IEEE TMECH)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-dark">Journal</span>'
pub_date:       "2024"

abstract: >-
  Single-point matching algorithm (point mass filter or particle filter) only uses the current time measurement to calculate the likelihood, which is prone to pseudopeak and false peak. In order to solve the problem, this article introduces the sequence correlation analysis into the single point matching algorithm, and uses the sliding measurement sequence to estimate recursively. First, a position sequence estimation method based on trajectory reconstruction is proposed, which calculates the new position sequence by the relationship between INS displacement and heading angle, instead of the direct translation of INS trajectory method in traditional algorithms. After that, the likelihood of the candidate point is calculated by the correlation analysis method using the corresponding sliding measurement sequence at the current time, and a more accurate position estimation is obtained after the measurement update. Simulation and experiments show that the position sequence obtained by the proposed method based on trajectory reconstruction is more accurate than that obtained by the direct translation inertial navigation method. Compared with only using single time measurement information, the likelihood calculation method based on correlation analysis of sliding measurement sequence can significantly reduce pseudopeak and false peak, and the positioning accuracy of terrain matching is improved.
cover:          /assets/images/pubs/IEEE-TMECH1.png
authors:
  - Shengwu Zhao 
  - Zhihong Deng#
  - Qingzhe Wang
  - Wenzhe Zhang
  - Xun Gong
links:
  Paper: https://ieeexplore.ieee.org/abstract/document/10632789
---
