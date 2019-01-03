<template>
  <div id="create-league">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="8"></b-col>

        <b-col cols="6" md="4">
          <b-list-group class="list-group">
            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100">
                 <i class="bbclub-atl"></i>
                <h6 class="mb-1 name">Mike Trout</h6>
                <small>OF</small>
              </div>
              <small><strong>AVG:</strong> .312 <strong>HR:</strong> 39 <strong>RBI:</strong> 79 <strong>R:</strong> 101</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Mookie Betts</h6>
                <small class="text-muted">OF</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Corey Kluber</h6>
                <small class="text-muted">SP</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Mookie Betts</h6>
                <small class="text-muted">BOS</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Corey Kluber</h6>
                <small class="text-muted">CLE</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Mookie Betts</h6>
                <small class="text-muted">BOS</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Corey Kluber</h6>
                <small class="text-muted">CLE</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Mookie Betts</h6>
                <small class="text-muted">BOS</small>
              </div>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "create-league"
};
</script>

<style scoped>

.list-group {
  min-width: 20rem;
}

.name {
  margin-left: 1rem;
  padding-right: 9rem;
}
</style>