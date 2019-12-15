import React, {useState} from 'react'
import { ResponsiveBar } from '@nivo/bar'

export default (props) => {

    let data =
        [
            {
                "country": "AD",
                "hot dog": 64,
                "hot dogColor": "hsl(359, 70%, 50%)",
                "burger": 99,
                "burgerColor": "hsl(99, 70%, 50%)",
                "sandwich": 120,
                "sandwichColor": "hsl(94, 70%, 50%)",
                "kebab": 0,
                "kebabColor": "hsl(224, 70%, 50%)",
                "fries": 66,
                "friesColor": "hsl(299, 70%, 50%)",
                "donut": 181,
                "donutColor": "hsl(214, 70%, 50%)"
            },
            {
                "country": "AE",
                "hot dog": 9,
                "hot dogColor": "hsl(84, 70%, 50%)",
                "burger": 71,
                "burgerColor": "hsl(292, 70%, 50%)",
                "sandwich": 180,
                "sandwichColor": "hsl(352, 70%, 50%)",
                "kebab": 196,
                "kebabColor": "hsl(68, 70%, 50%)",
                "fries": 16,
                "friesColor": "hsl(84, 70%, 50%)",
                "donut": 198,
                "donutColor": "hsl(287, 70%, 50%)"
            },
            {
                "country": "AF",
                "hot dog": 5,
                "hot dogColor": "hsl(336, 70%, 50%)",
                "burger": 118,
                "burgerColor": "hsl(115, 70%, 50%)",
                "sandwich": 127,
                "sandwichColor": "hsl(202, 70%, 50%)",
                "kebab": 127,
                "kebabColor": "hsl(160, 70%, 50%)",
                "fries": 198,
                "friesColor": "hsl(144, 70%, 50%)",
                "donut": 179,
                "donutColor": "hsl(344, 70%, 50%)"
            },
            {
                "country": "AG",
                "hot dog": 172,
                "hot dogColor": "hsl(47, 70%, 50%)",
                "burger": 80,
                "burgerColor": "hsl(29, 70%, 50%)",
                "sandwich": 51,
                "sandwichColor": "hsl(356, 70%, 50%)",
                "kebab": 164,
                "kebabColor": "hsl(233, 70%, 50%)",
                "fries": 132,
                "friesColor": "hsl(349, 70%, 50%)",
                "donut": 66,
                "donutColor": "hsl(170, 70%, 50%)"
            },
            {
                "country": "AI",
                "hot dog": 30,
                "hot dogColor": "hsl(257, 70%, 50%)",
                "burger": 181,
                "burgerColor": "hsl(225, 70%, 50%)",
                "sandwich": 37,
                "sandwichColor": "hsl(67, 70%, 50%)",
                "kebab": 4,
                "kebabColor": "hsl(9, 70%, 50%)",
                "fries": 82,
                "friesColor": "hsl(64, 70%, 50%)",
                "donut": 169,
                "donutColor": "hsl(190, 70%, 50%)"
            },
            {
                "country": "AL",
                "hot dog": 27,
                "hot dogColor": "hsl(119, 70%, 50%)",
                "burger": 86,
                "burgerColor": "hsl(52, 70%, 50%)",
                "sandwich": 12,
                "sandwichColor": "hsl(168, 70%, 50%)",
                "kebab": 67,
                "kebabColor": "hsl(98, 70%, 50%)",
                "fries": 97,
                "friesColor": "hsl(19, 70%, 50%)",
                "donut": 9,
                "donutColor": "hsl(293, 70%, 50%)"
            },
            {
                "country": "AM",
                "hot dog": 99,
                "hot dogColor": "hsl(55, 70%, 50%)",
                "burger": 19,
                "burgerColor": "hsl(88, 70%, 50%)",
                "sandwich": 195,
                "sandwichColor": "hsl(199, 70%, 50%)",
                "kebab": 30,
                "kebabColor": "hsl(302, 70%, 50%)",
                "fries": 93,
                "friesColor": "hsl(97, 70%, 50%)",
                "donut": 143,
                "donutColor": "hsl(25, 70%, 50%)"
            }
        ];

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
        <div className="tm-bg-primary-dark tm-block tm-block-taller">
            <h2 className="tm-block-title">{props.title}</h2>
            <ResponsiveBar
                data={data}
                keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                indexBy="country"
                margin={{ top: 50, right: 0, bottom: 80, left: 0 }}
                padding={0.3}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    </div>
    )
}
