export default {
	data() {
		return {}
	},
	methods: {
		toast(title, option = {}) {
			uni.showToast({
				title: title,
				icon: option.icon ||
					'none', //success 显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 loading 显示加载图标，此时 title 文本最多显示 7 个汉字长度。none 不显示图标，此时 title 文本在小程序最多可显示两行，App仅支持单行显示。
				image: option.image || '', //自定义图标的本地路径
				mask: option.mask || false, //是否显示透明蒙层，防止触摸穿透，默认：false
				duration: option.duration || 1500, //提示的延迟时间，单位毫秒，默认：1500 
				position: option.position ||
					'center', //纯文本轻提示显示位置，填写有效值后只有 title 属性生效， 有效值详见下方说明。top:居上显示 center:居中显示 bottom:居底显示
			})
		},
		/** 生成随机字符串 
		 * @param {int} len 长度
		 * @param {String} type 类型
		 * @param {String} character  自定义特殊符号
		 **/
		randString(len, type, character = '') {
			var chars = '';
			len = len || 32; //默认为32位
			type = type || 'n'; //默认为纯数字
			if (type == 'n') {
				chars = '0123456789';
			} //纯数字
			if (type == 'c') {
				chars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
			} //纯大写字母
			if (type == 'l') {
				chars = 'qwertyuiopasdfghjklzxcvbnm';
			} //纯小写字母
			if (type == 'nc') {
				chars = 'qw0er1rt2ty3umi4onp5abs6dvf7gch8jkl9zx';
			} //数字加小写字母
			if (type == 'nl') {
				chars = 'QAZ0WSX1EDC2RFV3TGB4YHN5UJM6IK7OL8P9';
			} //数字加大写字母
			if (type == 'cl') {
				chars = 'qZwXeCrVtByNuMiLoKpJzHxGcFvDbSnAmQlWkEjRhTgYfUdIsOaP';
			} //大小写字母混合
			if (type == 'ncl') {
				chars = 'qZw1XeC0rVtB2yNu4MiL5oKp6JzH7xGc8FvD9bSnAmQlWkEjRhTgYfUdIsOaP';
			} //大小写字母混合
			if (character) {
				chars = chars + character;
			} //特殊符号
			var maxLen = chars.length;
			var str = '';
			for (var i = 0; i < len; i++) {
				str += chars.charAt(Math.floor(Math.random() * maxLen));
			}
			return str;
		},
		/**
		 * @param {String}  页面路径
		 * @param {Boolen}  是否需要登录 true：需要登录 false：无需登录  默认：false  
		 * */
		navTo(url, param, needLogin = false) {
			if (needLogin && !uni.getStorageSync("userInfo")) {
				url = "/pages/login/login";
			}
			uni.navigateTo({
				url: url + '?obj=' + JSON.stringify(param)
			})
		},
		/**
		 * 格式化时间戳 Y-m-d H:i:s
		 * @param {String} format Y-m-d H:i:s
		 * @param {String} timestamp 时间戳   
		 * @return {String}
		 */
		dateFormat(format, timeStamp) {
			//10位时间戳需要乘以1000，13位时间戳不需要
			if ('' + timeStamp.length <= 10) {
				timeStamp = +timeStamp * 1000;
			} else {
				timeStamp = +timeStamp;
			}
			let _date = new Date(timeStamp),
				Y = _date.getFullYear(),
				m = _date.getMonth() + 1,
				d = _date.getDate(),
				H = _date.getHours(),
				i = _date.getMinutes(),
				s = _date.getSeconds();

			m = m < 10 ? '0' + m : m;
			d = d < 10 ? '0' + d : d;
			H = H < 10 ? '0' + H : H;
			i = i < 10 ? '0' + i : i;
			s = s < 10 ? '0' + s : s;

			return format.replace(/[YmdHis]/g, key => {
				return {
					Y,
					m,
					d,
					H,
					i,
					s
				} [key];
			});
		},
		//生成随机字符串
		nonstr(len) {
			len = len || 32;
			var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
			var maxPos = $chars.length;
			var nonstr = '';
			for (i = 0; i < len; i++) {
				nonstr += $chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return nonstr;
		},
		checkStr(str, type) {
			switch (type) {
				case 'mobile': //手机号码
					return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
				case 'tel': //座机
					return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
				case 'card': //身份证
					return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
				case 'mobileCode': //6位数字验证码
					return /^[0-9]{6}$/.test(str)
				case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
					return /^([a-zA-Z0-9_]){6,18}$/.test(str)
				case 'payPwd': //支付密码 6位纯数字
					return /^[0-9]{6}$/.test(str)
				case 'postal': //邮政编码
					return /[1-9]\d{5}(?!\d)/.test(str);
				case 'QQ': //QQ号
					return /^[1-9][0-9]{4,9}$/.test(str);
				case 'email': //邮箱
					return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
				case 'money': //金额(小数点2位)
					return /^\d*(?:\.\d{0,2})?$/.test(str);
				case 'URL': //网址
					return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
						str)
				case 'IP': //IP
					return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
				case 'date': //日期时间
					return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
						/^(\d{4})\-(\d{2})\-(\d{2})$/
						.test(str)
				case 'number': //数字
					return /^[0-9]$/.test(str);
				case 'english': //英文
					return /^[a-zA-Z]+$/.test(str);
				case 'chinese': //中文
					return /^[\\u4E00-\\u9FA5]+$/.test(str);
				case 'lower': //小写
					return /^[a-z]+$/.test(str);
				case 'upper': //大写
					return /^[A-Z]+$/.test(str);
				case 'HTML': //HTML标记
					return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
				default:
					return true;
			}
		},
		//检测用户是否已经登录
		checkLogin() {
			var userInfo = uni.getStorageSync('userInfo');
			if (userInfo) {
				return true;
			} else {
				return false;
			}
		},
		//异步获取用户信息
		async getUserInfo() {
			if (this.checkLogin()) {
				//如果已经登录了才会去走获取用户信息的接口去请求最新的用户信息
				await this.$http.post('login/userinfo', {
					loading: 'hide',
				}).then((res) => {
					if (res.data.code != -2) {
						//用户状态正常则更新vuex的状态，确保跟用户的信息是最新的
						uni.setStorageSync('userInfo', res.data.data);
						this.login(res.data.data);
					}
				});
			} else {
				// console.log('用户未登录');
			}
		}
	},
}
