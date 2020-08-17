import indexConfig from './index.config.js'
const PATH = indexConfig.assetsPath;
/*
 * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
 * 页面使用：this.$mAssetsPath.grid_1
 * CSS背景：应尽量使用:style="" 行内样式设置背景图
 * PATH说明：本地路径或者服务器路径
 *
 * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
 *
 * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
 */

export default {
	// 摄像头图片
	monitorImg: PATH + '/index/grid/record.png',
	// 摄像头右侧图片
	monitorRightImg: PATH + '/摄像头 (1).png',
	// 默认头像
	headImg: PATH + '/missing-face.png',

	// 出错填充图片
	errorImage: PATH + '/errorImage.jpg',

	// 品牌logo
	logo: PATH + '/logo.png',

	// 商城新闻
	newsBg: PATH + '/news.png',

	// 商城新闻
	userBg: PATH + '/user-bg.jpg',

	// vip北京
	vipCardBg: PATH + '/vip-card-bg.png',

	// 弧形背景
	arc: PATH + '/arc.png',

	// 500
	noNetWorkImg: PATH + '/noNetWork.png',

	// 404
	notFoundImg: PATH + '/notFound.png'
}