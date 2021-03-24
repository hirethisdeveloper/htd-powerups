import React from 'react'
import * as utils from '../../utils'
import { InputForm } from './_markup'

const SearchTemplate = () => {

    const handleClick = event => {
        const iFrameUrl = new URL(window.location.href);
        const sessionKey = iFrameUrl.searchParams.get('k');
        const ansCustomEmbed = {
            id: sessionKey,
            url: iFrameUrl.href,
            config: {
                visualizationNumber: document.getElementById("visualizationNumber").value,
            }
        }
        setTimeout(() => {
            utils.sendMessage('data', ansCustomEmbed)
        }, 800)
    }

    window.onload = function () {
        const parameters = Object.assign({ wait: 0 }, utils.getQueryParams())
        setTimeout(function () {
            utils.sendMessage('ready', {
                height: document.documentElement.scrollHeight
            })
        }, Number.parseInt(parameters.wait))
    }

    return <InputForm title="Flourish Search" clickHandler={handleClick}  />;
}

export default SearchTemplate;