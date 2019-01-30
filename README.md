# mini-chart
小程序图表库

## line 线图

### API

#### `categories`: Array<String>

x坐标列表，等同全部数据的宽度。

#### `series`: Array<Object>

线的数据，可以为多条线。如果只有一条线，整体也应该是个数组。

* data: Array<int> 线的数据，一般等同`categories`的长度，空缺则线段不连接不绘。
* type: String 一条线的标识名称，多条时确保不冲突。
* style: String 线的种类，可以取值`dash`虚线和`smooth`曲线，默认直接。
* color: String 线的颜色。
* point: Object 是否绘制圆点，可以配置`size`控制点半径、`stroke`点颜色、`lineWidth`点边线宽。

#### `xAxis`: Object

x坐标轴的配置。

* tickCount: int 显示的坐标个数。
* label: Function<text:String, index:int, total:int> 渲染坐标时的回调，一般用作首尾对齐。
* 更多设置详见F2。

#### `yAxis`: Object

y坐标轴的配置，同`xAxis`。

#### `legend`: Object

整体图例设置，默认有。如果不想显示可设置为空。

* position: String 显示位置，可选`top`、`bottom`、`left`、`right`。
* offsetX: int 水平偏移。
* offsetY: int 垂直偏移。
