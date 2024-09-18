<template>
	<div class="mx-0">
		<div>
			<IconSection name="footer-top" />
		</div>
		<div class="footer py-2 px-4">
			<div class="row">
				<div class="col-md-4 col-lg-3 col-12 p-3">
					<div class="row text-center">
						<router-link to="/">
							<Logo />
						</router-link>
					</div>
					<div class="d-flex justify-content-center gap-3">
						<IconSection name="facebook" />
						<IconSection name="instagram" />
						<IconSection name="linkedin" />
					</div>
				</div>
				<div class="col-md-4 col-lg-2 col-5 p-3">
					<h5>COMPANY</h5>
					<div>
						<a
							href="/contact-us"
							class="d-block p-1 fs-5 link-dark"
						>
							Contact Us
						</a>
						<a
							href="/faq"
							class="d-block p-1 fs-5 link-dark"
						>
							FAQs
						</a>
						<a
							href="/work-with-us"
							class="d-block p-1 fs-5 link-dark"
						>
							Work With Us
						</a>
					</div>
				</div>
				<div class="col-md-4 col-lg-2 col-7 p-3">
					<h5>ABOUT</h5>
					<div>
						<a
							href="/terms-of-use"
							target="_blank"
							class="d-block p-1 fs-5 link-dark"
						>
							Terms & Conditions
						</a>
						<a
							href="/privacy-policy"
							target="_blank"
							class="d-block p-1 fs-5 link-dark"
						>
							Privacy Policy
						</a>
						<a
							href="/refund-exchange-policy"
							target="_blank"
							class="d-block p-1 fs-5 link-dark"
						>
							Refund & Exchange Policy
						</a>
					</div>
				</div>
				<div class="col-md-12 col-lg-5 col-12 row p-3">
					<div class="col-sm-8 col-8 d-flex align-items-center p-2">
						<input
							class="w-100 p-2 border border-success h6"
							type="text"
							placeholder="Enter your email"
						>
					</div>

					<div class="col-sm-4 col-4 d-flex align-items-center p-2">
						<button 
							class="rounded-5 py-2 py-lg-2 px-lg-3 px-3 btn btn-warning bold h6" 
							type="button"
						>
							Subscribe
						</button>
					</div>

					<div class="col-sm-12 p-2">
						<h6>Join our mailing list to get the latest news</h6>
					</div>
				</div>
			</div>
			<div class="row border-1 border-top p-1">
				<div class="col text-center">
					<h6>Copyright © 2024 Formulo</h6>
					<small>Version: {{ appVersion }}</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconSection from '@/common/svgs/icons.vue'
import Logo from '@/common/components/Logo.vue'
export default {
	name: "FooterPage",
	components:{
		IconSection,
		Logo
	},
	data() {
		return {
			appVersion: "v1"
		}
	}

};
</script>

<style>
.footer {
	background-color: #fffbf2;
}


.text {
	color: #333333;
}
</style>