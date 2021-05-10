<template>
  <card>
    <template #header> <h2>Export Parameters</h2> </template>
    <template #content>
      <div class="p-grid">
        <div class="p-col p-d-flex p-flex-column">
          <div class="p-field-checkbox">
            <Checkbox id="fullNameVisible" :binary="true" v-model="exportParameters.fullNameVisible" />
            <label for="fullNameVisible">Full Name Visible</label>
          </div>

          <div class="p-field p-d-flex p-jc-between">
            <label class="p-mr-2" for="fullNameColor">Full Name Color</label>
            <ColorPicker id="fullNameColor" v-model="exportParameters.fullNameColor" />
          </div>
          <div class="p-field p-d-flex p-jc-between">
            <label class="p-mr-2" for="fillColor">Fill Color</label>
            <ColorPicker id="fillColor" v-model="exportParameters.fillColor" />
          </div>

          <div class="p-field-checkbox">
            <Checkbox id="borderVisible" name="borderVisible" :binary="true" v-model="exportParameters.borderVisible" />
            <label for="borderVisible">Border Visible</label>
          </div>
          <div class="p-field p-d-flex p-jc-between">
            <label class="p-mr-2" for="borderColor">Border Color</label>
            <ColorPicker id="borderColor" v-model="exportParameters.borderColor" />
          </div>
          <div class="p-field-checkbox">
            <Checkbox
              id="backgroundTransparent"
              name="backgroundTransparent"
              :binary="true"
              v-model="exportParameters.backgroundTransparent"
            />
            <label for="backgroundTransparent">Background Transparent</label>
          </div>
        </div>
        <div class="p-col p-d-flex p-flex-column">
          <p>Extensions</p>
          loop checkboxes here...
        </div>
        <div class="p-col p-d-flex p-flex-column">
          <p>Format</p>
          loop formats here
        </div>
      </div>
    </template>
  </card>
  <pre>{{ exportParameters }}</pre>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Store } from '@/store/types';
import defaultStore from '@/store';
import ColorPicker from 'primevue/colorpicker';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';

export default defineComponent({
  name: 'ExportParameters',
  components: {
    Card,
    ColorPicker,
    Checkbox,
  },
  setup() {
    const store = inject<Store>('store', defaultStore);
    return { exportParameters: store?.state.exportParameters };
  },
});
</script>

<style lang="scss"></style>
