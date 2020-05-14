<template>
  <div class="text-center">
    <v-dialog 
      v-model="dialog"
      persistent 
      width="500"
    >
      <v-card>
        <v-card-title 
          class="headline grey lighten-2" 
          primary-title
        >
          Requested URL not found
        </v-card-title>
        <v-card-text>
          <br>
          It seems that you tried to access a non-existing route.
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-space />
          <v-btn 
            color="primary"
            text 
            @click="redirect"
          >
            Go back to dashboard
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

  data() {
    return {
      dialog:true,
    };
  },
  
  methods:{
    redirect(){
      this.dialog=false;
      this.$router.push('/');
    }
  }
};
</script>