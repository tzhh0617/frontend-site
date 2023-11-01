<template>
    <div class="color-container" :style="{
        backgroundColor: color,
    }">
        <div class="name">{{ name }} </div>
        <div class="color">{{ color }} </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    color: string;
    name: string;
}>();

</script>

<style>
.color-container {
    display: inline-block;
    width: 300px;
    height: 80px;
    padding: 12px 20px;
    border-radius: 6px;
    margin-right: 24px;
    margin-bottom: 12px;
    font-weight: bold;
}

.color-container .name {
    font-size: 16px;
    color: #fff;
}

.color-container .color {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
}
</style>