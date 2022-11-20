<template>
    <a
      :class="['button', isPrimary ? 'primary' : 'secondary']"
      :style="colors(isPrimary, isHovering)"
      @click="$emit('clicked')"
      :href="link !== '' ? link : '#'"
      :target="opensNewTab ? '_blank' : ''"
      :rel="opensNewTab ? 'noopener noreferrer' : ''"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      {{ buttonText }}
    </a>
  </template>
  
  <script>
  export default {
    props: {
      isPrimary: {
        type: Boolean,
        default: false
      },
      textColor: {
        type: String,
        default: "#fff"
      },
      backgroundColor: {
        type: String,
        default: "#000"
      },
      buttonText: {
        type: String,
        default: "Button"
      },
      link: {
        type: String,
        default: ""
      },
      opensNewTab: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: "220px"
      }
    },
    data() {
      return {
        isHovering: false
      }
    },
    methods: {
      colors(hoverState, primaryState) {
        return {
          color: hoverState ? primaryState ? this.backgroundColor : this.textColor : primaryState ? this.textColor : this.backgroundColor,
          backgroundColor: hoverState ? primaryState ? this.textColor : this.backgroundColor : primaryState ? this.backgroundColor : this.textColor,
          borderColor: this.backgroundColor,
          width: this.width
        }
      }
    }
  };
  </script>
  
  <style lang="sass" scoped>
  .button
    text-decoration: none
    text-transform: uppercase
    width: 220px
    line-height: 50px
    display: block
    cursor: pointer
    text-align: center
    font-weight: 900
    transition: all 0.15s ease-in-out
    border-radius: 15px
  .primary
    border: 2px solid var(--main-primary-color)
    background-color: var(--main-primary-color)
    color: var(--main-text-color)
    &:hover
      color: var(--main-primary-color)
      background-color: var(--main-text-color)
  .secondary
    border: 2px solid var(--main-primary-color) !important
    color: var(--main-primary-color) !important
    background-color: rgba(0, 0, 0, 0) !important
    &:hover
      color: var(--main-text-color) !important
      background-color: var(--main-primary-color) !important
  @media (screen and max-width: 1000px)
    .button
      width: 170px
      line-height: 40px
  </style>