<template>
    <div class="provider">
        <div class="tags">
            <div class="tag" v-for="tag in tags" :key="tag._id">
                {{ tag.name }}
            </div>
        </div>
        <div class="name">
            {{ name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Provider',
    props: {
        name: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>