import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import * as utils from '../../utils'

const ViewTemplate = () => {

    // set up state getter/setter
    const [visualizationNumber, setVisualizationNumber] = useState(0);

    useEffect(() => {
        // get query parameters
        const query = utils.getQueryParams();

        // send ready signal on window load (so fires once)
        window.onload = () => {
            setTimeout(function () {
                utils.sendMessage('ready', {
                    height: document.documentElement.scrollHeight
                })
            }, Number.parseInt(query.wait) + 100);
        }

        // get data and parse it from a string. Update state to set config on data-src
        const data = JSON.parse(get(query, 'p', {}))
        setVisualizationNumber(data.config.visualizationNumber)

        // load embed script if we have a vis number
        const scripts = [{ id: 'flourish', url: 'https://public.flourish.studio/resources/embed.js' }]
        if (visualizationNumber && visualizationNumber !== 0) {
            scripts.forEach(item => utils.scriptLoader(item));
        }

    }, [visualizationNumber])

    return <div id="flourish-embed" className="flourish-embed" data-src={`visualisation/${visualizationNumber}`} />;
}

export default ViewTemplate;