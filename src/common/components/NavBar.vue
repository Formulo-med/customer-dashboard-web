<template>
	<Transition>
		<nav
			id="navbar-expanded"
			class="navbar navbar-expand-lg me-lg-3  my-4 w-100 bg-white"
		>
			<div class="container-sm px-4">
				<router-link
					to="/"
				>
					<Logo />
				</router-link>
				<router-link to="/">
					<IconSection
						class="d-lg-none"
						name="user"
					/>
				</router-link>
				
				<router-link :to="{ path: '/' }">
					<IconSection
						name="s-bag"
						class="d-lg-none"
					/>
				</router-link>
				<button 
					data-bs-toggle="offcanvas" 
					data-bs-target="#offcanvasNavbarLight" 
					aria-controls="offcanvasNavbarLight"
					class="border-0 d-lg-none bg bg-white"
				>
					<font-awesome-icon 
						:icon="['fas', 'grip-lines']" 
						size="xl"
					/>
				</button>

				<div
					id="offcanvasNavbarLight" 
					class="offcanvas offcanvas-top" 
					tabindex="-1" 
					aria-labelledby="offcanvasNavbarLightLabel"
				>
					<div class="offcanvas-header mt-4 align-items-center">
						<Logo 
							id="offcanvasNavbarLightLabel" 
							class="offcanvas-title" 
						/>
						<button 
							type="button" 
							class="btn-close" 
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>
					<div class="offcanvas-body">
						<ul 
							class="navbar-nav ms-auto gap-4 gap-xl-5" 
							@click="handleNavItemClick" 
						>
							<router-link to="/">
								<li class="mx-2 mx-lg-0 ">
									<a
										class="nav-link active fs-lg-6 fs-4"
										aria-current="page" 
										href="#"
									>Home</a>
								</li>
							</router-link>
							<router-link to="/">
								<li class="mx-2 mx-lg-0 ">
									<a
										class="nav-link active fs-lg-6 fs-4"
										aria-current="page" 
										href="#"
									>Products</a>
								</li>
							</router-link>
							<router-link to="/dashboard">
								<li class="nav-item mx-2 mx-lg-0">
									<a
										class="nav-link active fs-lg-6 fs-4"
										href="#"
									>Dashboard</a>
								</li>
							</router-link>
							<router-link to="/">
								<li class="nav-item mx-2 mx-lg-0">
									<a
										class="nav-link active fs-lg-6 fs-4"
										href="#"
									>History</a>
								</li>
							</router-link>

							<router-link to="/">
								<li class="nav-item mx-2 mx-lg-0">
									<a
										class="nav-link active fs-lg-6 fs-4"
										href="#"
									>Log Out</a>
								</li>
							</router-link>
							
							<li class="nav-item mx-2 mx-lg-0">
								<router-link :to="{ path: '/authentication', query: { tab: 'Sign Up' } }">
									<button
										class="btn btn-block bold btn-warning text-black rounded-4 px-3 col-lg-12 col-sm-5 col-12 fs-lg-6 fs-4"
									>
										Get Consultation
									</button>
								</router-link>
							</li>
							<li class="nav-item mt-2 d-lg-block d-none">
								<router-link :to="{ path: '/cart' }">
									<IconSection name="s-bag" />
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</Transition>

	<Transition>
		<nav
			id="navbar-small"
			class="navbar fixed-top px-1 bg-white"
		>
			<div class="container-sm w-100">
				<div class="col-4">
					<div class="p-2 navbar-brand">
						<Logo :size="'h4'" />
					</div>
				</div>
				<div class="col text-end">
					<router-link :to="{ path: '/authentication', query: { tab: 'Sign Up' } }">
						<button
							class="btn btn-warning text-black rounded-4 p-2 px-sm-4 bold fs-6"
						>
							Get Consultation
						</button>
					</router-link>
					<div class="d-md-inline d-none m-2">
						<router-link :to="{ path: '/cart' }">
							<IconSection
								name="s-bag"
								class="m-3 mx-sm-5"
							/>
						</router-link>
					</div>
				</div>
			</div>
		</nav>
	</Transition>
</template>




<script>
import IconSection from '@/common/svgs/icons.vue'
import Logo from '@/common/components/Logo.vue'
import gsap from '@/config/gsapEffects';
import {Offcanvas} from 'bootstrap'
export default {
	name: "NavBar",
	components: {
		IconSection,
		Logo
	},
	data() {
		return {
			isNavbarExpanded: true,
		};
	},
	mounted(){
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#navbar-expanded",
				start: "800% top",
				scrub: 1
			},
		})
		tl.fromTo("#navbar-small",
			{ opacity: 0, y: "-20vh" },
			{opacity: 1, y: "0vh" })
		
		
		
	},
	methods:{
		toggleNavbar() {
			const offcanvasElement = document.getElementById('offcanvasNavbarLight');
			if (offcanvasElement) {
				const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
				if (bsOffcanvas) {
					bsOffcanvas.hide(); 
				}
				
			}
		},
		handleNavItemClick(event) {
			const target = event.target.closest('a, button') ;
			if (target && !target.classList.contains('dropdown-icon')) {
				this.toggleNavbar();
				
			}
		}
	}
};
</script>

<style>
#offcanvasNavbarLight{
	height: 100vh;
}
.dropdown-menu {
    box-shadow: inset 4px 0 0 0 var(--yellow-primary-color-variant);
}
.dropdown-item:focus,
.dropdown-item:hover,
.dropdown-item:active {
    background-color: var(--yellow-primary-color-variant) !important;
    color: black !important; 
}
</style>