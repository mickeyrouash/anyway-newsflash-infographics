import { IPoint } from '../models/Point';

export function uniquePoints(points: IPoint[]) {
  const uniquePoints = new Array<IPoint>();
  const uniqueSet = new Set();
  // fill only unique points (not yet included in uniqueSet)
  points.forEach((p) => {
    const pointKey = `${p.latitude}:${p.longitude}`; // use x:y to create unique key
    if (!uniqueSet.has(pointKey)) {
      uniquePoints.push(p);
      uniqueSet.add(pointKey);
    }
  });

  return uniquePoints;
}
// pop up login window dimensions

export  const loginPopUpDim = {
  width: window.screen.width/3.5,
  height: window.screen.height/1.8,
}
//server url can be on dev or the heroku server
export const serverUrl = process.env.REACT_APP_MOCK_DEV_MODE === 'true' ? process.env.REACT_APP_BASE_URL_DEV :
    process.env.REACT_APP_BASE_URL

export const  authServerUrl = process.env.REACT_APP_MOCK_DEV_MODE === 'true' ? process.env.REACT_APP_BASE_URL_DEV :
    process.env.REACT_APP_AUTH_BASE_URL;

//function return api key depends on the env it running on
export const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY ? process.env.REACT_APP_GOOGLE_MAP_KEY : '';

