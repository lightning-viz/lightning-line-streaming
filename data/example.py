from lightning import Lightning
from numpy import random

lgn = Lightning()

series = random.randn(5,10)

viz = lgn.linestreaming(series)

for _ in range(100):
	viz.append(random.randn(5, 1))