<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    data-projection="EPSG:4326"
    style="height: 400px"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>

    <vl-feature
      id="marker"
      ref="marker"
      :properties="{ start: Date.now(), duration: 2500 }"
    >
      <vl-geom-point :coordinates="loc"></vl-geom-point>
      <vl-style-box>
        <vl-style-icon
          :src="MapIcon"
          :scale="0.5"
          :size="[96, 96]"
        ></vl-style-icon>
      </vl-style-box>
    </vl-feature>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
import MapIcons from "@/assets/img/mapicon.png";

export default {
  name: "Map",
  data() {
    return {
      zoom: 14,
      center: [103.93447213467519, 30.754676847667],
      loc: [103.9275765, 30.7586058],
      rotation: 0,
      geolocPosition: undefined,
      MapIcon: MapIcons
    };
  }
};
</script>

<style></style>
