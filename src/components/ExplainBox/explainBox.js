import React from "react";
import classes from './explainBox.module.css';

const ExplainBox = ({combinationResult, explainerData}) => {
    return (
        <div className={classes.explain_box}>
            <span>Sleep Score</span>
            {
                combinationResult && 
                <div className={classes.combination_result}>
                    {
                        combinationResult
                    }
                </div>
            }
            {
                explainerData && 
                <div className={classes.explainerItemsContainer}>
                    <hr className={classes.divider}/>
                    {
                        Object.keys(explainerData).map(item => (
                            <div className={classes.explainerItem}>
                                <span>{item}</span>
                                <span>{explainerData[item]}</span>
                            </div>
                        ))
                    }
                    <hr className={classes.divider}/>
                </div>
            }
        </div>
    )
}

export default ExplainBox;