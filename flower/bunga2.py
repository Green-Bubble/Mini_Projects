import turtle as tur
import colorsys
tur.speed(0)

hue=0.8

for i in range(182):
  col=colorsys.hsv_to_rgb(hue,1,1)
  hue+=0.004
  tur.fillcolor(col)
  tur.begin_fill()
  tur.circle(190-i, 100)
  tur.lt(20)
  tur.lt(80)
  tur.end_fill()
tur.done()