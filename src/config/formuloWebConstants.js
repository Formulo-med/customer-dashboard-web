export default class FormuloWebConstants{

	static get blueColorHex(){
		return getComputedStyle(document.documentElement).getPropertyValue("--blue-color-variant")
	}

	static get yellowSecondaryColorHex(){
		return getComputedStyle(document.documentElement).getPropertyValue("--yellow-secondary-color-variant")
	}

	static get primaryYellowColorHex(){
		return getComputedStyle(document.documentElement).getPropertyValue("--yellow-primary-color-variant")
	}

	static get customMdMaxWidthBreakpoint(){
		return getComputedStyle(document.documentElement).getPropertyValue("--custom-md-breakpoint-max-width")
	}

	static get customLgMinWidthBreakpoint(){
		return getComputedStyle(document.documentElement).getPropertyValue("--custom-lg-breakpoint-min-width")

	}
}

export const AuthModeEnum = Object.freeze({
	GOOGLE_AUTH: 'g-auth',
	FACEBOOK_AUTH: 'f-auth'
});

export const AuthTypeEnum = Object.freeze({
	SIGN_UP: 'sign-up',
	SIGN_IN: 'sign-in'
});