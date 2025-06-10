'use client';

import NavBar from '../components/NavBar';
import Search from '../components/Search';
import MapWrapper from '../components/MapWrapper';
import { useLocationContext } from '../context/LocationContext';

export default function Page() {
  const { startCoords, endCoords, updateCoordinates } = useLocationContext();

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-3 gap-4 p-4">
        <div>
          <Search />
        </div>
        <div className="col-span-2">
          <MapWrapper
            startCoords={startCoords}
            endCoords={endCoords}
            onMarkerDrag={updateCoordinates}
          />
        </div>
      </div>
    </div>
  );
}
