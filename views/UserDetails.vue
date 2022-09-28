<template>
    <div>
        <h2> Details du contacte </h2>
        <div class="container-fluid well span6">
            <div class="row-fluid">
                <div class="span2" >
                    <img class="img-circle" src="https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm">
                </div>
        
                <div class="span8">
                    <h3>Nom : {{ fullname}} </h3>
                </div>
        
                <div class="span2">
                    <div class="btn-group">
                        <a class="btn dropdown-toggle btn-info" data-toggle="dropdown" href="#">
                            Action 
                            <span class="icon-cog icon-white"></span><span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><span class="icon-wrench"></span> Modify</a></li>
                            <li><a href="#"><span class="icon-trash"></span> Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { mapGetters, mapMutations } from 'vuex';


export default{
    name : 'UserDetails',
    data(){
        return {
            message : "on est au details !!"
        }
    },
    computed:{
        ...mapGetters(["selectedUser"]),

        fullname(){
            return `${this.selectedUser.name.first} ${this.selectedUser.name.last}`  
        } 
    },
    methods:{
        ...mapMutations(["setSelectedUser"])
    },

    created(){
        const userId = this.$route.params.id
        this.setSelectedUser(userId)

        //console.log(" set selectedUser = " + userId)
    }


}

</script>