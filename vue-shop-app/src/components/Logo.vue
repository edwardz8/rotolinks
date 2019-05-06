<template>
  <div>
     <div class="title_wrapper">
        <div class="alfa-title big">
          <div class="r"></div>
        </div>
        <div class="alfa-title big">
          <div class="l"></div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'Logo'
  }
}
</script>

<style>
/* rl logo styles */
.l:before{
  position: absolute;
  content: "";
  bottom:0;
  background-color: #69f0ae;
  height: 30px;
  width: 100px;
}
.l:after{
  position: absolute;
  content: "";
  left: 0;
  background-color: rgba(0, 150, 136, 0.5);
  height: 100px;
  width: 50px;
}
.r:before{
  position: absolute;
  content: "";
  height: 65px;
  width: 100px;
  border-radius: 0 30px 30px 0px;
  background-color: #536dfe;
}
.r:after{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  left: 0;
  border-style: solid;
  border-width: 0 100px 100px 0px;
  border-color: transparent transparent #448aff;
}
.alfa-title {
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
  margin: -20px;
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;
}

@media (min-width:480px) {
  .title_wrapper{
    width: 20%;
    margin: 0 auto;
  }
}
@media (min-width:80px) {
  .title_wrapper{
    width: 200px;
    margin: 0 auto;
  }
}

</style>