import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../config/api";
import { chartDays } from "../config/data";

const HistoricChart = ({ id }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);


  const fetchHistoricData = async () => {
    setLoading(true);
    try {
      console.log(id);
      const { data } = await axios.get(`/api/coins/${id}/historical?days=${days}`);
      setHistoricData(data.prices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching historic data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoricData();
  }, [id, days]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {historicData && (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days )`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div>
            {chartDays.map((day) => (
              <button
                key={day.value}
                onClick={() => setDays(day.value)}
              >
                {day.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricChart;