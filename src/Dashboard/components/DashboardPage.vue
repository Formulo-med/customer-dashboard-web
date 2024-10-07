<template>
    <div class="row align-items-center">
        <NextAppointmentSection/>
        <OrderStatusSection/>
        <MedicationSection/>
        <MustHavesSection/>
    </div>
</template>
<script>
import NextAppointmentSection from '@/Dashboard/components/NextAppointmentSection.vue';
import OrderStatusSection from '@/Dashboard/components/OrderStatusSection.vue';
import MedicationSection from '@/Dashboard/components/MedicationSection.vue';
import MustHavesSection from '@/Dashboard/components/MustHavesSection.vue';

export default {
    name:"DashboardPage",
    components:{
        NextAppointmentSection,
        OrderStatusSection, 
        MedicationSection,
        MustHavesSection
    }
}
</script>