<template>
  <div class="footer">
    <div class="footer--content">
      This site would like to use cookies to provide you with a better user experience.
      <Button class="p-button-text p-button-raised p-button-rounded p-button-secondary footer--acceptBtn"
        >Allow &amp; close</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CookieFooter',
};
</script>

<style lang="scss" scoped>
@keyframes pop-up {
  from {
    bottom: -100px;
  }
  to {
    bottom: 0;
  }
}

.footer {
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 55px;
  overflow: hidden;
}

.footer--content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-product);
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;

  animation: pop-up 0.5s ease-in-out;
}

.footer--acceptBtn {
  margin-left: 15px;
  background-color: white !important;
}
</style>
