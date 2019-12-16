import React, {useState} from 'react'
import {ResponsiveLine} from '@nivo/line'

export default (props) => {

    let data =
        [
            {
                "id": "japan",
                "color": "hsl(70, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 213
                    },
                    {
                        "x": "helicopter",
                        "y": 3
                    },
                    {
                        "x": "boat",
                        "y": 269
                    },
                    {
                        "x": "train",
                        "y": 209
                    },
                    {
                        "x": "subway",
                        "y": 49
                    },
                    {
                        "x": "bus",
                        "y": 48
                    },
                    {
                        "x": "car",
                        "y": 170
                    },
                    {
                        "x": "moto",
                        "y": 193
                    },
                    {
                        "x": "bicycle",
                        "y": 28
                    },
                    {
                        "x": "horse",
                        "y": 133
                    },
                    {
                        "x": "skateboard",
                        "y": 25
                    },
                    {
                        "x": "others",
                        "y": 43
                    }
                ]
            },
            {
                "id": "france",
                "color": "hsl(261, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 251
                    },
                    {
                        "x": "helicopter",
                        "y": 234
                    },
                    {
                        "x": "boat",
                        "y": 79
                    },
                    {
                        "x": "train",
                        "y": 115
                    },
                    {
                        "x": "subway",
                        "y": 90
                    },
                    {
                        "x": "bus",
                        "y": 218
                    },
                    {
                        "x": "car",
                        "y": 64
                    },
                    {
                        "x": "moto",
                        "y": 223
                    },
                    {
                        "x": "bicycle",
                        "y": 210
                    },
                    {
                        "x": "horse",
                        "y": 266
                    },
                    {
                        "x": "skateboard",
                        "y": 144
                    },
                    {
                        "x": "others",
                        "y": 89
                    }
                ]
            },
            {
                "id": "us",
                "color": "hsl(21, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 293
                    },
                    {
                        "x": "helicopter",
                        "y": 152
                    },
                    {
                        "x": "boat",
                        "y": 169
                    },
                    {
                        "x": "train",
                        "y": 162
                    },
                    {
                        "x": "subway",
                        "y": 59
                    },
                    {
                        "x": "bus",
                        "y": 220
                    },
                    {
                        "x": "car",
                        "y": 61
                    },
                    {
                        "x": "moto",
                        "y": 275
                    },
                    {
                        "x": "bicycle",
                        "y": 159
                    },
                    {
                        "x": "horse",
                        "y": 252
                    },
                    {
                        "x": "skateboard",
                        "y": 36
                    },
                    {
                        "x": "others",
                        "y": 139
                    }
                ]
            },
            {
                "id": "germany",
                "color": "hsl(156, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 125
                    },
                    {
                        "x": "helicopter",
                        "y": 231
                    },
                    {
                        "x": "boat",
                        "y": 284
                    },
                    {
                        "x": "train",
                        "y": 289
                    },
                    {
                        "x": "subway",
                        "y": 229
                    },
                    {
                        "x": "bus",
                        "y": 288
                    },
                    {
                        "x": "car",
                        "y": 212
                    },
                    {
                        "x": "moto",
                        "y": 164
                    },
                    {
                        "x": "bicycle",
                        "y": 295
                    },
                    {
                        "x": "horse",
                        "y": 235
                    },
                    {
                        "x": "skateboard",
                        "y": 11
                    },
                    {
                        "x": "others",
                        "y": 209
                    }
                ]
            },
            {
                "id": "norway",
                "color": "hsl(182, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 214
                    },
                    {
                        "x": "helicopter",
                        "y": 172
                    },
                    {
                        "x": "boat",
                        "y": 154
                    },
                    {
                        "x": "train",
                        "y": 101
                    },
                    {
                        "x": "subway",
                        "y": 92
                    },
                    {
                        "x": "bus",
                        "y": 286
                    },
                    {
                        "x": "car",
                        "y": 154
                    },
                    {
                        "x": "moto",
                        "y": 55
                    },
                    {
                        "x": "bicycle",
                        "y": 112
                    },
                    {
                        "x": "horse",
                        "y": 100
                    },
                    {
                        "x": "skateboard",
                        "y": 174
                    },
                    {
                        "x": "others",
                        "y": 172
                    }
                ]
            }
        ];


    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <h2 className="tm-block-title">{props.title}</h2>
                <ResponsiveLine
                    data={data}
                    margin={{top: 50, right: 10, bottom: 80, left: 10}}
                    xScale={{type: 'point'}}
                    yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false}}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{scheme: 'nivo'}}
                    pointSize={10}
                    pointColor={{theme: 'background'}}
                    pointBorderWidth={2}
                    pointBorderColor={{from: 'serieColor'}}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    )
}
