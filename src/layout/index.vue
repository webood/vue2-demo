<template>
    <div class="layout">
        <div class="header">header</div>
                    <div class="main">
            <div>main</div>
            <div><router-view /></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Layout',
};
</script>

<style lang="scss">
.header {
    height: 43px;
}
</style>
