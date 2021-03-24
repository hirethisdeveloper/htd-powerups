import React from 'react'

export const InputForm = ({clickHandler, title}) => {
    return <main role="main">
        <section className="jumbotron text-left my-0">
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <h3>{title}</h3>
                    </div>
                </div>
                <form>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="visualizationNumber" className="form-label">Visualization Number</label>
                            <input type="text" className="form-control" name="visualizationNumber" id="visualizationNumber"
                                placeholder="12345" aria-label="Visualization number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="button" id="btnSubmit" className="btn btn-primary" name="btnSubmit" value="Submit"
                                onClick={() => clickHandler()} />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </main>;
}