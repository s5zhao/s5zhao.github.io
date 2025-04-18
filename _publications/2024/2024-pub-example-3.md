---
title:          "A Gravity-Aided Navigation Matching Algorithm Based on Triangulation"
date:           2024-09-05 00:01:00 +0800
selected:       false
pub:            "IEEE Sensors Journal (IEEE JSEN)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-info">Journal</span>'
pub_date:       "2024"

abstract: >-
  Gravity-aided inertial navigation system (GAINS) is one of the key technologies in underwater navigation. The traditional gravity background field is usually composed of gravity anomaly values measured by gravity sensors, which are in the form of a grid and hide the rich local features within the local field. This article uses the Mercator projection and Delaunay triangulation method to convert the traditional gravity field structure into a triangular model. This new gravity triangulation model (GTM) divides the entire field into numerous small triangles, each representing more localized gravity spatial characteristics. Then a new gravity-matching algorithm based on the computational geometry “plane-line-point” model is proposed which can reduce the error of traditional filtering algorithms in processing nonlinear features. The optimal position estimation of the underwater vehicle is obtained through rough matching of triangular surfaces, secondary matching of intersection lines, precise matching of track points, and spatial affine transformation. The sea experiments demonstrate that after working for about 6 h, the mean position error of the proposed algorithm is 915.85 m, and the standard deviation of the position error is 488.3542 m, reaching 0.26 grids, which is 69.38% higher than the accuracy of the inertial navigation system (INS) and 56.18% higher than the existing iterative closest contour point (ICCP) algorithm, which effectively improves the positioning accuracy of underwater navigation.
cover:          /assets/images/pubs/IEEE-JSEN3.png
authors:
  - Yu Wang
  - Zhihong Deng#
  - Peiyuan Zhang
  - Bo Wang
  - Shengwu Zhao

links:
  Paper: https://ieeexplore.ieee.org/document/10666986
---
