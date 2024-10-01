<template>
    <div class="container my-4 mx-0 rounded-4 p-3" style="background-color: azure;" >
        <h5 class="text-center my-3">Next Appointment</h5>
        <div class="row d-flex justify-content-end align-items-center p-3">
            <div class="col-12 col-md-4 my-1 p-0">
                <div class="d-flex justify-content-lg-center align-items-center">
                    <img src="/images/doctor-image.png" class="img-fluid rounded-circle border col-2" style="background-color: #ffffff90"/>
                    <div class="d-flex flex-column px-lg-4 px-2">
                        <span class="fw-bold">Dr. Olyvia Ryde</span>
                        <span>MS In Dermatology</span>
                    </div>
                </div>
                
            </div>
            <div class="col-12 col-md-3 mt-3 d-flex justify-content-sm-center px-sm-4">
                <font-awesome-icon :icon="['far', 'calendar']" size="xl" class="me-lg-4 me-2"/>
                <span>20/06/2024</span>
            </div>
            <div class="col-12 col-md-3 mt-3 d-flex justify-content-sm-center px-sm-4">
                <font-awesome-icon :icon="['far', 'clock']" size="xl" class="me-lg-4 me-2"/>
                <span>03:30 PM</span>
            </div>
            <div class="col-12 col-md-2 mt-3 d-flex justify-content-end justify-content-sm-center">
                <button
					class="btn btn-warning d-flex rounded-4"
					@click="_"
				>
					<span class="px-1 fw-bold">Reschedule</span>
				</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"NextAppointmentSection"
}
</script>

