import { SET_CURRENT_GEO, SET_DATE_FILTER, SET_GEO_FILTER } from "./actions";

const initialFilterState = {
  dateFilter: '',
  geoFilter: 0,
}

export function filterReducer(state = initialFilterState, action) {
  switch(action.type) {
    case SET_DATE_FILTER:
      return { ...state, dateFilter: action.payload };

    case SET_GEO_FILTER:
      return { ...state, geoFilter: action.payload };

    default:
      return state;
  }
}

const initialGeoState = {
  latitude: 0,
  longitude: 0,
}

export function currentGeoReducer(state = initialGeoState, action) {
  switch (action.type) {
    case SET_CURRENT_GEO:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };

    default:
      return state;
  }
}
