import axios from "axios";
import { useState, useEffect } from "react";
import ListData from "../components/listData";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function Home() {
  //Data state
  const [data, setData] = useState([]);
  const [graphDataChart, setgraphDataChart] = useState([]);

  //Chart config
  const dataMapChart = () => {
    return graphDataChart.map((val) => {
      return val.userID;
    });
  };
  const dataMapChartY = () => {
    return graphDataChart.map((val) => {
      return val.counts;
    });
  };
  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return value + " " + "Posts";
          },
        },
      },
    },
  };
  const labels = dataMapChart();
  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: "User ID",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(230, 80, 125)",
          "rgb(220, 75, 122)",
          "rgb(210, 24, 12)",
          "rgb(200, 23, 23)",
          "rgb(190, 11, 77)",
          "rgb(180, 77, 88)",
          "rgb(170, 56, 99)",
          "rgb(160, 34, 34)",
          "rgb(150, 67, 67)",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: dataMapChartY(),
      },
    ],
  };
  const config = {
    type: "line",
    data: dataChart,
    options: {},
  };

  //Get Data
  const getData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
    let graphData = updateGraphData(response.data);
    let userID = updateuserID(graphData);
    console.log(userID, "ini userID");
    setgraphDataChart(userID);
  };

  //Update state graphData
  const updateGraphData = (response) => {
    let graphData = [];
    for (let i = 0; i < response.length; i++) {
      graphData.push({
        id: response[i].id,
        userId: response[i].userId,
      });
    }
    return graphData;
  };

  //Update state userID
  const updateuserID = (graphData) => {
    let userID = [];
    for (let i = 0; i < graphData.length; i++) {
      if (!userID[graphData[i].userId - 1]) {
        userID[graphData[i].userId - 1] = {
          counts: 1,
          userID: graphData[i].userId,
        };
      } else {
        userID[graphData[i].userId - 1].counts++;
      }
    }
    console.log(userID, "ini dari loop");
    return userID;
  };

  // Get Data page load
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ListData data={data} />
      <div className="lg:w-[1000px] lg:flex-row gap-5 flex flex-col lg:mx-auto mt-5 pb-12">
        <div className="w-[300px] mx-auto">
          <Chart type="line" data={dataChart} options={options} />
        </div>
        <div className="w-[300px] mx-auto">
          <Chart type="bar" data={dataChart} options={options} />
        </div>
        <div className="w-[300px] mx-auto">
          <Chart type="pie" data={dataChart} />
        </div>
      </div>
    </div>
  );
}
