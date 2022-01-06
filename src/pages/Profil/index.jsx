import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getInfosUser, getUserActivity, getUserAverage, getUserPerformance } from '../../api/services';
import Sidebar from '../../components/SideBar';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/Linechart';
import RadarChart from '../../components/Radarchart';
import RadialChart from '../../components/Radialchart';
import KeyData from '../../components/Keydata';
import { getUserPerformanceMocked, getInfosUserMocked, getUserActivityMocked, getUserAverageMocked } from '../../api/mocks/services';

function Dashboard() {

    const [userInformation, setUserInformation] = useState(null);
    const [userActivity, setUserActivity] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);
    const [isError, setIsError] = useState();
    const [isDataLoading, setDataLoading] = useState(false);
    const { id } = useParams();
    const [userAverage, setUserAverage] = useState([]);
    const [userKeys, setUserKeys] = useState([]);

    useEffect(() => {

        const develop = false;

        if (develop) {  // for working with local file
        
            setUserInformation(() => getInfosUserMocked(id));
            setUserActivity(() => getUserActivityMocked(id));
            setUserAverage(() => getUserAverageMocked(id));
            setUserPerformance(() => getUserPerformanceMocked(id));
            setIsError(false)
            
        } else {     //for working with api on serveur
            Promise.all([
                getInfosUser(id).then((dataInfo) => {
                    setUserInformation(dataInfo);
                }),
                getUserActivity(id).then((dataActivity) => {
                    setUserActivity(dataActivity);
                }),
                getUserAverage(id).then((dataAverage) => {
                    setUserAverage(dataAverage);
                }),
                getUserPerformance(id).then((dataPerformance) =>{
                    setUserPerformance(dataPerformance);
                })

            ]).then((resp) => {
                setIsError(false)

            }).catch((err) => {
                setIsError(true)
            })
        }
    }, [id]);

    useEffect(() => {
        if (userInformation && isError=== false)  {
            toBuildDataKey();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInformation, isError]);


    const toBuildDataKey = () => {
        setUserKeys(() => [{
            name: "Calories",
            value: `${parseFloat(userInformation.data.keyData.calorieCount / 1000).toFixed(3)}Kcal`,
            img: `${process.env.PUBLIC_URL}/iconcalorie.png`,
            background: '#FF000020'
        },
        {
            name: "Proteines",
            value: `${userInformation.data.keyData.proteinCount}g`,
            img: `${process.env.PUBLIC_URL}/iconproteine.png`,
            background: '#4ABAFF20'
        },
        {
            name: "Glucides",
            value: `${userInformation.data.keyData.carbohydrateCount}g`,
            img: `${process.env.PUBLIC_URL}/iconglucide.png`,
            background: '#F9CE2320'
        },
        {
            name: "Lipides",
            value: `${userInformation.data.keyData.lipidCount}g`,
            img: `${process.env.PUBLIC_URL}/cheeseburger.png`,
            background: '#FF000020'
        }
        ]);

        setDataLoading(true);
    }


    return (
        <div className="container-profil">
            <div className="container-profil__sidebar">
                <Sidebar />
            </div>
            {isDataLoading && (
                <section className="container-profil__dashboard">
                    <div className="content__dashboard-header">
                        <h1 className="sr-only">{`Résumé des performances de ${userInformation.data.userInfos.firstName}`}</h1>
                        <h2 className="dashboard-header__user" key={`${userInformation.data.id}`}>Bonjour <span>{`${userInformation.data.userInfos.firstName}`}</span></h2>
                        <p className="dashboard-header__resume">Félicitation ! vous avez explosé vos objectifs hier ! 👏</p>
                    </div>
                    <div className="content-dashboard__activities">
                        <div className="dashboard-activities__center">
                            <div className="dashboard-activity__today">
                                <BarChart propsData={userActivity} />
                            </div>
                            <div className="profil__activity-group">
                                <div className="profil__activity-coverage">
                                    <LineChart propsDataAverage={userAverage} />
                                </div>

                                <div className="profil__activity-radar">
                                    <RadarChart propsDataPerformance={userPerformance} />
                                </div>

                                <div className="profil__activity-score">
                                    <RadialChart propsDataRadial={userInformation} />
                                </div>
                            </div>
                        </div>
                        <div className="profil__activity-side">
                            {userKeys.map((data) => <KeyData key={data.name} propsDataKey={data} />)
                            }
                        </div>
                    </div>
                </section>
            )}
            {isError && (
                <h1 className="error">Serveur en maintenance</h1>
            )}


        </div>
    );
}

export default Dashboard
