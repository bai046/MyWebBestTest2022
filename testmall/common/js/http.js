import JSEncrypt from './jsencrypt.js'
import md5 from './md5.js'
import helper from './helper.js'
export default {
	config: {
		baseUrl: helper.apiurl,
		headers: {},
		dataType: "json",
		responseType: "text"
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options.data.loading) {
			uni.showLoading({
				title: '加载中...'
			});
		}
		return new Promise((resolve, reject) => {
			let _config = null
			options.url = this.config.baseUrl + options.url
			//公钥
			var PUBLIC_KEY =
				'-----BEGIN PUBLIC KEY-----MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA9J9Jesl0+vHuZf/kkK/4fSiHF55aoGMcuGeWSsEurQnHasYUJnqDLS6VozF83o9eR/MFQMfWkJZAlOa7sznmPGNOKhWvd7wGu7qoW75Lo3HIR/Uw6n7WDoeJedEcrQrsy9WtgRV5LeMnIiy++0SMLYPlkvEfjsCrRR72s/HUP2xfQ/WzmgYQDU/27YUictak8S68lkXI5ZL+7OaiiFFDIN8ecT8PTnQ7oZ4sEbxpBVGIxknCR1ldGTHeCp9nNeoo1zcoobXIoHqUtvJErap/QElAfLG9OJW+E61LPSIRGepiMMDCt8hkZkYt7d3i/7qWM7Uxuin5qJb2+8fE1c/R3tl/hV374mRbid3oFVX3vDGNbUSMLcgWR2QHKEcms7eF4iwJT6NxXzCNZ4qA0xcE8RPl5LQviaxDowqij6bsQ9+AgSHru9k3fgB4XAGivZms7CSdb9fnvTWYw8Je+JMGwDXgrRmE9z1MRfndniDvSDNVSL+lM4oEY3DET1AG0XWd9IqeAUR7bNVEr1WPoojvzwuxwLLPZ+8nPwF8zbqoitzcghiepSxRo6toREYRbtK7huZnbrthQvVdLJQSLclC54c99BCxXKhbABxKoFkh5RtqshbJLVnEVol4PFLgym25MfCoPsUEzOBtMogIiEtXes7EzlKstlTvyik2t3ZVKXUCAwEAAQ==-----END PUBLIC KEY-----';
			var min = 0;
			var max = PUBLIC_KEY.length - 50;
			var index = parseInt(Math.random() * (max - min + 1) + min, 10);
			var salt = PUBLIC_KEY.substr(index, 32);
			var timestamp = Math.round(new Date() / 1000);
			var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
			var maxPos = chars.length;
			var nonstr = '';
			for (var i = 0; i < 32; i++) {
				nonstr += chars.charAt(Math.floor(Math.random() * maxPos));
			}
			//公钥截取索引=(真实index+时间戳后6位，后台需按照此规则还原)，截取长度32位
			options.data['index'] = index + parseInt(timestamp.toString().substr(4, 6));
			options.data['timestamp'] = timestamp; //时间戳
			options.data['nonstr'] = nonstr; //随机数
			//如果用户已经登录就把用户的token带上
			var userInfo = uni.getStorageSync("userInfo");
			if (userInfo) {
				options.data['token'] = userInfo.token;
			}
			let str = '';
			for (var p in options.data) {
				str += p + '=' + options.data[p] + '&';
			}
			str += 'cms=Lazycms&salt=' + salt;
			var sign = md5(str).toString().toUpperCase(); //签名
			options.data['sign'] = sign;
			//使用公钥加密 
			var encrypt = new JSEncrypt();
			encrypt.setPublicKey(PUBLIC_KEY);
			var encrypted = encrypt.encrypt(JSON.stringify(options.data)); //加密后的字符串
			options.data = {}; //清空参数 
			options.data['encrypt'] = encrypted; //只把参数加密后的字符串传递过去
			// console.log(sign);    
			// console.log(options.data);
			// console.log(encrypted);
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				if (statusCode === 200) {
					//成功
					resolve(response);
					uni.hideLoading();
				} else {
					//失败
					// reject(response) 
					console.log('ERROR:' + JSON.stringify(response));
					uni.hideLoading();
				}
			}
			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			uni.request(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}
