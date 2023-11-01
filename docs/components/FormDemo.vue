
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
                    <el-date-picker type="date" placeholder="Please Select" v-model="form.date1"></el-date-picker>
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
            <el-button @click="onReset">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

const form = ref(createForm())
const formRef = ref<any>()

function createForm() {
    return {
        name: '',
        region: '',
        date1: '',
        delivery: false,
    }
}

function onReset() {
    form.value = createForm();
    nextTick(() => {
        formRef.value.clearValidate();
    })
}

async function onSubmit() {
    await formRef.value.validate();
}

</script>