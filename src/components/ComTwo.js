import 'chart.js/auto';
import React from "react";
import { Bar, Pie, Radar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from 'axios';

const ComTwo = () => {


    const [sightings17, setSightings17] = useState("undefined");
    const [sightings18, setSightings18] = useState("undefined");
    const [sightings19, setSightings19] = useState("undefined");
    const [sightings20, setSightings20] = useState("undefined");
    const [sightings21, setSightings21] = useState("undefined");
    const [sightings22, setSightings22] = useState("undefined");


    const [triangle, setTriangle] = useState("");
    const [fireball, setFireball] = useState("");
    const [sphere, setSphere] = useState("");
    const [light, setLight] = useState("");



    useEffect(() => {

        axios.get('data.json')
            .then((res) => {



                // Dates 
                let sightingData17 = 0;
                let sightingData18 = 0;
                let sightingData19 = 0;
                let sightingData20 = 0;
                let sightingData21 = 0;
                let sightingData22 = 0;

                for (let i = 0; i < res.data.length; i++) {

                    var dateSnip = new Date(res.data[i].date_time);
                    var year = dateSnip.getFullYear();

                    // console.log(year);
                    if (year === 2022) {
                        sightingData22 = sightingData22 + 1;
                    }

                    if (year === 2020) {
                        sightingData20 = sightingData20 + 1;
                    }

                    if (year === 2021) {
                        sightingData21 = sightingData21 + 1;
                    }

                    if (year === 2019) {
                        sightingData19 = sightingData19 + 1;
                    }

                    if (year === 2018) {
                        sightingData18 = sightingData18 + 1;
                    }

                    if (year === 2017) {
                        sightingData17 = sightingData17 + 1;
                    }




                }

                // console.log(sightingData18);
                // console.log(sightingData19);
                // console.log(sightingData20);
                // console.log(sightingData21);
                setSightings17(sightingData17);
                setSightings18(sightingData18);
                setSightings19(sightingData19);
                setSightings20(sightingData20);
                setSightings21(sightingData21);
                setSightings22(sightingData22);




                // Shapes 
                let triangleData = 0;
                let fireballData = 0;
                let sphereData = 0;
                let lightData = 0;


                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].shape === "Triangle") {
                        triangleData = triangleData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Fireball") {
                        fireballData = fireballData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Sphere") {
                        sphereData = sphereData + 1;
                        // console.log(triangle.length);
                    }

                    if (res.data[i].shape === "Light") {
                        lightData = lightData + 1;
                        // console.log(triangle.length);
                    }
                }


                setSphere(sphereData);
                setFireball(fireballData);
                setTriangle(triangleData);
                setLight(lightData);

            })

    });



    return (
        <div className="container-fluid componentInterior bgimage2">

            <div className='row'>
                <h3 className='graph1-heading'>Most Seen UFO Shapes:</h3>

                <div className="exCon chart">
                    <Bar
                        data={{
                            labels: ['Triangle', 'Fireball', 'Sphere', 'Light'],
                            datasets: [{
                                label: '# of Sightings',
                                data: [triangle, fireball, sphere, light],
                                backgroundColor: [
                                    '#FC6161',
                                    '#82E26A',
                                    '#EEE85C',
                                    '#4DCEEA',
                                    // 'rgba(153, 102, 255, 0.2)',
                                    // 'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    // 'rgba(153, 102, 255, 1)',
                                    // 'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            },

                            ],
                        }}
                        height={500}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

            </div>

            <div className='row'>
                <h3 className='graph1-heading'>Sightings in the last 6 years:</h3>

                <div className="exCon chart">
                    <Pie
                        data={{
                            labels: ['2022', '2021', '2020', '2019', '2018', '2017'],
                            datasets: [{
                                label: '# of Sightings',
                                data: [sightings22, sightings21, sightings20, sightings19, sightings18, sightings17],
                                backgroundColor: [
                                    '#FC6161',
                                    '#4DCEEA',
                                    '#EEE85C',
                                    '#82E26A',
                                    '#E15CF6',
                                    '#F6945C'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            },

                            ],
                        }}
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

            </div>




            <div className='row'>
                <h3 className='graph1-heading'>Sightings in the last 6 years:</h3>

                <div className="exCon chart">
                    <Radar
                        data={{
                            labels: ['2022', '2021', '2020', '2019', '2018', '2017'],
                            datasets: [{
                                label: '# of Sightings',
                                data: [sightings22, sightings21, sightings20, sightings19, sightings18, sightings17],
                                backgroundColor: [
                                    '#FC6161',
                                    '#4DCEEA',
                                    '#EEE85C',
                                    '#82E26A',
                                    '#E15CF6',
                                    '#F6945C'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            },

                            ],
                        }}
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />

                </div>

            </div>

        </div>
    );
}

export default ComTwo;



