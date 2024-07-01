<template>
  <div>
    <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

    <!-- <div class="mt-3" >
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" :key="name">{{ name }}</li>
      </ul>
    </div> -->
    
    <b-modal id="modal-input-hopdong" @show="resetModal" @hidden="resetModal" >
      <template #modal-title>
        {{ title }}
      </template>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Tên hợp đồng" label-for="name-input" invalid-feedback="Name is required" >
          <b-form-input id="tenhopdong-input" v-model="data.tenhopdong" required></b-form-input>
        </b-form-group>
        <b-form-group label="Ngày bắt đầu" invalid-feedback="Age is required">
          <b-form-input id="ngaybatdau-input" v-model="data.ngaybatdau"  type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Ngày kết thúc" invalid-feedback="Age is required">
          <b-form-input id="ngayketthuc-input" v-model="data.ngayketthuc" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Ghi chú" invalid-feedback="Age is required">
          <b-form-textarea id="ghichu-area" v-model="data.ghichu" rows="5"></b-form-textarea>
        </b-form-group>
        <hr/>
        
      </form>
       <template #modal-footer="{cancel, hide }">
      <b>{{ data.id }}</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="handleLuu">
        Lưu
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button>
    </template>
    </b-modal>
    </div>
  
</template>

<script>
  import { EventBus } from '~/plugins/eventbus'
  export default {
    props: {
      datatitem: {
        type: Object,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },  
    data() {
      return {
        data:{
          ...this.datatitem
        },
        
        // ageState: null
      }
    },
    watch: {
    datatitem: {
      handler(newVal) {
        this.data = { ...newVal };
      },
      deep: true,
      immediate: true
    }
  },
    // computed: {
    //   nameState() {
    //     return this.name.length > 2 ? true : false
    //   },
    //   ageState(){
    //     return this.age.length > 2 ? true : false
    //   }
    // },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        // this.ageState = valid
        console.log('>>>checkFormValidity: ',valid)
        return valid
      },
      resetModal() {
        // this.name = ''
        // this.age = '' 
        // this.nameState = null
        // this.ageState = null
        
        
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
        console.log('nhan nut ok')
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        // this.submittedNames.push(this.name)
        // Hide the modal manually
        console.log('formdata: ', this.formdata)
        
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
      async handleLuu(){
        // alert(this.data.id)
        const result = await this.$axios.$post(process.env.BACKEND_URL + '/hopdong//suahopdong',{
          id: this.data.id,
          tenhopdong: this.data.tenhopdong,
          ngaybatdau: this.data.ngaybatdau,
          ngayketthuc: this.data.ngayketthuc,
          ghichu: this.data.ghichu
        })
        if(result === 'thanhcong'){
          EventBus.$emit('data-saved'); // Emit event when data is saved
          
        } else{
          alert('Khong thanh cong')
        }
      }
    }
  }
</script>