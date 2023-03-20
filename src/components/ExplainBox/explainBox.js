import React from "react";
import classes from './explainBox.module.css';
import _ from "lodash";

const ExplainBox = ({combinationResult, explainerData, baseLine}) => {
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
                    <span>Baseline Sleep Score:  {baseLine}</span>
                    <hr className={classes.divider}/>
                    <span>Deviation from the baseline score for the selected values : </span>
                    <hr className={classes.divider}/>
                    {
                        Object.keys(explainerData).map(item => (
                            <div className={classes.explainerItem}>
                                <span>For</span>
                                <span className={classes.bolder}>{_.startCase(item)}</span>
                                <span>is</span>
                                <span className={classes.bolder}>{explainerData[item]}</span>
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