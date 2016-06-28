import org.viz.lightning._
import scala.util.Random

val lgn = Lightning()

var series = Array.fill(5)(Array.fill(10)(Random.nextFloat()))

val viz = lgn.lineStreaming(series)

Range(0, 100).foreach { _ =>
	series = Array.fill(5)(Array.fill(1)(Random.nextFloat()))
	lgn.linestreaming(series=series, viz=viz)
}
