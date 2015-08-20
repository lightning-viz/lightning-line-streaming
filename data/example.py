from lightning import Lightning
from numpy import random

lgn = Lightning()

series = random.randn(5,10)

viz = lgn.linestreaming(init)

for _ in range(100):
	series = random.randn(5, 1)
	viz.append(series)