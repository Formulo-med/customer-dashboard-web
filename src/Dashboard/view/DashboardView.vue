<template>
    <AssessmentComponent/>
    <ExpectationSection/>
</template>

<script>
import AssessmentComponent from '@/Dashboard/components/AssessmentSection.vue';
import ExpectationSection from '@/Dashboard/components/ExpectationSection.vue';
export default {
    name: "DashboardPage",
    components:{
        AssessmentComponent,
        ExpectationSection
    }
}
</script>

