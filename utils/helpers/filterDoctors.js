import { getDistance } from 'geolib';

export function filterDoctors (doctors, date, geoInfo) {
  const filteredByDate = date ? doctors.filter(doctor => doctor.available === date) : doctors;

  if (geoInfo) {
    if (!geoInfo.currentCoords) {
      return filteredByDate;
    }

    const filteredByGeo = filteredByDate.filter(doctor => {
      const distanceMiles = getDistance(
        geoInfo.currentCoords,
        {
          longitude: doctor.location.longitude,
          latitude: doctor.location.latitude
        }
      ) / 1609.344;
      return distanceMiles <= geoInfo.radius;
    });

    return filteredByGeo;
  }

  return filteredByDate;
}