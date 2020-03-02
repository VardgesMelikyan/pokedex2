import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default class Charts extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';
    render() {
        const { stats } = this.props;
        const res = []
        stats.map(state => {
            res.push({ subject: state.stat.name, A: state.base_stat })
        })
        return (
            <RadarChart cx={300} cy={250} outerRadius={150} width={800} height={450} data={res}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        );
    }
}
