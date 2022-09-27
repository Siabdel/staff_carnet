<template>
    <div class="container-fluid">
        <h1> {{ msg }} </h1>
         <StaffDirectory :contactes="reload_contactes" :afficher="(searchBy)?true:false"/>
    </div>
</template>

<script>
    
    import 'bootstrap/dist/css/bootstrap.min.css';
    import StaffDirectory from '../components/StaffDirectory.vue';
    import SearchBox from '../components/SearchBox.vue';

    export default {
        name: "HomePage",
        data: () => ({
            msg: "Hello Home page",
            contactes : [],
            searchBy : true,
        }),
        components: [ StaffDirectory , SearchBox]
    }
</script>