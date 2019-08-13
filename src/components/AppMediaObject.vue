<template>
  <div style="display: flex; width: 100%">
    <figure class="media-left">
      <img
        class="image is-64x64"
        src="../assets/citylab_square_neon.jpg"
      >
    </figure>
    <div class="media-content">
      <div class="content">
          <strong>
            <router-link :to="{ name: 'apps', params: {id: data._id, appName: data.appId } }" class="appheadline blue">
              <!-- ***:to="'app/' + data._id" class="navbar-item blue"> -->
              
             
            {{ data.appId }}</router-link>
            <!-- <span class="tag is-small">#{{ data.uniqueId }}</span> -->
            </strong>
         
          <p class="appContentText">
          {{ data.description }} </p>
            <small class="is-size-7"> Location: {{ data.locationName }}
          </small>
          <small class="is-size-7 right"> Submitted by: {{ data.user }}
          </small>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small">
        <i class="fa fa-star" />
        
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMediaObject',
  props: {
    data: Object,
  },
};
</script>
<style>

.media {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #312CA3!important;
  padding: 1em 1.5em 0.5em 1.5em;
 
}

.icon {
  cursor: pointer;
}

.image.is-24x24 {
  display: inline;
  position: relative;
  top: 5px;
  border-radius: 20px;
}

.appheadline {
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.blue {
  color: #312CA3
}
.right {
  margin-left: 5rem;

}

.icon {
  color:  #312CA3
}

.appContentText {
  margin-bottom: 0px!important;
}


</style>
