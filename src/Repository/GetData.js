import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "./CallApi";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mocks/data";

  /**
   * Define use api or mocks
   * @type {boolean}
   */
  const useApi = false;

  /**
   * 
   * @param {string} type 
   * @param {number} id 
   */
  export const getData = async (type, id) => {
    let data = [];

    if (useApi) {
      switch (type) {
        case "USER_ACTIVITY":
          data = await getUserActivity(id);
          break;
        case "USER_PERFORMANCE":
          data = await getUserPerformance(id);
          break;
        case "USER_AVERAGE_SESSIONS":
          data = await getUserAverageSessions(id);
          break;
        case "USER_MAIN_DATA":
          data = await getUserInfos(id);
          break;
        default :
        data = "errors"
      }
    } else {
      switch (type) {
        case "USER_ACTIVITY":
          USER_ACTIVITY.forEach(user => {
            if (user.userId === Number(id)) {
              data = user;
            }
          })
          data = await getUserActivity(id);
          break;
        case "USER_PERFORMANCE":
          USER_PERFORMANCE.forEach(user => {
            if (user.userId === Number(id)) {
              data = user;
            }
          })
          data = await getUserPerformance(id);
          break;
        case "USER_AVERAGE_SESSIONS":
          USER_AVERAGE_SESSIONS.forEach(user => {
            if (user.userId === Number(id)) {
              data = user;
            }
          })
          data = await getUserAverageSessions(id);
          break;
        case "USER_MAIN_DATA":
          USER_MAIN_DATA.forEach(user => {
            if (user.id === Number(id)) { 
              data = {data: user};
            }
          });
          break;
        default :
        data = "errors"
      }
    }
    return data;
  }; 