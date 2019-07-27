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
        <p>
          <strong>
            <router-link 
              :to="'app/' + data._id" class="navbar-item blue">
              
             
            {{ data.appId }}</router-link>
            <span class="tag is-small">#{{ data.uniqueId }}</span></strong>
          <br>
          {{ data.description }} <br>
            <small class="is-size-7"> Location: {{ data.locationName }}
          </small>
          <small class="is-size-7 right"> Submitted by: {{ data.user }}
          </small>
          
        
        </p>
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
  border-radius: 0.3em;
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

.blue {
  color: #312CA3
}
.right {
  margin-left: 5rem;

}

.icon {
  color:  #312CA3
}

</style>
