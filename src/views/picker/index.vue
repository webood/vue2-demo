<template>
    <div>
        <span>更改组件主题颜色</span>
        <el-color-picker
            v-model="theme"
            :predefine="['#409EFF', '#1890ff', '#304156', '#212121', '#11a983', '#13c2c2', '#6959CD', '#f5222d']"
            class="theme-picker"
            popper-class="theme-picker-dropdown"
            @change="changeColor"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            theme: this.$store.state.settings.theme,
        };
    },
    mounted() {
        console.log(111, this.$store.state.settings.theme);
    },
    methods: {
        changeColor(e) {
            this.$store.dispatch('settings/changeSetting', {
                key: 'theme',
                value: e,
            });
        },
    },
};
</script>

<style></style>
