<template>
  <div class="wrap" align="left">
    <h3>Element循环表单验证(Element Demo)</h3>
    <div align="right" style="margin-top: 20px;padding-right: 20%;">
      <el-button type="primary" @click="submitAllForm('ruleForm')">提交验证全部</el-button>
      <el-button @click="resetAllForm('ruleForm')">重置全部</el-button>
    </div>
    <div v-for="(item,index) in items" style="margin-top: 20px;width: 80%;">
      <el-form :model="item" :rules="rules" :ref="'ruleForm'+index" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm' + index)">立即创建</el-button>
          <el-button @click="resetForm('ruleForm' + index)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <h3>代码</h3>
    <pre class="code">
      &lt;div align="right" style="margin-top: 20px;padding-right: 20%;"&gt;<br/>
          &lt;el-button type="primary" @click="submitAllForm('ruleForm')"&gt;提交验证全部&lt;/el-button&gt;<br/>
          &lt;el-button @click="resetAllForm('ruleForm')"&gt;重置全部&lt;/el-button&gt;<br/>
      &lt;/div&gt;<br/>

      &lt;div v-for="(item,index) in items"&gt;<br/>
        &lt;el-form :model="item" :rules="rules" :ref="'ruleForm'+index" label-width="100px" class="demo-ruleForm"&gt;<br/>
          &lt;el-form-item label="活动名称" prop="name"&gt;<br/>
              &lt;el-input v-model="item.name"&gt;&lt;/el-input&gt;<br/>
          &lt;/el-form-item&gt;<br/>
          &lt;el-form-item&gt;<br/>
            &lt;el-button type="primary" @click="submitForm('ruleForm' + index)"&gt;立即创建&lt;/el-button&gt;<br/>
            &lt;el-button @click="resetForm('ruleForm' + index)"&gt;重置&lt;/el-button&gt;<br/>
          &lt;/el-form-item&gt;<br/>
        &lt;/el-form&gt;<br/>
      &lt;/div&gt;<br/>

      &lt;script&gt;<br/>
        submitAllForm(refForm) {
          let self = this;
          _.map(self.items, (item, index) => {
            self.submitForm(refForm + index);
          });
        },
        submitForm(refForm) {
          this.$refs[refForm][0].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetAllForm(refForm){
          let self = this;
          _.map(self.items, (item, index) => {
            self.resetForm(refForm + index);
          });
        },
        resetForm(formName) {
          this.$refs[formName][0].resetFields();
        }
      &lt;/script&gt;<br/>
    </pre>

  </div>
</template>
<script>
  import _ from 'underscore';
  export default {
    data() {
      return {
        items: [
          { name: '' },
          { name: '' },
          { name: '' },
        ],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitAllForm(refForm) {
        let self = this;
        _.map(self.items, (item, index) => {
          self.submitForm(refForm + index);
        });
      },
      submitForm(refForm) {
        this.$refs[refForm][0].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetAllForm(refForm) {
        let self = this;
        _.map(self.items, (item, index) => {
          self.resetForm(refForm + index);
        });
      },
      resetForm(formName) {
        this.$refs[formName][0].resetFields();
      }
    }
  }
</script>
<style>
  h3 {
    margin: 10px 0;
  }

  .wrap {
    padding: 10px 15px 15px 0;
  }

  .wrap .code {
    line-height: 30px;
    font-size: 13px;
    background-color: #dcdcdc;
    border: 1px solid #a8a8a8;
    padding: 0 5px;
  }
</style>