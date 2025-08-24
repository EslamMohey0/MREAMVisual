import * as React from "react";

// Define the interface for the data structure
interface ChartDataItem {
  label: string;
  value: number;
  color: string;
}

// Define the props interface
interface TypeOfContractsChartProps {
  data: ChartDataItem[];
}

export const TypeOfContractsChart: React.FC<TypeOfContractsChartProps> = ({
  data,
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Debug: Check if data is received
  console.log('TypeOfContractsChart data:', data);
  console.log('Data length:', data?.length);
  console.log('Max value:', Math.max(...data.map(item => item.value)));

  const handleMouseEnter = (data: any, index: number) => {
    setHoveredIndex(index);
  };

  if (!data || data.length === 0) {
    return (
      <div className="bg-primary p-4 rounded-xl border border-secondary">
        <p className="text-white font-medium text-18px mb-4">نوع العقود</p>
        <p className="text-white text-sm">لا توجد بيانات</p>
      </div>
    );
  }

  const maxValue = Math.max(...data.map(item => item.value));
  const minValue = Math.min(...data.map(item => item.value));
  const chartHeight = 287; // Fixed height for the chart

  // Step size: find a "nice" round number depending on maxValue
  const magnitude = Math.pow(10, Math.floor(Math.log10(maxValue))); // e.g. 100 for 600
  const step = Math.max(magnitude / 2, 10); // keeps steps like 100, 50, 10

  // Round maxValue up to nearest step
  const roundedMax = Math.ceil(maxValue / step) * step;

  const generateYAxisLabels = (maxValue: number) => {
    const labels: number[] = [];



    // Generate labels from roundedMax down to 0
    for (let v = roundedMax; v >= 0; v -= step) {
      labels.push(v);
    }

    return labels;
  };


  return (
    <div
      className="chart-container"
      style={{
        width: '950px',
        maxWidth: '950px',
        height: '507px',
        minHeight: '400px',
        gap: '10px',
        opacity: 1,
        borderRadius: '12px',
        padding: '24px',
        background: '#0D0D0D',
        position: 'absolute',
        top:' 10%',
        margin: '0 auto',
      }}
    >
      {/* Chart main row (Y-axis + Bars) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          position: 'relative',
          height: roundedMax * chartHeight / maxValue,
          marginBottom: '60px',
        }}
      >
        {/* Y-axis labels */}
        <div
          className="y-axis-labels"
          style={{
            height: roundedMax * chartHeight / maxValue,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#858585',
            fontSize: '14px',
            marginRight: '20px', // space between axis and bars
          }}
        >
          {generateYAxisLabels(maxValue).map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>

        {/* Chart bars */}
        <div
          className="chart-bars"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            height: roundedMax * chartHeight / maxValue,
            gap: '32px',
            flex: 1,
            position: 'relative',
          }}
        >

          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * chartHeight;
            const remainingHeight = roundedMax * chartHeight / maxValue - barHeight;

            return (
              <div
                key={index}
                className="chart-bar-column"
                onMouseEnter={() => handleMouseEnter(item, index)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  width: '40px',
                  position: 'relative',
                }}
              >

                {/* Remaining space */}
                <div
                  style={{
                    height: remainingHeight,
                    width: '100%',
                    backgroundColor: '#1F1F1F',
                    borderRadius: '12px 12px 0 0',
                    position: 'absolute',
                    top: 0,
                  }}
                />
                {/* Value bar */}
                <div
                  style={{
                    height: barHeight,
                    width: '100%',
                    backgroundColor: '#F5C730',
                    borderRadius: '12px',
                    minHeight: '4px',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
                {/* X-axis label */}
                <div
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '10px',
                    maxWidth: '80px',
                    lineHeight: '1.2',
                    position: 'absolute',
                    bottom: '-50px',
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

};