# Form 表单

<script setup lang="ts">
import FormDemo from './components/FormDemo.vue'

</script>

## 样例

<FormDemo />

## 规范

- 表单
  - 布局：三等份，间距 20px
  - 字段名：局顶部左对齐
  - 输入框/按钮：尺寸中等
  - 选择框：支持搜索清空
  - 保存按钮：常亮
  - 点击提交时，校验表单
  - 校验存在错误时，在字段下方显示错误原因

## 参考代码

<el-tabs >
    <el-tab-pane label="Vue3">

```vue
<template>
  <el-form ref="formRef" :model="form" label-position="top">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="Name" prop="name" required>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Region" prop="region" required>
          <el-select v-model="form.region" placeholder="Please Select">
            <el-option label="ShangHai" value="shanghai"></el-option>
            <el-option label="BeiJing" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Date" prop="date1">
          <el-date-picker
            type="date"
            placeholder="Please Select"
            v-model="form.date1"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8" prop="delivery">
        <el-form-item label="Delivery">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Save</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref(createForm());
const formRef = ref<any>();

function createForm() {
  return {
    name: "",
    region: "",
    date1: "",
    delivery: false,
  };
}

async function onSubmit() {
  await formRef.value.validate();
}
</script>
```

</el-tab-pane>

<el-tab-pane label="Vue2">

```vue
<template>
  <el-form ref="formRef" :model="form" label-position="top" size="medium">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="Name" prop="name" required>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Region" prop="region" required>
          <el-select v-model="form.region" placeholder="Please Select">
            <el-option label="ShangHai" value="shanghai"></el-option>
            <el-option label="BeiJing" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Date" prop="date1">
          <el-date-picker
            type="date"
            placeholder="Please Select"
            v-model="form.date1"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8" prop="delivery">
        <el-form-item label="Delivery">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Save</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref(createForm());
const formRef = ref<any>();

function createForm() {
  return {
    name: "",
    region: "",
    date1: "",
    delivery: false,
  };
}

async function onSubmit() {
  await formRef.value.validate();
}
</script>
```

</el-tab-pane>

  </el-tabs>
