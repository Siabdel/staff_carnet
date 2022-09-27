<template>
    <div class="container-fluid">
        <h1> {{ msg }} </h1>
        <StaffDirectory></StaffDirectory>
    </div>
</template>

<script>
    
    import 'bootstrap/dist/css/bootstrap.min.css';
    import StaffDirectory from '../components/StaffDirectory.vue';

    export default {
        name: "HomePage",
        data: () => ({
            msg: "Hello Home page",
            contactes : [],
            searchBy : true,
        }),
        components: {StaffDirectory} , 
    }
</script>