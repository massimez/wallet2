<template>
<div class="container">
  <div class="wrap">
    <div class="loading">
      <div class="bounceball"></div>
    <div class="text">NOW LOADING</div>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoaderScreen',
  components: {

  },
});
</script>
<style lang="scss" >
@import  url(https://fonts.googleapis.com/css?family=Montserrat);

$width: 15px;
$height: 15px;

$bounce_height: 30px;

.containter {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background:
  url('//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif')
              50% 50% no-repeat rgb(249,249,249);
}

.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  color: #fbae17;
  display: inline-block;
  margin-left: 5px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  width: $width;
  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: $width;
    height: $height;
    border-radius: 50%;
    background-color: #fbae17;
    transform-origin: 50%;
    animation: bounce 500ms alternate infinite ease;
  }
}

@keyframes bounce {
  0% {
    top: $bounce_height;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: $height;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

</style>
