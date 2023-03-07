import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
function MapComp() {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 33.826642, lng: -118.191939 }), []);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="z-0 h-m w-2/3 min-w-c my-5 rounded overflow-hidden">
        <GoogleMap 
        options={mapOptions}
        zoom={10}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{zIndex:0, width: '100%', height: '100%', }}
        onLoad={() => console.log('map loaded')}
        >
            <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
        </GoogleMap>
    </div>
    )
}

export default MapComp;
