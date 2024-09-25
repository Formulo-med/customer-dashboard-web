export class Cookies{
	constructor(document){
		// const defaultSettings = {
		// 	path: '/',
		// 	domain: '',
		// 	expires: '',
		// 	secure: false,
		// 	sameSite: 'Lax',
		// };
		this.document = document;
		this.settings = this.stringifySettings({})
		this.cookies = this.fetchCookies()
	}

	stringifySettings(settings){
		return Object.entries(settings).reduce((acc, [key, value]) => {
			if (key.toLowerCase() === 'secure' || key.toLowerCase() === 'httponly') 
				acc += `${key}; `
			else{
				acc += `${key}=${value}; `;
			}
			return acc;
		}, '');
	}

	fetchCookies() {
		return this.document.cookie.split('; ').reduce((acc, cookie) => {
			const [key, value] = cookie.split('=');
			acc[key] = decodeURIComponent(value);
			return acc;
		}, {});
	}

	getCookie(key){
		return this.cookies[key] || null;
	}

	setCookie(key, value, cookieSpecificSettings={}){
		const newCookie = `${key}=${value}; ${this.stringifySettings(cookieSpecificSettings) || this.settings}`;
		this.document.cookie = newCookie;
		this.cookies[key] = value;
	}

	removeCookie(key){
		this.setCookie(key, '', { expires: 'Thu, 01 Jan 1970 00:00:00 GMT' });
		delete this.cookies[key];
	}


}

export const cookiesPlugin =()=>{
	return {
		install(app){
			const cookies = new Cookies(document);
			app.config.globalProperties.$cookies = cookies;
		}
	}
}