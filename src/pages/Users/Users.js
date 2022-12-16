import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AverageTime from '../../components/AverageTime/AverageTime';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import MainData from '../../components/MainData/MainData';
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import Title from '../../components/Title/Title';
import { getData } from '../../Repository/GetData';

import "./users.css"

/**
 * Component for showing details of the user.
 * 
 * @example
 * <Route path="/users/:id" element={ <Users /> } />
 */
function Users(props) {
  const [dataMain, setDataMain] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState({});
  const [activity, setActivity] = useState([]);
  const { id } = useParams();
  
  //mainData
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",id);
      if (!request) return alert("data error");
      setDataMain(request.data);
    };
    data();
  }, [id]);

  //sessions
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY",id);
      if (!request) return alert("data error");
      setActivity(request.data);
    };
    data();
  }, [id]);

  //averageSessions
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS",id);
      if (!request) return alert("data error");
      request.data.sessions.forEach(session => {
        if(session.day === 1) {
          session.day = "L";
        } else if (session.day === 2) {
          session.day = "M";
        } else if (session.day === 3) {
          session.day = "M";
        } else if (session.day === 4) {
          session.day = "J";
        } else if (session.day === 5) {
          session.day = "V";
        } else if (session.day === 6) {
          session.day = "S";
        } else if (session.day === 7) {
          session.day = "D";
        }
      });
      setAverageSessions(request.data);
    };
    data();
  }, [id]);

  //performance
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE",id);
      if (!request) return alert("data error");
      request.data.data.forEach(data => {
        data.kind = request.data.kind[data.kind]
      })
      setPerformance(request.data);
    };
    data();
  }, [id]);
  if (dataMain.length === 0) return null;

  return (
    <div>
      <Title name={dataMain.userInfos.firstName} />
      <div className='containerWidget'>
        <div className='containerWidget__left'>
          <DailyActivity activity={activity.sessions} />
          <div className='containerWidget__left__bottom'>
            <AverageTime sessions={averageSessions.sessions} />
            <PerformanceChart performance={performance} />
            <ScoreChart score={dataMain.todayScore} />
          </div>
        </div>
        <div className='containerWidget__right'>
         <MainData data={dataMain.keyData} /> 
        </div>
      </div>
    </div>
  );
}

export default Users;