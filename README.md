# mini-chart
小程序图表库

## 使用方法（line举例）

#### 结构一览

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*UMFlQqDZLwsAAAAAAAAAAABjARQnAQ)

#### json引入组件

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*tNvnT71PHJIAAAAAAAAAAABjARQnAQ)

#### axml使用组件

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*q1AbSbiOKp4AAAAAAAAAAABjARQnAQ)

#### js传入数据

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*W2EmQLMf3tQAAAAAAAAAAABjARQnAQ)

## line 线图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*AN4SRahZ23oAAAAAAAAAAABjARQnAQ)

### API

#### `categories`: Array\<String>

x坐标列表，等同全部数据的宽度。

#### `series`: Array\<Object>

线的数据，可以为多条线。如果只有一条线，整体也应该是个数组。

* data: Array\<int> 线的数据，一般等同`categories`的长度，空缺则线段不连接不绘。
* type: String 一条线的标识名称，多条时确保不冲突。
* style: String 线的种类，可以取值`dash`虚线和`smooth`曲线，默认直接。
* color: String 线的颜色。
* point: Object 是否绘制圆点，可以配置`size`控制点半径、`stroke`点颜色、`lineWidth`点边线宽。

#### `padding`: int/Array\<int>

图形内边距，同css。以下所有图形均有。

#### `appendPadding`: int/Array\<int>

图表画布区域四边的预留边距，即我们会在`padding`的基础上，为四边再加上`appendPadding`的数值，默认为`15`。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* htAlign: boolean 是否首尾缩进对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

## area 区域图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*vxFXT6RUqeQAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*lg-WT5X0WMcAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*mbA2S7xIHyAAAAAAAAAAAABjARQnAQ)

#### `categories`: Array\<String>

x坐标列表，等同全部数据的宽度。

#### `series`: Array\<Object>

区域的数据，可以为多个区域。如果只有一个区域，整体也应该是个数组。

* data: Array\<int> 区域的数据，一般等同`categories`的长度，空缺则区域不连接不绘。
* type: String 一个区域的标识名称，多个时确保不冲突。
* style: String 区域边线的种类，可以取值`dash`虚线和`smooth`曲线，默认直接。
* color: String 区域和边线的颜色。
* point: Object 是否绘制圆点，可以配置`size`控制点半径、`stroke`点颜色、`lineWidth`点边线宽。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* htAlign: boolean 是否首尾缩进对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `adjust`: Object/String

* type: String 层叠，取值`stack`时分组，取值`dodge`时多个区域在y方向上层叠。 
* marginRatio: Number 分组间柱子的间距

## column 柱状图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*gx9YTZvQGykAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*xLy9T4pFDtUAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*yJkRT7Q8l2YAAAAAAAAAAABjARQnAQ)

#### `categories`: Array\<String>

x坐标列表，等同全部数据的宽度。

#### `series`: Array\<Object>

柱形的数据，可以为多类柱形。如果只有一类，整体也应该是个数组。

#### `series`: Array\<Object>

* data: Array\<int> 区域的数据，一般等同`categories`的长度，空缺则区域不连接不绘。
* type: String 一类柱形的标识名称，多类时确保不冲突。
* color: String 柱形的颜色。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* htAlign: boolean 是否首尾缩进对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `adjust`: Object/String

* type: String 层叠，取值`stack`时分组，取值`dodge`时多个区域在y方向上层叠。 
* marginRatio: Number 分组间柱子的间距

#### `coord`: Object

坐标系设置

* `transposed`: Boolean 是否转换，当为`true`时柱状图会横置x/y轴，变成条形图。

## bar 条形图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*xmuUSZGAHEwAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*vVZTRZbiG7IAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*hWUBSZBo204AAAAAAAAAAABjARQnAQ)

同上。

#### `coord`: Object

坐标系设置

* `transposed`: Boolean 是否转换，当为`true`时柱状图会横置x/y轴，变成条形图。

## radar 雷达图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*9VM4SIYvSDUAAAAAAAAAAABjARQnAQ)


#### `categories`: Array\<String>

x坐标列表，等同全部数据的宽度。

#### `series`: Array\<Object>

柱形的数据，可以为多类柱形。如果只有一类，整体也应该是个数组。

#### `series`: Array\<Object>

* data: Array\<int> 区域的数据，一般等同`categories`的长度，空缺则区域不连接不绘。
* type: String 一类柱形的标识名称，多类时确保不冲突。
* style: String 区域边线的种类，可以取值`dash`虚线和`smooth`曲线，默认直接。
* color: String 区域和边线的颜色。
* point: Object 是否绘制圆点，可以配置`size`控制点半径、`stroke`点颜色、`lineWidth`点边线宽。

#### `yAxis`: Object

y坐标轴的配置。

* tickCount: int 显示的坐标个数。
* 更多设置详见F2。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

## pie 饼图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*92j1R5XgWRoAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*yorITpTRvg8AAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*ooUjRJxHlkYAAAAAAAAAAABjARQnAQ)

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*ohEpSJMkX8QAAAAAAAAAAABjARQnAQ)

#### `series`: Array\<Object>

一维。

* data: int 饼的数据量。
* type: String 一个饼形的标识名称，多个时确保不冲突。
* color: String 饼形的颜色。
* key: String 当嵌套环图时使用不用的key标识不同的环。

#### `radius`: Number

饼的缩放大小，默认1。

#### `innerRadius`: Number

饼的内环缩放大小，默认0。当大于0时饼图呈现环状。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `style`: Objet

饼之间线的样式。

* lineWidth: int 线宽。
* stroke: String 线色。

#### `guide`: Object

* line: Object 辅助线配置。
* text: Object 辅助文字配置。

#### `pieLabel`: boolean

是否展示标签示例文字。

#### `activeShape`: boolean

饼图是否有点击效果。

#### `sidePadding`: int

标签文字和饼图之间的padding，越大越近，越小越远。

## rose 玫瑰图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*nWZ4S7j-fQsAAAAAAAAAAABjARQnAQ)

#### `series`: Array\<Object>

一维。

* data: int 饼的数据量。
* type: String 一个饼形的标识名称，多个时确保不冲突。
* color: String 饼形的颜色。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

## scatter 散点图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*JSrHQ7rYY7sAAAAAAAAAAABjARQnAQ)

#### `series`: Array\<Object>

点的数据，可以为多组点。如果只有一组点，整体也应该是个数组。

* data: Array\<Object> 点的数据。
  * key: Number x坐标值。
  * value: Number y坐标值。
* type: String 一组点的标识名称，多组时确保不冲突。
* color: String 点的颜色。
* size: Number 点大小。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* htAlign: boolean 是否首尾缩进对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `style`: Objet

点的样式。

* fillOpacity: Number 透明度。

#### `legend`: Object

整体图例设置，默认空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

#### `tooltip`: Object

触摸提示设置，默认空。

* showTitle: boolean 是否展示标题，默认不展示。
* showCrosshairs: 是否显示辅助线，点图、路径图、线图、面积图默认展示。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
* 更多设置详见F2。

## k 股票k线图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*SG8_SKBmoG0AAAAAAAAAAABjARQnAQ)

#### `series`: Array\<Object>

一维。

* time: String 时间。
* start: Number 开盘价。
* end: Number 收盘价。
* max: Number 最高价。
* min: Number 最低价。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* htAlign: boolean 是否首尾缩进对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `guide`: Object

* line: Object 辅助线配置。
* text: Object 辅助文字配置。

## timeshare 分时图

![avatar](https://gw.alipayobjects.com/mdn/wealth_pro/afts/img/A*Td-MRac7nVoAAAAAAAAAAABjARQnAQ)

#### `series`: Array\<Object>

一维。

* time: String 时间。
* price: Number 价格。
* volume: Number 成交量。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* htAlign: boolean 是否首尾缩进对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `guide`: Object

* line: Object 辅助线配置。
* text: Object 辅助文字配置。

