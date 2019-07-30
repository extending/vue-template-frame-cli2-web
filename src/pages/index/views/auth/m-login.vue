<template lang='pug'>
  .login-form
    h1 登录 XX 平台
    a-form(:layout="formLayout", :form="form", @submit="handleSubmit")
      a-form-item(label="userName", v-bind="formItemLayout")
        a-input(placeholder="请输入用户名", v-decorator="['userName', rules.userName]")
          a-icon(slot="prefix" type="user" style="color:rgba(0,0,0,.25)")
      a-form-item(label="password", v-bind="formItemLayout")
        a-input(placeholder="请输入密码", v-decorator="['password', rules.password]")
          a-icon(slot="prefix" type="lock" style="color:rgba(0,0,0,.25)")
      a-form-item
        a-button(type="primary", html-type="submit") Submit
</template>

<script>
export default {
  name: 'm-login',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: {
          span: 4,
          // xs: { span: 24 },
          // sm: { span: 18 },
          // md: { span: 12 },
          // lg: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
          md: { span: 12 },
          lg: { span: 6 },
        },
        // colon: true,
        // required: true,
      },
      rules: {
        userName: {
          rules: [
            {required: true, message: 'Please input your userName!', trigger: 'blur'}
          ]
        },
        password: {
          rules: [
            {required: true, message: 'Please input your password!', trigger: 'blur'}
          ]
        }
      }
    };
  },
  components: {},
  computed: {},
  methods: {
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        // console.log(err)
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
  mounted() {},
}

</script>
<style lang='scss' scoped>
</style>
