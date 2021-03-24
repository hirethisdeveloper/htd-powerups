import React, { useState, useEffect } from 'react'
import { get, set } from 'lodash'
import * as utils from '../../utils'
import { InputForm } from './_markup'

const EditTemplate = () => {

    // set up state getter/setter
    const [visualizationNumber, setVisualizationNumber] = useState(0);

    // button click handler
    const handleClick = event => {
        const query = utils.getQueryParams();
        const parameters = JSON.parse(get(query, 'p'));

        set(parameters, 'config.visualizationNumber', document.getElementById("visualizationNumber").value)

        setTimeout(() => {
            utils.sendMessage('data', parameters)
        }, 800)
    }

    useEffect(() => {

        // get query parameters
        const query = utils.getQueryParams();

        // send ready signal on window load (so fires once)
        window.onload = function () {
            setTimeout(function () {
                utils.sendMessage('ready', {
                    height: document.documentElement.scrollHeight
                })
            }, Number.parseInt(query.wait) + 100)
        }

        const parameters = JSON.parse(get(query, 'p'));
        setVisualizationNumber(parameters.config.visualizationNumber);
        document.getElementById('visualizationNumber').value = visualizationNumber;

    }, [visualizationNumber]);

    return <InputForm title="Flourish Edit" clickHandler={handleClick}  />;
}

export default EditTemplate;