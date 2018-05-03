/// <reference types="openlayers" />
import VectorLayer from 'ol/layer/vector';
import View from 'ol/view';
export declare class DefaultMapSettings implements olx.MapOptions {
    controls: ol.Collection<ol.control.Control>;
    interactions: ol.Collection<ol.interaction.Interaction>;
    view: View;
    layers: VectorLayer[];
}
