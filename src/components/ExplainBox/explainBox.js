import React from "react";
import classes from './explainBox.module.css';
import _ from "lodash";

const ExplainBox = ({ combinationResultBg, combinationResult, explainerData, baseLine }) => {
    /// change format of data from object to array
    const explainerDataArray = [];
    for (let key in explainerData) {
        explainerDataArray.push({ key, value: explainerData[key] })   
    }
    return (
        <div className={classes.explain_box}>
            <span>Sleep Score</span>
            {
                combinationResult && 
                <div style={{ "backgroundColor": combinationResultBg }} className={classes.combination_result}>
                    {
                        combinationResult
                    }
                </div>
            }
            
            {
                explainerData && 
                <div className={classes.explainerItemsContainer}>
                    <span className={classes.baseLineSleepScore}>Baseline Sleep Score:  <span className={classes.numberSpan}>{baseLine}</span></span>
                    <hr className={classes.divider}/>
                    <span>Deviation from the baseline score for the selected values : </span>
                    <hr className={classes.divider}/>
                    {
                        explainerDataArray.map(item => (
                            <div className={classes.explainerItem}>
                                <span>For</span>
                                <span className={classes.bolder}>{_.startCase(item.key)}</span>
                                <span>is</span>
                                <span className={`${classes.bolder} ${classes.numberSpan}`}>{item.value}</span>
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