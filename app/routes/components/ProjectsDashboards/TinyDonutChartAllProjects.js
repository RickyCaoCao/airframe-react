import React from 'react';
import {  
    PieChart, 
    Pie,
    Cell
} from 'recharts';

import colors from './../../../colors';

const data = [
    {name: 'Group A', value: 35260},
    {name: 'Group B', value: 38000},
    {name: 'Group C', value: 48000},
    {name: 'Group D', value: 11000},
];

const COLORS = [ colors['info'], colors['primary'], colors['indigo'], colors['purple']];

const TinyDonutChartAllProjects = () => (
    <PieChart width={ 160 } height={ 160 }>
        <Pie
            data={data}
            dataKey="value"
            stroke={ colors['white'] }
            innerRadius={ 35 }
            outerRadius={ 75 }
            fill="#8884d8"
        >
            {
                data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
    </PieChart>
);

export { TinyDonutChartAllProjects };
