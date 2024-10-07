<template>
    <AssessmentComponent/>
    <ExpectationSection/>
</template>

<script>
import AssessmentComponent from '@/ThankyouPage/components/AssessmentSection.vue';
import ExpectationSection from '@/ThankyouPage/components/ExpectationSection.vue';
export default {
    name: "ThankyouPageView",
    components:{
        AssessmentComponent,
        ExpectationSection
    }
}
</script>

