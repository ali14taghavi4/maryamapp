import React, { useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import classes from "./barChart.module.css";

function BarChart({
  xData = [],
  yData = [],
  title = "",
  combinationResult = 0,
  onSelectedValuesChange,
  selectedValues,
  dataKey,
  loading,
}) {
  const [selectedIndex, setSelectedIndex] = useState(
    Math.floor(xData.length / 2)
  );
  const tickRef = useRef(null);

  const onChangeSelected = (params) => {
    if (tickRef.current) {
      clearTimeout(tickRef.current);
    }
    tickRef.current = setTimeout(() => {
      onSelectedValuesChange(dataKey, xData[params.dataIndex]);
    }, 100);

    setSelectedIndex(params.dataIndex);
  };

  return (
    <div className={classes.chart_container}>
      {combinationResult > 0 && (
        <span className={classes.combination_result}>
          {`Sleep score: ${combinationResult}`}
        </span>
      )}
      <ReactECharts
        showLoading={loading}
        onChartReady={(echart) => {
          echart.on("click", (params) => {
            // if (echart.dispatchAction)
            // echart.dispatchAction({
            //   type: "highlight",
            //   seriesIndex: 0,
            //   dataIndex: selectedIndex,
            //   seriesName: "test",
            //   // edgeDataIndex: number | list
            // });
            onChangeSelected(params);
          });
          echart.on("updateAxisPointer", (params) => {
            onChangeSelected(params);
          });
        }}
        echarts={echarts}
        lazyUpdate={true}
        option={{
          height: 160,
          tooltip: {
            trigger: "axis",
            triggerOn: "none",
            position: function(pt) {
              return [pt[0], "10%"];
            },
          },
          title: {
            left: "center",
            text: title,
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: "none",
              },
              restore: {},
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: xData,
            axisPointer: {
              value: selectedIndex,
              snap: true,
              lineStyle: {
                color: "#b33177",
                width: 2,
              },
              label: {
                show: true,
                backgroundColor: "#b33177",
              },
              handle: {
                show: true,
                color: "#b33177",
              },
            },
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "100%"],
            max: 90
              // combinationResult > 0
              //   ? combinationResult * 2
              //   : Math.max(...yData).toFixed(2),
          },
          dataZoom: [
            {
              type: "inside",
              throttle: 50,
            },
          ],
          series: [
            {
              type: "bar",
              symbol: "none",
              sampling: "lttb",
              itemStyle: {
                color: (seriesIndex) => {
                  return seriesIndex.dataIndex === selectedIndex
                    ? "rgb(255, 70, 131)"
                    : "#bdbdbd";
                },
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 158, 68)",
                  },
                  {
                    offset: 1,
                    color: "rgb(255, 70, 131)",
                  },
                ]),
              },
              data: yData,
              // emphasis: combinationResult && {
              //   focus: "series",
              //   label: {
              //     show: true,
              //     // formatter: function(param) {
              //     //   // return param.data[3];
              //     // },
              //     position: "top",
              //   },
              // },
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;