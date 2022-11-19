<template>
    <header>
        <h1 class="logo">CityinaPocket</h1>
        <div class="cta">
            <div class="language-select">
                <span>ENG</span>
                <img src="@/assets/eng-flag.png" alt="English">
            </div>
        </div>
    </header>
</template>

<style lang="sass" scoped>
header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 5vw
    height: 10vh
    width: 100vw
    box-sizing: border-box
    color: #197D2F

    .language-select
        display: flex
        align-items: center
        cursor: pointer
        transition: all 0.3s ease-in-out

        &:hover
            transform: scale(1.1)

        span
            margin-right: 1vw
            font-size: 1.5rem
            font-weight: 600

        img
            width: 2rem
            height: 2rem
</style>