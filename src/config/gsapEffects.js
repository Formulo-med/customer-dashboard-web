import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


gsap.registerEffect({
	name: "fadeIn",
	effect: (targets, config) => {
		return gsap.fromTo(targets,{opacity: 0, y: "10vh"},{scrollTrigger: config.scrollTrigger,  stagger: config.stagger, duration: config.duration, opacity: 1, y: "0vh"});
	},
	defaults: {duration: 0, scrollTrigger: {}, stagger: 0},
	extendTimeline: true,
})

gsap.registerEffect({
	name: "cardScaleUp",
	effect: (targets, config) => {
		return gsap.to(targets, { scale: config.scale, duration: config.duration });
	},
	defaults: {duration: 0.3, scale: 1.02},
	extendTimeline: true,
})

gsap.registerEffect({
	name: "cardScaleDown",
	effect: (targets, config) => {
		return gsap.to(targets, { scale: 1, duration: config.duration });
	},
	defaults: {duration: 0.3},
	extendTimeline: true,
})

export default gsap