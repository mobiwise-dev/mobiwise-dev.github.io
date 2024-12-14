import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { addPropertyControls, ControlType } from "framer";

export function MobiWise_Maps({ apiKey, latitude, longitude, zoom, theme, streetViewControl, zoomControl, mapTypeControl, fullscreenControl, mapTypeControlStyle, draggable, scrollwheel, pointsOfInterest }) {
  const mapRef = useRef(null);

  const mapTypeControlStyleMap = {
    DROPDOWN_MENU: window.google?.maps?.MapTypeControlStyle?.DROPDOWN_MENU || null,
    HORIZONTAL_BAR: window.google?.maps?.MapTypeControlStyle?.HORIZONTAL_BAR || null,
  };

  const calculateCenter = (latitude, longitude) => ({
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  });

  const rgbToHex = (rgb) => {
    const rgbArray = rgb.match(/\d+/g);
    if (rgbArray) {
      const [r, g, b] = rgbArray.map(Number);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }
    return rgb; // Si la conversion échoue, retournez la couleur d'origine.
  };

  const buildTheme = (theme) =>
    theme.map((item) => {
      const stylers = [];

      if (item.visibility) {
        stylers.push({ visibility: item.visibility });
      }
      if (item.color) {
        stylers.push({ color: rgbToHex(item.color) }); // Conversion en hexadécimal
      }

      return {
        featureType: item.feature || "all",
        elementType: item.element || "all",
        stylers: stylers,
      };
    });

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [apiKey, zoom, latitude, longitude, theme]);

  const initializeMap = () => {
    if (mapRef.current) {
      const parsedCenter = calculateCenter(latitude, longitude);
      const customStyle = buildTheme(theme);

      const map = new window.google.maps.Map(mapRef.current, {
        center: parsedCenter,
        zoom: zoom,
        styles: customStyle,
        streetViewControl: streetViewControl,
        fullscreenControl: fullscreenControl,
        zoomControl: zoomControl,
        mapTypeControl: mapTypeControl,
        mapTypeControlOptions: {
          style: mapTypeControlStyleMap[mapTypeControlStyle] || window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT,
        },
        draggable: draggable,
        scrollwheel: scrollwheel,
      });

      // Ajouter les POI
      pointsOfInterest.forEach((poi) => {
        const position = {
          lat: parseFloat(poi.latitude),
          lng: parseFloat(poi.longitude),
        };
        new window.google.maps.Marker({
          position: position,
          map: map,
          icon: {
            url: poi.icon,
            scaledSize: new window.google.maps.Size(32, 32),
          },
          title: poi.title,
        });
      });
    }
  };

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

// Ajout des Property Controls pour personnaliser les options via Framer
addPropertyControls(MobiWise_Maps, {
  apiKey: {
    type: ControlType.String,
    title: "API Key",
    defaultValue: "AIzaSyBPWCNN0UmevZSSXccenYzt0xub-5iXeRQ", // AIzaSyBPWCNN0UmevZSSXccenYzt0xub-5iXeRQ
    description: `[Get your API key](https://developers.google.com/maps/documentation/javascript/get-api-key)`,
  },
  latitude: {
    type: ControlType.String,
    title: "Latitude",
    defaultValue: "46.5806785",
  },
  longitude: {
    type: ControlType.String,
    title: "longitude",
    defaultValue: "2.173626",
  },
  zoom: {
    type: ControlType.Number,
    title: "Zoom",
    min: 1,
    max: 20,
    defaultValue: 6,
  },

  theme: {
    type: ControlType.Array,
    title: "Theme",
    control: {
      type: ControlType.Object,
      icon: "color",
      controls: {
        feature: {
          type: ControlType.Enum,
          options: [
            "water",
            "landscape",
            "landscape.man_made",
            "landscape.natural",
            "road",
            "road.highway",
            "road.arterial",
            "road.local",
            "poi",
            "poi.park",
            "poi.business",
            "poi.attraction",
            "poi.medical",
            "poi.school",
            "poi.government",
            "poi.place_of_worship",
            "administrative",
            "administrative.country",
            "administrative.land_parcel",
            "administrative.locality",
            "administrative.neighborhood",
            "administrative.province",
            "transit",
            "all",
          ],
          defaultValue: "water",
        },
        color: { type: ControlType.Color },
        element: {
          type: ControlType.Enum,
          options: ["all", "geometry", "geometry.fill", "geometry.stroke", "labels", "labels.icon", "labels.text", "labels.text.fill", "labels.text.stroke"],
          defaultValue: "all",
        },
        visibility: {
          type: ControlType.Enum,
          options: ["on", "simplified", "off"],
          defaultValue: "on",
        },
      },
    },
    defaultValue: [],
    maxCount: 30,
  },
  streetViewControl: {
    type: ControlType.Boolean,
    title: "Street View",
    defaultValue: true,
  },
  fullscreenControl: {
    type: ControlType.Boolean,
    title: "Fullscreen Control",
    defaultValue: true,
  },
  zoomControl: {
    type: ControlType.Boolean,
    title: "Zoom Control",
    defaultValue: true,
  },
  mapTypeControl: {
    type: ControlType.Boolean,
    title: "Map Type Control",
    defaultValue: true,
  },
  mapTypeControlStyle: {
    type: ControlType.Enum,
    title: "Map Type Style",
    options: ["HORIZONTAL_BAR", "DROPDOWN_MENU"],
    optionTitles: ["Horizontal Bar", "Dropdown Menu"],
    defaultValue: "HORIZONTAL_BAR",
  },
  draggable: {
    type: ControlType.Boolean,
    title: "Draggable",
    defaultValue: true,
  },
  scrollwheel: {
    type: ControlType.Boolean,
    title: "Scrollwheel",
    defaultValue: true,
  },
  pointsOfInterest: {
    type: ControlType.Array,
    title: "Points of Interest",
    control: {
      type: ControlType.Object,
      controls: {
        latitude: {
          type: ControlType.String,
          title: "Latitude",
          defaultValue: "48.858370",
        },
        longitude: {
          type: ControlType.String,
          title: "Longitude",
          defaultValue: "2.294481",
        },
        icon: {
          type: ControlType.File,
          title: "Custom Icon",
          allowedFileTypes: ["gif png svg"],
        },
        title: { type: ControlType.String, title: "Title" },
      },
    },
  },
});
