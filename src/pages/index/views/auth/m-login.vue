<template lang='pug'>
  .login-form
    h1 登录 XX 平台
    //a-form(:layout="formLayout", :form="form", @submit="handleSubmit")
      a-form-item(label="userName", v-bind="formItemLayout")
        a-input(placeholder="请输入用户名", v-decorator="['userName', rules.userName]")
          a-icon(slot="prefix" type="user" style="color:rgba(0,0,0,.25)")
      a-form-item(label="password", v-bind="formItemLayout")
        a-input(placeholder="请输入密码", v-decorator="['password', rules.password]")
          a-icon(slot="prefix" type="lock" style="color:rgba(0,0,0,.25)")
      a-form-item
        a-button(type="primary", html-type="submit") Submit
    el-form(ref="eleForm" :model="eleForm" inline :rules="eleRules")
      el-row
        el-form-item(label="userName" prop="userName")
          el-input(v-model="eleForm.userName" size="small" placeholder="请输入用户名")
      el-row
        el-form-item(label="password" prop="password")
          el-input(v-model="eleForm.password" type="password" size="small" placeholder="请输入密码")
      el-row
        el-form-item
          el-button(type="primary" size="small" @click="login") 登录
      //el-row
        img(:src="demoImg" alt="responsible")
</template>

<script>
const rules = {
  notNull: {required: true, message: '此项为必填项！', trigger: 'blur'},
}
const demoImg = require("@/assets/logo.png");

export default {
  name: 'm-login',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      eleForm: {
        userName: '',
        password: '',
      },
      // antd 使用
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
      // antd 使用
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
      },
      // element-ui 使用
      eleRules: {
        userName: [rules.notNull],
        password: [rules.notNull],
      },
      demoImg: demoImg
    };
  },
  components: {},
  computed: {},
  watch: {
    'eleForm.userName': (val) => {
      console.log(val, this.formLayout, 'watch 里箭头函数绑定的是父组件的 this')
    },
    'eleForm.password'(val) {
      console.log(val, this.formLayout)
    },
  },
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
    validate(cb) {
      this.$refs.eleForm.validate(valid => {
        valid || this.$message.error("请按要求完成表单！");
        valid && cb && cb();
      })
    },
    login() {
      this.validate(() => {
        let url = "/api/login";
        let {userName, password} = this.eleForm;
        let data = {userName, password};
        this.axios.get(url, data).then(res => {
          this.$store.commit({
            type: 'user',
            user: res.data.userName,
            newStateAttr: 'this is a set state attr'
          });
        }).catch(error => {
          this.$message.error(error.message);
        })
      })
    }
  },
  mounted() {},
}

</script>
<style lang='scss' scoped>
.login-form {
  text-align: center;
  margin-top: 50px;
  img {
    width: 5rem;
  }
}
</style>
