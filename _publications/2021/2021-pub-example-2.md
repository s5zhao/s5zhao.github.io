---
title:          "An Improved ICCP Gravity Matching Algorithm Based on Mahalanobis Distance"
date:           2021-06-28 00:01:00 +0800
selected:       False
pub:            "2021 40th Chinese Control Conference (CCC)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-secondary">Conference</span>'
pub_date:       "2021"

abstract: >-
  Consider the problems of low accuracy and poor real-time performance in traditional ICCP gravity matching algorithm, this paper proposes an improved ICCP gravity matching algorithm based on Mahalanobis distance. Mahalanobis distance, instead of Euclidean distance, is applied to improve the objective function of rigid transformation iteration in traditional ICCP algorithm, which can eliminate the interference of variable correlation. At the same time, a new searching strategy based on strip search area is proposed. With the current sampling point as the center, we use the gravimeter measurement error variance to determine the width of the strip region along the normal direction of the contour, and use the Mahalanobis distance objective function value obtained in the iterative process as the length of the strip area along the direction of the contour. Therefore, this searching strategy can gradually narrow the search range of the closest contour point in the ICCP algorithm, and reduce the calculation amount of the algorithm. The simulation results show that: Compared with the traditional ICCP algorithm, the mean value of the position error of the improved algorithm is reduced by 26.89%, and the standard deviation is reduced by 58.53%, which greatly improves the accuracy of the gravity matching algorithm. And the average running time of the improved algorithm is also 42.1% shorter than the traditional ICCP algorithm, so the real-time performance is improved. The improved ICCP gravity matching algorithm based on Mahalanobis distance reduces the running time of the algorithm, improves real-time performance and positioning accuracy, and further improves the practicability of gravity matching for underwater vehicles.
# cover:          /assets/images/pubs/IET-SP.png
authors:
  - Yu Wang
  - Zhihong Deng#
  - Wenzhe Zhang
  - Shengwu Zhao

links:
  Paper: https://ieeexplore.ieee.org/document/9550017
---
