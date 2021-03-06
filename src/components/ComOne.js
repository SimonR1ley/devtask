import axios from "axios";
import { useEffect, useState } from "react";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Abduction from "./Abduction";




const ComOne = () => {

    const [ufos, setUfos] = useState("Loading Data");
    const [story, setStory] = useState("Click The Button To Load A Sightings Details");


    useEffect(() => {

        axios.get('data.json')
            .then((res) => {
                let ufos = res.data.length;
                setUfos(ufos);
            })
    });

    const getStory = () => {

        let urlEnd = 'data.json';

        axios.get(urlEnd)
            .then((response) => {
                //console.log(response.data);

                let randomNumber = Math.trunc(Math.random() * 30) + 1;
                console.log(randomNumber);
                let story = response.data[randomNumber].text;
                setStory(story);
            })
    }



    return (
        <div className='container-fluid'>
            <div className="row">
                <div className='col-12'>

                    <div className="mainPage-info">
                        <h1 className='col-12 welcome-heading'>Welcome To Alien Spotter</h1>
                        <p className='col-6 page-info'>Here you'll get real information on sightings of UFOs across the globe.</p>
                        <p className="page-info">The Information page has data on the most seen UFO shapes and most seen sighting numbers for the last 5 and 10 years.</p>
                        <p className="page-info">The Timeline page has information on the amount of sightings from 1950 till a year that you set.</p>
                    </div>


                    <div className="sighting-story">
                        <div className="sighting-con">
                            <h2 className="data-info">Over {ufos} Sightings</h2>
                        </div>
                        <div className="story-container">
                            <h4 className="story-heading">Random Sighting Details</h4>
                            <p className="story">{story}</p>
                        </div>
                        <div className="random-button">
                            <button onClick={getStory} className="btn btn-primary">Random Details</button>
                        </div>
                    </div>


                    <div className="model-con">
                        {/* <h2 className="ufo-heading">Never seen a UFO?</h2> */}
                        <div className="ufo-model">
                            <Canvas clasName="canvas">
                                <OrbitControls enableZoom={false} />
                                <ambientLight intensity={0.1} />
                                <directionalLight position={[-2, 15, 8]} />
                                <Suspense fallback={null}>
                                    <Abduction />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    );
}

export default ComOne;
