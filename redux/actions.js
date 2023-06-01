export const SET_DATE_FILTER = 'SET_DATE_FILTER';
export const SET_GEO_FILTER = 'SET_GEO_FILTER';

export const setDateFilter = date => dispatch => {
  dispatch({
    type: SET_DATE_FILTER,
    payload: date,
  });
};

export const setGeoFilter = geo => dispatch => {
  dispatch({
    type: SET_GEO_FILTER,
    payload: geo,
  });
};

export const SET_CURRENT_GEO = 'SET_CURRENT_GEO';

export const setCurrentGeo = geo => dispatch => {
  dispatch({
    type: SET_CURRENT_GEO,
    payload: geo
  });
};
